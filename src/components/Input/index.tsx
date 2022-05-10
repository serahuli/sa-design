import React, { FC } from 'react';
import { Input, InputProps } from 'antd';

export const IPOInput:FC<InputProps> = (props) => (
  <Input { ...props }/>
);