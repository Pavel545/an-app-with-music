import { configureStore } from '@reduxjs/toolkit'
import { skyProBack } from '../servises/serv'
export const store = configureStore({
    reducer: {
        [skyProBack.reducerPath]: skyProBack.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(skyProBack.middleware),
})