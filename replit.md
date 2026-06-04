# ProfileLens

Privacy-first profile identity system — manage multiple profile photos and control exactly who sees which one, with full audit tooling.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, proxied at `/api`)
- `pnpm --filter @workspace/profile-lens run dev` — run the frontend (port varies, proxied at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + Tailwind CSS + shadcn/ui + Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (`lib/db`)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- Data-fetching: TanStack Query v5 + Orval-generated React Query hooks
- Storage: Replit Object Storage (photo uploads)
- API codegen: Orval (from OpenAPI spec at `lib/api-spec/openapi.yaml`)
- Build: esbuild (CJS bundle for API server)

## Where things live

```
lib/
  api-spec/openapi.yaml       — source of truth for all API contracts
  api-zod/                    — generated Zod schemas (run codegen)
  api-client-react/           — generated React Query hooks (run codegen)
  db/src/schema/              — Drizzle ORM table definitions
artifacts/
  api-server/src/
    routes/                   — Express route handlers (photos, contacts, lists, visibility, storage)
    lib/visibility-engine.ts  — pure visibility resolution engine
  profile-lens/src/
    pages/                    — Dashboard, Photos, PhotoDetail, Contacts, Lists, Preview
    components/
      VisibilityReport.tsx    — visibility audit modal (all contacts × resolved photos)
      PhotoUploader.tsx       — file upload to Object Storage
    lib/timeAgo.ts            — lightweight relative-time formatter
```

## Architecture decisions

- **Contract-first API**: OpenAPI spec is the single source of truth; Zod schemas and React Query hooks are generated from it — no hand-written fetch calls in the frontend.
- **Visibility engine is pure**: `visibility-engine.ts` contains no Express or DB imports — it's a deterministic function that can be tested in isolation.
- `DEFAULT_USER_ID = 1` is hardcoded throughout (no auth layer — single-user system).
- Preview simulator uses `staleTime: 0` per query so results always reflect the latest saved rules.
- Contacts list and visibility badges avoid double-fetching: the Preview page passes already-fetched contacts to the `VisibilityReport` dialog.

## Product

- **Dashboard** — live stats (total photos, active rules, contacts, lists) with card navigation to each section.
- **Photo Library** — upload photos (file or URL), see visibility badge and upload timestamp per photo.
- **Photo Detail** — controlled visibility rule editor; supports public / contacts / selected / custom list / nobody; list selector appears only when custom_list is chosen; saves invalidate preview cache.
- **Contacts** — full CRUD with avatar, handle, and live list-membership badges.
- **Lists** — create/rename/delete custom groups; add/remove members; two-panel layout.
- **Preview Simulator** — select any contact and see exactly which photo they'd see and why, with a resolution-chain breakdown.
- **Visibility Report** — modal audit table showing every contact's resolved photo, matched rule badge, and engine explanation — sourced live from the same visibility endpoint as the simulator.

## User preferences

- No auth layer — single-user system with `DEFAULT_USER_ID = 1`.
- Preserve existing backend APIs, DB schema, and visibility-engine logic when adding features.
- All frontend data-fetching through generated hooks only (no raw fetch).

## Gotchas

- Always run `pnpm --filter @workspace/api-spec run codegen` after editing `openapi.yaml`.
- OpenAPI component `$ref` schemas prevent Orval name collisions — keep request/response bodies as named `$ref` components, not inline schemas.
- `lib/api-zod/src/index.ts` uses `export type *` for the types barrel to avoid Orval name collision on re-exports.
- Do not run `pnpm dev` at workspace root — use the workflow runner or `pnpm --filter` per artifact.
- `pnpm --filter @workspace/profile-lens run typecheck` (not `build`) for frontend verification — `build` requires workflow-provided env vars.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
- DB migration: edit schema → `pnpm --filter @workspace/db run push` → restart API server.
