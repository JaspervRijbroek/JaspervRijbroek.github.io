import React from 'react';
import SearchBar from "../bar";

export default {
    title: 'Components/Search',
    parameters: {
        docs: {
            description: {
                component: 'The searchbar component'
            }
        },
    },
    component: SearchBar,
    argTypes: {},
};

export const Default = () => <SearchBar />;