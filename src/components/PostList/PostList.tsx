import React, {useEffect, useState} from "react";
import {api} from "../../api/api";
import Post from "../Post/Post";


export const PostList: React.FC = () => {
    const [currentPostStart,setCurrentPostStart]=useState(0)
    const {data:posts, isLoading} =api.useGetPostsQuery({limit:50,start:currentPostStart})
    const [isMyFetching,setIsFetchingDown]=useState(false)
    const [isMyFetchingUp,setIsMyFetchingUp]=useState(false)
    useEffect(()=>{
        if(isMyFetching)
        {
            setCurrentPostStart(prev=>{
                return prev<50?prev+2:prev
            })
            setIsFetchingDown(false)
        }
    },[isMyFetching])
    useEffect(()=>{
        if(isMyFetchingUp)
        {
            setCurrentPostStart(prev=>{
                return prev>0?prev-2:prev
            })
            setIsMyFetchingUp(false)
        }
    },[isMyFetchingUp])
    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return ()=>{
            document.removeEventListener('scroll',scrollHandler)
        }
    },[])
    const scrollHandler=(e:any):void=>{
        if(e.target.documentElement.scrollTop<100)
        {
            setIsMyFetchingUp(true)
        }
        if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<50)
        {
            setIsFetchingDown(true)
            window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
        }
    }
    return (
        <div>
            <div className='post__list'>
                {posts?.map(post=><Post key={post.id} post={post}/>)}
            </div>
            {isLoading&&<div>Загрузка данных</div>}
        </div>
    );
};