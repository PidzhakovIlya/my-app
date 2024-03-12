import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PostType} from "../features/posts/types";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        getPosts: builder.query<Array<PostType>, number>({
            query: (page) => `/posts?_page=${page}&_limit=100`}),
        getPost: builder.query<PostType, number>({
            query: (id) => `/posts/${id}`
        }),
        // getPosts: builder.query<Array<PostType>,{limit:number,start:number}>({
        //     query:({limit=5, start=1 })=>({
        //         url:`/posts?_page=${start}&_limit=${limit}`,
        //         params:
        //             {
        //                 _limit:limit,
        //                 _start:start,
        //             }
        //     })
        // }),
    })
})

export const {useGetPostsQuery, useGetPostQuery} = api;