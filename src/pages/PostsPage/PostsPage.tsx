import React from "react";
// import PostListTEST from "../../components/PostListTEST/PostListTEST";
import {PostList} from "../../components/PostList/PostList";


export const PostsPage: React.FC = () => {
    return (
        <div>
            <h1>Список Постов</h1>
            <PostList/>
        </div>
    );
};
