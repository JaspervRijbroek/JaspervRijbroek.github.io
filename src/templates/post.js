import React from "react"
import DefaultTemplate from "./default";
import {graphql} from "gatsby";
import { Helmet } from "react-helmet"
import {Profile} from "../components/profile/index";
import TopicList from "../components/topic/list";
import PostList from "../components/post/list";

const BlogTemplate = ({data}) => {
    return (
        <DefaultTemplate>
            <Helmet>
                <title>{data.contentfulPost.title} | Jvar</title>
            </Helmet>

            <article className="post">
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

            {data && data.allMarkdownRemark && data.allMarkdownRemark.nodes && data.allMarkdownRemark.nodes.length > 0 && (
                <PostList posts={data.allMarkdownRemark.nodes} isArchive={true} />
            )}

        </DefaultTemplate>
    )
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      createdOn(formatString: "MMMM DD, YYYY")
      topics {
        id
        title
        slug
      }
    }
  }
`;

export default BlogTemplate;