import React from 'react';

import { IPOInput } from './index.tsx';

export default {
  title: 'Example/Input',
  component: IPOInput
};

const Template = (args) => <IPOInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: '你您'
};

export const Large = Template.bind({});
Large.args = {
  value: '你您'
};

export const Small = Template.bind({});
Small.args = {
  value: '你您'
};
