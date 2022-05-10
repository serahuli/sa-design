import { IPOStyleMixins } from '../../index';
import { Select } from 'antd';
import styled from 'styled-components';

export const CustomSelect: typeof Select = styled(Select)`
	.ant-select-selection-search-input {
		display: none !important;
	}
	&.ant-select:not(.ant-select-customize-input) .ant-select-selector {
		background-color: #f9fafb;
		border: 1px solid #dfe1e6;
		&:hover {
			background-color: #ebecf0;
			border: 1px solid #dfe1e6;
		}
	}
	.ant-select-clear {
		background: #ebecf0;
	}
	&.ant-select-focused .ant-select-selector {
		box-shadow: none !important;
	}
	&.ant-select-open .ant-select-selector {
		border-color: #2684ff !important;
		background-color: #ffffff !important;
		box-shadow: none !important;
	}

	&.ant-select-item {
		width: 100%;
		${IPOStyleMixins.flex('row', 'space-between', 'center')}
	}

	.ant-select-dropdow {
		background-color: #f00;
	}
`;
