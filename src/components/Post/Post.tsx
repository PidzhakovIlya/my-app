import React from 'react';
import { Link } from 'react-router-dom';
import {PostType} from "../../features/posts/types";

type Props = {
    post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
    const { id, title, body } = post;

    return (
        <div className={'post'}>
            <div className={'id'}>{id}</div>
            <div className={'title'}>{title}</div>
            <div className={'body'}>{body.length > 50 ? `${body.substring(0, 50)}...` : body}</div>
            <Link to={`/posts/${id}`} className={'link'}>
                Просмотр
            </Link>
        </div>
    );
};

export default Post;