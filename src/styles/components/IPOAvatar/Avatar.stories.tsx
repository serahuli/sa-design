import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { IPOAvatar } from '.';

export default {
  title: 'styles/IPOAvatar',
  component: IPOAvatar,
} as Meta;

const Template = (args) => <IPOAvatar {...args} />;

export const Avatar = Template.bind({});

Avatar.args = {
  info: {
    avatar: 'c382ded17d364589aab2b7025458d342',
    name1: '腾讯',
    name: 'buzhi ',
    id: '9999',
    mobile: '13777778888',
    baseUrl: 'https://project-api-dev.hylaa.net',
  }
};

export const AvatarError = Template.bind({});

AvatarError.args = {
  size: 100,
  shape: 'circle',
  info: {
    avatar: 'x',
    name1: '腾讯',
    name: 'buzhi ',
    id: '9999',
    mobile: '13777778888',
    baseUrl: 'https://project-api-dev.hylaa.net',
  }
};

export const AvatarName = Template.bind({});

AvatarName.args = {
  size: 30,
  shape: 'circle',
  info: {
    name1: '腾讯',
    name: 'buzhi ',
    id: '9999',
    mobile: '13777778888',
  }
};