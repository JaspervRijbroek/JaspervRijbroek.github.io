import React from 'react';
import {Profile} from "../index";

export default {
    title: 'Components/Profile',
    component: Profile,
    argTypes: {
        isFooter: { control: 'boolean' },
    },
};

export const Default = (args) => <Profile {...args} />;

export const ProfileFooter = () => <Profile isFooter />