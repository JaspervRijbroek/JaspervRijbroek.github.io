import React from 'react';
import PostList from "../list";

export default {
    title: 'Components/Post/List',
    component: PostList,
    argTypes: {
        isArchive: { control: 'boolean' },
    },
    args: {
        posts: [{
                frontmatter: {
                    title: 'Hello world',
                    description: 'This is the first demo'
                },
                fields: {
                    path: '/',
                    date: 'July 31, 2020'
                }
        }, {
            frontmatter: {
                title: 'Hello world2',
                description: 'This is the second demo'
            },
            fields: {
                path: '/',
                date: 'July 31, 2020'
            }
        }]
    }
};

export const Default = (args) => <PostList posts={args.posts} isArchive={args.isArchive} />;

export const Archived = (args) => <PostList posts={args.posts} isArchive />;