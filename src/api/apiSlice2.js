import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice2 = createApi({
  reducerPath: 'apiSlice2',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeoples: builder.query({
      query: () => '/people',
      providesTags: ['People']
    })
  })
})

export const { useGetPeoplesQuery } = apiSlice2;