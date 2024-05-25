import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dummyjsonAPI = createApi({
  reducerPath: 'users',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
} = dummyjsonAPI