import React from 'react';
import PostRow from "../row";

export default {
    title: 'Components/Post/Row',
    component: PostRow,
    argTypes: {
        isArchive: { control: 'boolean' },
    },
    args: {
        frontmatter: {
            title: 'Hello world',
            description: 'This is the first demo'
        },
        fields: {
            path: '/',
            date: 'July 31, 2020'
        }
    },
};

export const Default = (args) => <PostRow post={args} isArchive={args.isArchive} />;

export const Archived = (args) => <PostRow post={args} isArchive />;