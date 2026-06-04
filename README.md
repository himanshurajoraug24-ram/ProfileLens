# 🌐 ProfileLens: AI-Powered Identity & Granular Privacy Simulation Platform

ProfileLens is an AI-powered Identity & Privacy Management Platform that enables users to generate AI avatars, manage audience-specific profile visibility, simulate access policies, and visualize media distribution across different privacy scopes. Built using a high-performance **Next.js** and **TypeScript** architecture.

---

## 🎯 The Core Problem ProfileLens Solves (Why this project exists)

Traditional social media platforms only offer binary privacy settings (either your profile photo is visible to everyone, or it's hidden). There is no way to present different versions of your digital identity to different social circles.

**ProfileLens solves this by engineering "Context-Aware Identity Controls":**
* **The Core Concept:** A user can generate multiple AI-powered avatars (e.g., professional, casual, cartoon, anime) within the platform.
* **Granular Audience Mapping:** Instead of hiding your profile, you map specific images to specific audience groups. 
* **The Result:** When your **Close Friends** view your profile, they see a personalized, casual AI avatar. When **Normal Contacts** or professional circles view the exact same profile, they see a totally different, appropriate profile image—all simulated dynamically through automated privacy scopes.

---

## 🚀 Core Features

### 🤖 AI Studio & Photo Management
- **Multi-Avatar Generation:** AI, Cartoon, and Anime avatar generation workflows.
- **Conversational Editing:** ChatGPT-style conversational workflows for real-time asset editing.
- **Asset Pipeline:** Powered by `ObjectUploader.tsx` and a custom `use-upload.ts` hook for high-performance multi-image processing and state tracking.

### 🔒 Privacy & Visibility Engine
- **Granular Controls:** Contact-based, Close Friends, and Contacts-Only visibility maps.
- **Real-time Policy Simulation:** Evaluates rules (`visibilityRule.ts`, `visibilityType.ts`) dynamically to validate privacy scopes before data state changes.
- **Telemetry & Logs:** Access evaluation simulation layers (`visibilityPreview.ts`) to track execution logs.

### 👥 Audience & Network Visualizer
- **Contacts Management:** Dynamic CRUD for contacts with multi-tier access assignment.
- **Distribution Mapping:** Media-to-policy tracking and granular visibility analysis via pre-compiled schemas.

---

## 🛠️ Technical Architecture & Tech Stack

* **Frontend Framework:** Next.js (App Router workflow optimization)
* **Language & Safety:** TypeScript 100% (Strict compile options managed via `tsconfig.json`)
* **Database & Schema Layer:** Drizzle ORM pipeline (`drizzle.config.ts`)
* **Dependency & Workspace Management:** PNPM Workspace architecture (`pnpm-workspace.yaml`)
* **API Specification:** OpenAPI standard (`openapi.yaml`) for structured network requests and automated error schemas (`errorEnvelope.ts`).

---

## 📂 Repository Layout

The project structure is designed as a flat, high-visibility architecture for rapid peer review:
* `ObjectUploader.tsx` & `use-upload.ts` — Handles heavy multi-format file uploads and state logic.
* `visibilityRule.ts` & `visibilityType.ts` — Core engine managing privacy evaluation and constraints.
* `api.ts` & `api.schemas.ts` — Strictly typed API layer generated using the OpenAPI specs.
