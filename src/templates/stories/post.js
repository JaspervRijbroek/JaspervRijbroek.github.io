import React from 'react';
import BlogTemplate from "../post";

export default {
    title: 'Templates/Blogpage',
    component: BlogTemplate,
    args: {
        data: {
            contentfulPost: {
                topics: [{
                    title: 'foo'
                }, {
                    title: 'bar'
                }, {
                    title: 'baz'
                }],
                title: 'Hello World',
                body: {
                    childMarkdownRemark: {
                        html: '<h2>This is the first blog post of this demo</h2><p>This is my first blog page, welcome!</p>'
                    }
                },
                createdOn: 'July 31, 2020',
                fields: {
                    date: 'July 31, 2020'
                }
            },
            allMarkdownRemark: {
                nodes: [{
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
        }
    }
};

export const Default = (args) => <BlogTemplate {...args} />;