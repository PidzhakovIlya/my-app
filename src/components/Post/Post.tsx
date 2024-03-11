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
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {title}</div>
            <div  className='postitem__body'>
                Body:  {body.length>20?post.body.substring(0,20)+'...':post.body}
            </div>
            <Link to={`/posts/${id}`} className={'link'}>
                Просмотр
            </Link>
        </div>
    );
};

export default Post;