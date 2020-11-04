import React from 'react';
import Navigation from "../index";

export default {
    title: 'Components/Header',
    component: Navigation,
    argTypes: {
        isHome: { control: 'boolean' },
    },
};

export const Default = (args) => <Navigation {...args} />;

export const HomeHeader = () => <Navigation isHome />