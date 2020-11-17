import React from 'react';
import Switcher from "../index";

export default {
    title: 'Components/Switcher',
    parameters: {
        docs: {
            description: {
                component: 'The searchbar component'
            }
        },
    },
    component: Switcher,
    argTypes: {},
};

export const Default = () => <Switcher />;