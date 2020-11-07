import React from 'react';
import TopicList from "../list";

export default {
    title: 'Components/Topic list',
    parameters: {
        docs: {
            description: {
                component: 'The searchbar component'
            }
        },
    },
    component: TopicList,
    args: {
        topics: [{
            title: 'foo'
        }, {
            title: 'bar'
        }, {
            title: 'baz'
        }]
    },
};

export const Default = ({topics}) => <TopicList topics={topics} />;