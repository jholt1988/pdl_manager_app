import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axiosBaseQuery from 'axiosBaseQuery'

 export const  api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:"api"}),
    endpoints: () => ({})
})