import React from "react"
import {Link} from 'gatsby'

const PostRow = ({post, isArchive = false}) => {
    post = post.node || post;

    return (
    <li className="list-row">
        <Link title={[post.title]} to={post.fields.path}>
            <aside className="dates">{post.date}</aside>

            {post.title}
            {!isArchive && (<h2>{post.standfirst.childMarkdownRemark.html.replace(/(<([^>]+)>)/gi, "")}</h2>)}
        </Link>
    </li>
)};

export default PostRow