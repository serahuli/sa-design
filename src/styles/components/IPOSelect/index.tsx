import React, { FC, useState } from 'react';
import { Divider, SelectProps } from 'antd';
import { SelectValue } from 'antd/lib/select';

import { CustomSelect } from './style';
import { CustomInputSearch } from '../IPOInput/style';

type ISelectProps = SelectProps<SelectValue> & {
	showSearch?: boolean;
	children?: JSX.Element[];
};

export const IPOSelect: FC<ISelectProps> = ({ showSearch, children, ...selectProps }) => {
	showSearch = showSearch ?? false;
	const [searchVal, setSearchVal] = useState<string>('');
	return (
		<CustomSelect
			searchValue={searchVal}
			showSearch={showSearch}
			style={{ width: '100%' }}
			onDropdownVisibleChange={open => !open && setSearchVal('')} //关闭的时候，搜索有值会导致无法正常展开
			optionFilterProp="label"
			dropdownRender={dom => (
				<div>
					{showSearch && (
						<>
							<CustomInputSearch
								value={searchVal}
								onChange={e => setSearchVal(e.target.value)}
								style={{ width: '97%', marginLeft: '1.5%' }}
							/>
							<Divider style={{ margin: '6px 0' }} />
						</>
					)}
					{dom}
				</div>
			)}
			{...selectProps}>
			{children}
		</CustomSelect>
	);
};
