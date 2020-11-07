import React from 'react';
import PostList from "../list";

export default {
    title: 'Components/Post/List',
    component: PostList,
    argTypes: {
        isArchive: {control: 'boolean'},
    },
    args: {
        posts: [{
            standfirst: {
                childMarkdownRemark: {
                    html: 'The first blog'
                }
            },
            title: 'Hello world',
            date: 'July 31, 2020',
            fields: {
                path: '/',
            }
        }, {
            standfirst: {
                childMarkdownRemark: {
                    html: 'The last blog'
                }
            },
            title: 'Bye world',
            date: 'July 31, 2020',
            fields: {
                path: '/',
            }
        }]
    }
};

export const Default = (args) => <PostList posts={args.posts} isArchive={args.isArchive}/>;

export const Archived = (args) => <PostList posts={args.posts} isArchive/>;