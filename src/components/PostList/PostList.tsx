import React, {useEffect, useState} from "react";
import {useGetPostsQuery} from "../../api/api";
import Post from "../Post/Post";
import {PostType} from "../../features/posts/types";
import {CellMeasurer, CellMeasurerCache, List as VirtualizedList} from "react-virtualized";

const cellCache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 50,
});

export const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Array<PostType>>([]);
    const {data, isFetching} = useGetPostsQuery(1);
    console.log(posts)

    useEffect(() => {
        if (data) {
            setPosts((prev) => [...prev, ...data]);
        }
    }, [data]);


    const rowRenderer = ({index, key, style, parent}: any) => {
        const post = posts[index];

        return (
            <CellMeasurer
                key={key}
                cache={cellCache}
                columnIndex={0}
                rowIndex={index}
                parent={parent}
            >
                <div style={style}>
                    <Post post={post}/>
                </div>
            </CellMeasurer>
        );
    };

    return (
        <div className={'postList'}>
            <VirtualizedList
                height={200}
                rowCount={posts.length}
                rowHeight={cellCache.rowHeight}
                rowRenderer={rowRenderer}
                width={1000}
            />
            {isFetching && <div>Loading...</div>}
        </div>
    );
};
