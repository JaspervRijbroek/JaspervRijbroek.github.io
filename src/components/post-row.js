import React from "react"
import {Link} from 'gatsby'

const PostRow = ({post}) => (
    <li>
        <Link to={post.fields.path}>
            <aside className="dates">{post.fields.date}</aside>
        </Link>
        <Link to={post.fields.path}>
            {post.frontmatter.title}
            <h2>{post.frontmatter.description}</h2>
        </Link>
    </li>
);

export default PostRow