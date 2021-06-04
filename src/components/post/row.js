import React from "react"
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {motion} from "framer-motion";

const PostRow = ({post, isArchive = false}) => {
    post = post.node || post;

    return (
        <motion.li initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 1}} transition={{ease: 'easeInOut', duration: .3}} className={"list-row" + (isArchive ? ' archive' : '')} key={post.id}>
            <Link title={[post.title]} to={post.fields.path} className='list-row__container'>
                {!isArchive && post.image && post.image.childImageSharp && (
                    <div className='list-row__image-container'>
                        <GatsbyImage alt={post.title} image={getImage(post.image.childImageSharp)} className='list-row__image' style={{
                            position: 'absolute'
                        }} />
                        <GatsbyImage alt={post.title} image={getImage(post.image.childImageSharp)} className='list-row__image' style={{
                            position: 'absolute'
                        }} />
                    </div>
                )}

                <div className="list-row__content">
                    <h2 className='list-row__title'>{post.title}</h2>
                    {!isArchive && post.teaser && (<h3 className='list-row__subtitle'>{post.teaser.childMarkdownRemark.html.replace(/(<([^>]+)>)/gi, "")}</h3>)}
                </div>

                <aside className="list-row__dates">{post.createdOn}</aside>
            </Link>
        </motion.li>
    )
};

export default PostRow