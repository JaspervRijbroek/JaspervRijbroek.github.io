import React from "react"
import DefaultTemplate from "./default";
import {graphql} from "gatsby";
import {Profile} from "../components/profile/index";
import {Helmet} from "react-helmet";
import PostList from "../components/post/list";

function capitalize(topic) {
    return topic
        .title
        .split(' ')
        .map(function(part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join(' ');
}

const TopicTemplate = ({data}) => {
    return (
        <DefaultTemplate>
            <Helmet>
                <title>{capitalize(data.contentfulTopic)} | Jvar</title>
            </Helmet>

            <div className="post">
                <header className="post__header">
                    <h1 className="post__title">{capitalize(data.contentfulTopic)}</h1>

                    {data.contentfulTopic.body && data.contentfulTopic.body.childMarkdownRemark.html && (<h2 className="post__headline" dangerouslySetInnerHTML={{__html: data.contentfulTopic.body.childMarkdownRemark.html.replace(/(<([^>]+)>)/gi, "")}} />)}
                </header>
            </div>

            {data && data.allContentfulPost && data.allContentfulPost.nodes && data.allContentfulPost.nodes.length > 0 && (
                <PostList posts={data.allContentfulPost.nodes} />
            )}

            {data && data.allContentfulPost && data.allContentfulPost.nodes && !data.allContentfulPost.nodes.length && (
                <p>No posts found!</p>
            )}

            <footer id="post-meta" className="clearfix">
                <Profile isFooter={true}/>
            </footer>
        </DefaultTemplate>
    )
};

export const pageQuery = graphql`
  query($topicID: String!) {
    contentfulTopic(id: {eq: $topicID}) {
        title
        slug
        body {
          childMarkdownRemark {
            html
          }
        }
    }
    allContentfulPost(filter: {topics: {elemMatch: {id: {eq: $topicID}}}}) {
        nodes {
          id
          title
          createdOn,
          teaser {
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

export default TopicTemplate;