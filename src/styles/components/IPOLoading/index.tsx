import { Spin } from 'antd';
import React from 'react';

import { IPOLoadingWrap, Loading } from './style';

export const IPOLoading = () => {
	return (
		<IPOLoadingWrap>
			<Loading>
				<Spin tip="Loading..." />
			</Loading>
		</IPOLoadingWrap>
	);
};
