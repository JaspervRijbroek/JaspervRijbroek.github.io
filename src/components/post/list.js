import React from "react"
import PostRow from "./row";

const PostList = ({posts, isArchive = false}) => (
    <div className={'post-list' + (isArchive ? '--archive' : '')}>
        {isArchive && (<h3 className="post-list__title">More like this</h3>)}

        <ul>
            {posts && posts.map((post, index) => (
                <PostRow post={post} isArchive={isArchive} key={(post.node || post).id} />
            ))}
        </ul>
    </div>
);

export default PostList