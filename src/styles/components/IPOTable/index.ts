import { Table } from "antd";
import styled from "styled-components";
import IconUp from '../../../images/components/table/up.svg';
import IconDown from '../../../images/components/table/down.svg';

export const IPOTable: typeof Table= styled(Table)`
.ant-table-thead {
		& .ant-table-cell {
			text-align: left;
			background: #fff;
			border-bottom: 2px solid rgba(223, 225, 230, 1);
			border-left: none;
			font-weight: 400;
			color: #0052cc;
			padding: 8px 16px;
		}

		> tr
			> th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
			position: absolute;
			right: 0;
			width: 0;
		}
	}
	.ant-table-column-sorter-inner {
		.ant-table-column-sorter-up,
		.ant-table-column-sorter-down {
			background-image: url(${IconUp});
			background-repeat: no-repeat;
			height: 15px;
			width: 15px;
			background-position: center center;
			display: none;
			> svg {
				display: none;
			}
			&.active {
				display: block;
			}
		}
		.ant-table-column-sorter-down {
			background-position: center 5px;
			background-image: url(${IconDown});
		}
	}
`