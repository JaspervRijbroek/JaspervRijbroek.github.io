import React from 'react';
import BlogTemplate from "../post";

export default {
    title: 'Templates/Blogpage',
    component: BlogTemplate,
    args: {
        data: {
            markdownRemark: {
                frontmatter: {
                    title: 'Hello World',
                    topics: ['foo', 'bar', 'baz']
                },
                fields: {
                    date: 'July 31, 2020'
                },
                html: '<p>This is my first blog page, welcome!</p>'
            },
            allMarkdownRemark: {
                nodes: [{
                    frontmatter: {
                        title: 'Test 1',
                        description: 'Foo Bar!'
                    },
                    fields: {
                        path: '/',
                        date: 'July 31, 2020',
                    }
                }]
            }
        }
    }
};

export const Default = (args) => <BlogTemplate {...args} />;