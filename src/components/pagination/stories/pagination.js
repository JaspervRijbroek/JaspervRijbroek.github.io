import React from 'react';
import Pagination from "../index";

export default {
    title: 'Components/Pagination',
    component: Pagination,
    argTypes: {
        pages: {control: 'number'},
        page: {control: 'number'}
    },
};

export const Default = (args) => <Pagination {...args} />;