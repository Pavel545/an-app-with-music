
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const skyProBack = createApi({
    reducerPath: 'skyProBack',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://51.250.95.23:8000',
    }),
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (body) => ({
                url: '/user/login/',
                method: 'POST',
                body,
            }),
        }),
        postSignup: builder.mutation({
            query: (body) => ({
                url: '/user/signup/',
                method: 'POST',
                body,
            }),
        }),
        getAllTrack: builder.query({
            query: () => "/catalog/track/all"
          }),
    }),
})

export const { usePostLoginMutation,  usePostSignupMutation, useGetAllTrackQuery} = skyProBack
