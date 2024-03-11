import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetPostQuery} from "../../api/api";


type Params = {
    id: string
}

export const PostPage: React.FC = () => {
    const {id} = useParams<Params>()
    const {data: post} = useGetPostQuery(Number(id))
    const navigate = useNavigate()
    if (!post) {
        return <div>Пост Не найден</div>
    }
    const onClickHandler = () => {
        navigate("/")
    }

    return (

        <div className={"postPage"}>
            <div className={"id"}>{post.id}</div>
            <div className={"title"}>{post.title}</div>
            <div className={"body"}>{post.body}</div>
            <button onClick={onClickHandler}>Назад</button>
        </div>

    );
};
