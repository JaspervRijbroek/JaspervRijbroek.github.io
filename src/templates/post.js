import React from "react"
import DefaultTemplate from "./default";
import {graphql} from "gatsby";
import { Helmet } from "react-helmet"
import {Profile} from "../components/profile/index";
import TopicList from "../components/topic/list";
import PostList from "../components/post/list";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogTemplate = ({data}) => {
    return (
        <DefaultTemplate>
            <Helmet>
                <title>{data.contentfulPost.title} | Jvar</title>
            </Helmet>

            <article className="post">
                {data.contentfulPost && data.contentfulPost.image && data.contentfulPost.image.childImageSharp && (
                    <GatsbyImage image={getImage(data.contentfulPost.image.childImageSharp)} className='post__backdrop' style={{
                        position: 'absolute'
                    }} />
                )}

                <header className="post__header">
                    <h1 className="post__title">
                        {data.contentfulPost.title}
                    </h1>

                    <h2 className="post__headline">
                        <span>On </span>{data.contentfulPost.createdOn}

                        {data && data.contentfulPost && data.contentfulPost.topics && data.contentfulPost.topics.length && (
                            <TopicList topics={data.contentfulPost.topics} />
                        )}
                    </h2>
                </header>

                <section className="post__body" dangerouslySetInnerHTML={{__html: data.contentfulPost.body.childMarkdownRemark.html}}/>
            </article>

            <Profile isFooter={true}/>

            {data && data.allContentfulPost && data.allContentfulPost.nodes && data.allContentfulPost.nodes.length > 0 && (
                <PostList posts={data.allContentfulPost.nodes} isArchive={true} />
            )}

        </DefaultTemplate>
    )
};

export const pageQuery = graphql`
  query($id: String!, $topics: [String]!) {
    contentfulPost(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        childImageSharp {
          gatsbyImageData(
            width: 2140
            height: 450
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      createdOn(formatString: "MMMM DD, YYYY")
      topics {
        id
        title
        slug
      }
    }
    allContentfulPost(filter: {topics: {elemMatch: {id: {in: $topics}}}, id: {ne: $id}}, sort: {fields: createdOn, order: DESC}, limit: 5) {
            nodes {
                id
                title
                createdOn(formatString: "MMMM DD, YYYY")
                body {
                  childMarkdownRemark {
                    html
                  }
                }
                fields {
                    path
                }
            }
    }
  }
`;

export default BlogTemplate;