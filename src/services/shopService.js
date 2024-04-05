import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "recipes.json",
    }),
    getRecipesByCategory: builder.query({
      query: (category) =>
        `recipes.json?orderBy="category"&equalTo="${category}"`,
    }),

    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, imageTaked }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: imageTaked,
        },
      }),
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipesByCategoryQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} = shopApi;
