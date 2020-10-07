import React from "react"
import {Link} from 'gatsby'

const PostRow = ({post}) => (
    <li>
        <Link title={[post.frontmatter.title]} to={post.fields.path}>
            <aside className="dates">{post.fields.date}</aside>

            {post.frontmatter.title}
            <h2>{post.frontmatter.description}</h2>
        </Link>
    </li>
);

export default PostRow