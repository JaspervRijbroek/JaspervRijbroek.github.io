import React from 'react';
import PostRow from "../row";

export default {
    title: 'Components/Post/Row',
    component: PostRow,
    argTypes: {
        isArchive: { control: 'boolean' },
    },
    args: {
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
    },
};

export const Default = (args) => <PostRow post={args} isArchive={args.isArchive} />;

export const Archived = (args) => <PostRow post={args} isArchive />;