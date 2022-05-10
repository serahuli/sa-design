import { ReactNode } from 'react';
import { notification } from 'antd';

import IconSuccess from '../../../images/msg/success.svg';
import IconError from '../../../images/msg/error.svg';
import IconClose from '../../../images/delAdd/del.svg';
import React from 'react';

const notify = (
	type: 'success' | 'error' | 'warning',
	message: string,
	icon?: ReactNode,
) => {
	notification[type]({
		message,
		className: 'custom-notify',
		icon,
		closeIcon: <img src={IconClose} />,
	});
};

export const success = (message: string) => {
	const icon = <img src={IconSuccess} />;
	notify('success', message, icon);
};

export const error = (message: string) => {
	const icon = <img src={IconError} />;
	notify('error', message, icon);
};

export const warning = (message: string) => {
	notify('warning', message, <></>);
};