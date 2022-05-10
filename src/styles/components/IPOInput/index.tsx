import { CustomInputWithClear } from './style';
import { Input, InputProps } from 'antd';
import React, { FC } from 'react';

export type IPOInputClearProps = typeof Input | InputProps

export const IPOInput: FC<IPOInputClearProps> = (props) => {
	return <CustomInputWithClear allowClear {...props} />;
};
