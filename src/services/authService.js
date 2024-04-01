import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_auth_url, api_key } from "../firebase/auth";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_auth_url}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body: auth,
            })
        }),
        signIn: builder.mutation({
            query: ({...auth}) => ({
                url: `accounts:signInWithPassword?key=${api_key}`,
                method: 'POST',
                body: auth,
            })
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
            url: `profileImages/${localId}.json`,
            method: "PUT",
            body:{
                image: image
            }
        })
        })

    })
})

export const { useSignUpMutation, useSignInMutation, useGetProfileImageQuery, usePostProfileImageMutation } = authApi;