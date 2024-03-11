import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PostType} from "../features/posts/types";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        getPosts: builder.query<Array<PostType>, number>({
            query: (page) => `/posts?_page=${page}&_limit=10`}),
        getPost: builder.query<PostType, number>({
            query: (id) => `/posts/${id}`
        })
    })
})

export const {useGetPostsQuery, useGetPostQuery} = api;