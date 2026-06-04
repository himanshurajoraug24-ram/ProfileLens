import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Contact, ContactInput, ContactList, ContactListInput, ContactListUpdate, ContactUpdate, ErrorEnvelope, HealthStatus, ListMemberInput, PhotoInput, PhotoUpdate, ProfilePhoto, StorageUploadRequest, StorageUploadResponse, User, UserStats, UserUpdate, VisibilityInput, VisibilityPreview, VisibilityRule } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getRequestUploadUrlUrl: () => string;
/**
 * Returns a presigned GCS URL for direct upload. Send JSON metadata only — NOT the file.
Then upload the file directly to the returned presigned URL via PUT.

 * @summary Request a presigned URL for file upload
 */
export declare const requestUploadUrl: (storageUploadRequest: StorageUploadRequest, options?: RequestInit) => Promise<StorageUploadResponse>;
export declare const getRequestUploadUrlMutationOptions: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<StorageUploadRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<StorageUploadRequest>;
}, TContext>;
export type RequestUploadUrlMutationResult = NonNullable<Awaited<ReturnType<typeof requestUploadUrl>>>;
export type RequestUploadUrlMutationBody = BodyType<StorageUploadRequest>;
export type RequestUploadUrlMutationError = ErrorType<ErrorEnvelope>;
/**
* @summary Request a presigned URL for file upload
*/
export declare const useRequestUploadUrl: <TError = ErrorType<ErrorEnvelope>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<StorageUploadRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<StorageUploadRequest>;
}, TContext>;
export declare const getGetStorageObjectUrl: (objectPath: string) => string;
/**
 * @summary Serve an uploaded object
 */
export declare const getStorageObject: (objectPath: string, options?: RequestInit) => Promise<Blob>;
export declare const getGetStorageObjectQueryKey: (objectPath: string) => readonly [`/api/storage/objects/${string}`];
export declare const getGetStorageObjectQueryOptions: <TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<ErrorEnvelope>>(objectPath: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStorageObjectQueryResult = NonNullable<Awaited<ReturnType<typeof getStorageObject>>>;
export type GetStorageObjectQueryError = ErrorType<ErrorEnvelope>;
/**
 * @summary Serve an uploaded object
 */
export declare function useGetStorageObject<TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<ErrorEnvelope>>(objectPath: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetMeUrl: () => string;
/**
 * @summary Get current user profile
 */
export declare const getMe: (options?: RequestInit) => Promise<User>;
export declare const getGetMeQueryKey: () => readonly ["/api/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<unknown>;
/**
 * @summary Get current user profile
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateMeUrl: () => string;
/**
 * @summary Update current user profile
 */
export declare const updateMe: (userUpdate: UserUpdate, options?: RequestInit) => Promise<User>;
export declare const getUpdateMeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, {
        data: BodyType<UserUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, {
    data: BodyType<UserUpdate>;
}, TContext>;
export type UpdateMeMutationResult = NonNullable<Awaited<ReturnType<typeof updateMe>>>;
export type UpdateMeMutationBody = BodyType<UserUpdate>;
export type UpdateMeMutationError = ErrorType<unknown>;
/**
* @summary Update current user profile
*/
export declare const useUpdateMe: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, {
        data: BodyType<UserUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateMe>>, TError, {
    data: BodyType<UserUpdate>;
}, TContext>;
export declare const getGetMyStatsUrl: () => string;
/**
 * @summary Get dashboard summary stats
 */
export declare const getMyStats: (options?: RequestInit) => Promise<UserStats>;
export declare const getGetMyStatsQueryKey: () => readonly ["/api/me/stats"];
export declare const getGetMyStatsQueryOptions: <TData = Awaited<ReturnType<typeof getMyStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMyStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMyStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getMyStats>>>;
export type GetMyStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary stats
 */
export declare function useGetMyStats<TData = Awaited<ReturnType<typeof getMyStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMyStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListPhotosUrl: () => string;
/**
 * @summary List all profile photos for current user
 */
export declare const listPhotos: (options?: RequestInit) => Promise<ProfilePhoto[]>;
export declare const getListPhotosQueryKey: () => readonly ["/api/photos"];
export declare const getListPhotosQueryOptions: <TData = Awaited<ReturnType<typeof listPhotos>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPhotos>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPhotos>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPhotosQueryResult = NonNullable<Awaited<ReturnType<typeof listPhotos>>>;
export type ListPhotosQueryError = ErrorType<unknown>;
/**
 * @summary List all profile photos for current user
 */
export declare function useListPhotos<TData = Awaited<ReturnType<typeof listPhotos>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPhotos>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreatePhotoUrl: () => string;
/**
 * @summary Upload a new profile photo
 */
export declare const createPhoto: (photoInput: PhotoInput, options?: RequestInit) => Promise<ProfilePhoto>;
export declare const getCreatePhotoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPhoto>>, TError, {
        data: BodyType<PhotoInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPhoto>>, TError, {
    data: BodyType<PhotoInput>;
}, TContext>;
export type CreatePhotoMutationResult = NonNullable<Awaited<ReturnType<typeof createPhoto>>>;
export type CreatePhotoMutationBody = BodyType<PhotoInput>;
export type CreatePhotoMutationError = ErrorType<unknown>;
/**
* @summary Upload a new profile photo
*/
export declare const useCreatePhoto: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPhoto>>, TError, {
        data: BodyType<PhotoInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createPhoto>>, TError, {
    data: BodyType<PhotoInput>;
}, TContext>;
export declare const getGetPhotoUrl: (photoId: number) => string;
/**
 * @summary Get a specific profile photo
 */
export declare const getPhoto: (photoId: number, options?: RequestInit) => Promise<ProfilePhoto>;
export declare const getGetPhotoQueryKey: (photoId: number) => readonly [`/api/photos/${number}`];
export declare const getGetPhotoQueryOptions: <TData = Awaited<ReturnType<typeof getPhoto>>, TError = ErrorType<unknown>>(photoId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPhoto>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPhoto>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPhotoQueryResult = NonNullable<Awaited<ReturnType<typeof getPhoto>>>;
export type GetPhotoQueryError = ErrorType<unknown>;
/**
 * @summary Get a specific profile photo
 */
export declare function useGetPhoto<TData = Awaited<ReturnType<typeof getPhoto>>, TError = ErrorType<unknown>>(photoId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPhoto>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdatePhotoUrl: (photoId: number) => string;
/**
 * @summary Update photo label or set as default
 */
export declare const updatePhoto: (photoId: number, photoUpdate: PhotoUpdate, options?: RequestInit) => Promise<ProfilePhoto>;
export declare const getUpdatePhotoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePhoto>>, TError, {
        photoId: number;
        data: BodyType<PhotoUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePhoto>>, TError, {
    photoId: number;
    data: BodyType<PhotoUpdate>;
}, TContext>;
export type UpdatePhotoMutationResult = NonNullable<Awaited<ReturnType<typeof updatePhoto>>>;
export type UpdatePhotoMutationBody = BodyType<PhotoUpdate>;
export type UpdatePhotoMutationError = ErrorType<unknown>;
/**
* @summary Update photo label or set as default
*/
export declare const useUpdatePhoto: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePhoto>>, TError, {
        photoId: number;
        data: BodyType<PhotoUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePhoto>>, TError, {
    photoId: number;
    data: BodyType<PhotoUpdate>;
}, TContext>;
export declare const getDeletePhotoUrl: (photoId: number) => string;
/**
 * @summary Delete a profile photo
 */
export declare const deletePhoto: (photoId: number, options?: RequestInit) => Promise<void>;
export declare const getDeletePhotoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePhoto>>, TError, {
        photoId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deletePhoto>>, TError, {
    photoId: number;
}, TContext>;
export type DeletePhotoMutationResult = NonNullable<Awaited<ReturnType<typeof deletePhoto>>>;
export type DeletePhotoMutationError = ErrorType<unknown>;
/**
* @summary Delete a profile photo
*/
export declare const useDeletePhoto: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePhoto>>, TError, {
        photoId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deletePhoto>>, TError, {
    photoId: number;
}, TContext>;
export declare const getGetPhotoVisibilityUrl: (photoId: number) => string;
/**
 * @summary Get visibility rule for a photo
 */
export declare const getPhotoVisibility: (photoId: number, options?: RequestInit) => Promise<VisibilityRule>;
export declare const getGetPhotoVisibilityQueryKey: (photoId: number) => readonly [`/api/photos/${number}/visibility`];
export declare const getGetPhotoVisibilityQueryOptions: <TData = Awaited<ReturnType<typeof getPhotoVisibility>>, TError = ErrorType<unknown>>(photoId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPhotoVisibility>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPhotoVisibility>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPhotoVisibilityQueryResult = NonNullable<Awaited<ReturnType<typeof getPhotoVisibility>>>;
export type GetPhotoVisibilityQueryError = ErrorType<unknown>;
/**
 * @summary Get visibility rule for a photo
 */
export declare function useGetPhotoVisibility<TData = Awaited<ReturnType<typeof getPhotoVisibility>>, TError = ErrorType<unknown>>(photoId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPhotoVisibility>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSetPhotoVisibilityUrl: (photoId: number) => string;
/**
 * @summary Set visibility rule for a photo
 */
export declare const setPhotoVisibility: (photoId: number, visibilityInput: VisibilityInput, options?: RequestInit) => Promise<VisibilityRule>;
export declare const getSetPhotoVisibilityMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setPhotoVisibility>>, TError, {
        photoId: number;
        data: BodyType<VisibilityInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setPhotoVisibility>>, TError, {
    photoId: number;
    data: BodyType<VisibilityInput>;
}, TContext>;
export type SetPhotoVisibilityMutationResult = NonNullable<Awaited<ReturnType<typeof setPhotoVisibility>>>;
export type SetPhotoVisibilityMutationBody = BodyType<VisibilityInput>;
export type SetPhotoVisibilityMutationError = ErrorType<unknown>;
/**
* @summary Set visibility rule for a photo
*/
export declare const useSetPhotoVisibility: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setPhotoVisibility>>, TError, {
        photoId: number;
        data: BodyType<VisibilityInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setPhotoVisibility>>, TError, {
    photoId: number;
    data: BodyType<VisibilityInput>;
}, TContext>;
export declare const getPreviewAsContactUrl: (contactId: number) => string;
/**
 * @summary Preview which photo a specific contact would see
 */
export declare const previewAsContact: (contactId: number, options?: RequestInit) => Promise<VisibilityPreview>;
export declare const getPreviewAsContactQueryKey: (contactId: number) => readonly [`/api/preview/${number}`];
export declare const getPreviewAsContactQueryOptions: <TData = Awaited<ReturnType<typeof previewAsContact>>, TError = ErrorType<unknown>>(contactId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof previewAsContact>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof previewAsContact>>, TError, TData> & {
    queryKey: QueryKey;
};
export type PreviewAsContactQueryResult = NonNullable<Awaited<ReturnType<typeof previewAsContact>>>;
export type PreviewAsContactQueryError = ErrorType<unknown>;
/**
 * @summary Preview which photo a specific contact would see
 */
export declare function usePreviewAsContact<TData = Awaited<ReturnType<typeof previewAsContact>>, TError = ErrorType<unknown>>(contactId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof previewAsContact>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListContactsUrl: () => string;
/**
 * @summary List all contacts
 */
export declare const listContacts: (options?: RequestInit) => Promise<Contact[]>;
export declare const getListContactsQueryKey: () => readonly ["/api/contacts"];
export declare const getListContactsQueryOptions: <TData = Awaited<ReturnType<typeof listContacts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContacts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listContacts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListContactsQueryResult = NonNullable<Awaited<ReturnType<typeof listContacts>>>;
export type ListContactsQueryError = ErrorType<unknown>;
/**
 * @summary List all contacts
 */
export declare function useListContacts<TData = Awaited<ReturnType<typeof listContacts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContacts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateContactUrl: () => string;
/**
 * @summary Add a new contact
 */
export declare const createContact: (contactInput: ContactInput, options?: RequestInit) => Promise<Contact>;
export declare const getCreateContactMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export type CreateContactMutationResult = NonNullable<Awaited<ReturnType<typeof createContact>>>;
export type CreateContactMutationBody = BodyType<ContactInput>;
export type CreateContactMutationError = ErrorType<unknown>;
/**
* @summary Add a new contact
*/
export declare const useCreateContact: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContact>>, TError, {
        data: BodyType<ContactInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createContact>>, TError, {
    data: BodyType<ContactInput>;
}, TContext>;
export declare const getUpdateContactUrl: (contactId: number) => string;
/**
 * @summary Update a contact
 */
export declare const updateContact: (contactId: number, contactUpdate: ContactUpdate, options?: RequestInit) => Promise<Contact>;
export declare const getUpdateContactMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContact>>, TError, {
        contactId: number;
        data: BodyType<ContactUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateContact>>, TError, {
    contactId: number;
    data: BodyType<ContactUpdate>;
}, TContext>;
export type UpdateContactMutationResult = NonNullable<Awaited<ReturnType<typeof updateContact>>>;
export type UpdateContactMutationBody = BodyType<ContactUpdate>;
export type UpdateContactMutationError = ErrorType<unknown>;
/**
* @summary Update a contact
*/
export declare const useUpdateContact: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContact>>, TError, {
        contactId: number;
        data: BodyType<ContactUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateContact>>, TError, {
    contactId: number;
    data: BodyType<ContactUpdate>;
}, TContext>;
export declare const getDeleteContactUrl: (contactId: number) => string;
/**
 * @summary Remove a contact
 */
export declare const deleteContact: (contactId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteContactMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContact>>, TError, {
        contactId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteContact>>, TError, {
    contactId: number;
}, TContext>;
export type DeleteContactMutationResult = NonNullable<Awaited<ReturnType<typeof deleteContact>>>;
export type DeleteContactMutationError = ErrorType<unknown>;
/**
* @summary Remove a contact
*/
export declare const useDeleteContact: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContact>>, TError, {
        contactId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteContact>>, TError, {
    contactId: number;
}, TContext>;
export declare const getListContactListsUrl: () => string;
/**
 * @summary List all custom contact lists
 */
export declare const listContactLists: (options?: RequestInit) => Promise<ContactList[]>;
export declare const getListContactListsQueryKey: () => readonly ["/api/lists"];
export declare const getListContactListsQueryOptions: <TData = Awaited<ReturnType<typeof listContactLists>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContactLists>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listContactLists>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListContactListsQueryResult = NonNullable<Awaited<ReturnType<typeof listContactLists>>>;
export type ListContactListsQueryError = ErrorType<unknown>;
/**
 * @summary List all custom contact lists
 */
export declare function useListContactLists<TData = Awaited<ReturnType<typeof listContactLists>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContactLists>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateContactListUrl: () => string;
/**
 * @summary Create a custom contact list
 */
export declare const createContactList: (contactListInput: ContactListInput, options?: RequestInit) => Promise<ContactList>;
export declare const getCreateContactListMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContactList>>, TError, {
        data: BodyType<ContactListInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createContactList>>, TError, {
    data: BodyType<ContactListInput>;
}, TContext>;
export type CreateContactListMutationResult = NonNullable<Awaited<ReturnType<typeof createContactList>>>;
export type CreateContactListMutationBody = BodyType<ContactListInput>;
export type CreateContactListMutationError = ErrorType<unknown>;
/**
* @summary Create a custom contact list
*/
export declare const useCreateContactList: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createContactList>>, TError, {
        data: BodyType<ContactListInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createContactList>>, TError, {
    data: BodyType<ContactListInput>;
}, TContext>;
export declare const getUpdateContactListUrl: (listId: number) => string;
/**
 * @summary Rename a contact list
 */
export declare const updateContactList: (listId: number, contactListUpdate: ContactListUpdate, options?: RequestInit) => Promise<ContactList>;
export declare const getUpdateContactListMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContactList>>, TError, {
        listId: number;
        data: BodyType<ContactListUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateContactList>>, TError, {
    listId: number;
    data: BodyType<ContactListUpdate>;
}, TContext>;
export type UpdateContactListMutationResult = NonNullable<Awaited<ReturnType<typeof updateContactList>>>;
export type UpdateContactListMutationBody = BodyType<ContactListUpdate>;
export type UpdateContactListMutationError = ErrorType<unknown>;
/**
* @summary Rename a contact list
*/
export declare const useUpdateContactList: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateContactList>>, TError, {
        listId: number;
        data: BodyType<ContactListUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateContactList>>, TError, {
    listId: number;
    data: BodyType<ContactListUpdate>;
}, TContext>;
export declare const getDeleteContactListUrl: (listId: number) => string;
/**
 * @summary Delete a custom list
 */
export declare const deleteContactList: (listId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteContactListMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContactList>>, TError, {
        listId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteContactList>>, TError, {
    listId: number;
}, TContext>;
export type DeleteContactListMutationResult = NonNullable<Awaited<ReturnType<typeof deleteContactList>>>;
export type DeleteContactListMutationError = ErrorType<unknown>;
/**
* @summary Delete a custom list
*/
export declare const useDeleteContactList: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteContactList>>, TError, {
        listId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteContactList>>, TError, {
    listId: number;
}, TContext>;
export declare const getListContactListMembersUrl: (listId: number) => string;
/**
 * @summary Get members of a list
 */
export declare const listContactListMembers: (listId: number, options?: RequestInit) => Promise<Contact[]>;
export declare const getListContactListMembersQueryKey: (listId: number) => readonly [`/api/lists/${number}/members`];
export declare const getListContactListMembersQueryOptions: <TData = Awaited<ReturnType<typeof listContactListMembers>>, TError = ErrorType<unknown>>(listId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContactListMembers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listContactListMembers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListContactListMembersQueryResult = NonNullable<Awaited<ReturnType<typeof listContactListMembers>>>;
export type ListContactListMembersQueryError = ErrorType<unknown>;
/**
 * @summary Get members of a list
 */
export declare function useListContactListMembers<TData = Awaited<ReturnType<typeof listContactListMembers>>, TError = ErrorType<unknown>>(listId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listContactListMembers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAddContactToListUrl: (listId: number) => string;
/**
 * @summary Add a contact to a list
 */
export declare const addContactToList: (listId: number, listMemberInput: ListMemberInput, options?: RequestInit) => Promise<Contact>;
export declare const getAddContactToListMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addContactToList>>, TError, {
        listId: number;
        data: BodyType<ListMemberInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof addContactToList>>, TError, {
    listId: number;
    data: BodyType<ListMemberInput>;
}, TContext>;
export type AddContactToListMutationResult = NonNullable<Awaited<ReturnType<typeof addContactToList>>>;
export type AddContactToListMutationBody = BodyType<ListMemberInput>;
export type AddContactToListMutationError = ErrorType<unknown>;
/**
* @summary Add a contact to a list
*/
export declare const useAddContactToList: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addContactToList>>, TError, {
        listId: number;
        data: BodyType<ListMemberInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof addContactToList>>, TError, {
    listId: number;
    data: BodyType<ListMemberInput>;
}, TContext>;
export declare const getRemoveContactFromListUrl: (listId: number, contactId: number) => string;
/**
 * @summary Remove a contact from a list
 */
export declare const removeContactFromList: (listId: number, contactId: number, options?: RequestInit) => Promise<void>;
export declare const getRemoveContactFromListMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeContactFromList>>, TError, {
        listId: number;
        contactId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof removeContactFromList>>, TError, {
    listId: number;
    contactId: number;
}, TContext>;
export type RemoveContactFromListMutationResult = NonNullable<Awaited<ReturnType<typeof removeContactFromList>>>;
export type RemoveContactFromListMutationError = ErrorType<unknown>;
/**
* @summary Remove a contact from a list
*/
export declare const useRemoveContactFromList: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeContactFromList>>, TError, {
        listId: number;
        contactId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof removeContactFromList>>, TError, {
    listId: number;
    contactId: number;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map