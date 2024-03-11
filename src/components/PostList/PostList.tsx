import React, {useEffect, useState} from "react";
import {useGetPostsQuery} from "../../api/api";
import Post from "../Post/Post";
import {PostType} from "../../features/posts/types";
import {CellMeasurer, CellMeasurerCache, List as VirtualizedList} from "react-virtualized";

const cellCache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 50,
});

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Array<PostType>>([]);
    const {data, isFetching, refetch} = useGetPostsQuery(1);

    useEffect(() => {
        if (data) {
            setPosts((prev) => [...prev, ...data]);
        }
    }, [data]);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
            refetch();
        }
    };

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
        <div className={'postList'} onScroll={handleScroll}>
            <VirtualizedList
                height={500}
                rowCount={posts.length}
                rowHeight={cellCache.rowHeight}
                rowRenderer={rowRenderer}
                width={500}
            />
            {isFetching && <div>Loading...</div>}
        </div>
    );
};

export default PostList;