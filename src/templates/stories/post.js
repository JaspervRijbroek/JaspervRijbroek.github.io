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
                        html: '<h2>This is the first blog post of this demo</h2>' +
                            '<p>So for a couple of weeks, I have my second automation running, this time it is the light in the cellar. It is a simple automation, but it really shows you how relaxed life can be.</p>' +
                            '<p>Even my wife accepted it in an instance really thinking it was an improvement (yeey :D). For me this was also a test of the IKEA tradfri lightbulbs, and they passed the test completely, they really make the zigbee network way stronger, so other items can also communicate faster with the server.</p>'
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