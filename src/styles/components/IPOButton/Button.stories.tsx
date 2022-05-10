import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IPOButton, ICustomButtonProps } from './style';

export default {
  title: 'styles/IPOButton',
  component: IPOButton,
} as Meta;

const Template:Story<ICustomButtonProps> = (args: ICustomButtonProps) => <IPOButton {...args}>测试</IPOButton>;

export const Button = Template.bind({});

Button.args = {
  type: 'primary',
  block: true,
  danger: true,
  disabled: true,
  onclick: () => console.log('测试')
};
