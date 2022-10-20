import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const skyProBack = createApi({
    reducerPath: 'skyProBack',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://51.250.95.23:8000/',
    }),
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (body) => ({
                url: `user/login/?username=${body.username}&password=${body.password}`,
                method: 'POST',
                body,
            }),
        }),
        postSignup: builder.mutation({
            query: (body) => ({
                url: `user/signup/?username=${body.username}&email=${body.email}password=${body.password}`,
                method: 'POST',
                body,
            }),
        }),
        getAllTrack: builder.query({
            query: () => 'catalog/track/all',
        }),
        getIdTrack: builder.query({
            query: (body) => 'catalog/track/'+body,
        }),
    }),
})

export const {
    usePostLoginMutation,
    usePostSignupMutation,
    useGetAllTrackQuery,
    useGetIdTrackQuery,
} = skyProBack
