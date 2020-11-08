import React from "react"
import {Link} from 'gatsby'

const PostRow = ({post, isArchive = false}) => {
    post = post.node || post;

    return (
    <li className={"list-row" + (isArchive ? ' archive' : '')}>
        <Link title={[post.title]} to={post.fields.path}>
            <aside className="dates">{post.date}</aside>

            {post.title}
            {!isArchive && post.teaser && (<h2>{post.teaser.childMarkdownRemark.html.replace(/(<([^>]+)>)/gi, "")}</h2>)}
        </Link>
    </li>
)};

export default PostRow