import { IPOColors } from '../../common';
import { Modal } from 'antd';
import styled from 'styled-components';
import { flex } from '../../mixins';

export const IPOModal: any = styled(Modal)<{ isShowPadding: boolean }>`
	width: 60vw;
	.ant-modal-body {
		padding: ${({ isShowPadding }) => (isShowPadding ? '20px' : '0')};
		min-height: 200px;
		max-height: 80vh;
		overflow-y: auto;
	}
	.ant-modal-footer {
		height: 55px;
		line-height: 55px;
		border-top: 1px solid rgba(242, 243, 245, 1);
		box-sizing: border-box;
		text-align: center;
		${flex('row', 'flex-end')}

		> .ant-btn {
			font-size: 14px;
			padding: 2px 16px;
			height: auto;
			:first-child {
				color: ${IPOColors.blue.primaryColor};
				border: none;

				:hover {
					color: ${IPOColors.blue.primaryHoverColor};
				}
			}

			:last-child {
				background: ${IPOColors.blue.primaryColor};

				:hover {
					background: ${IPOColors.blue.primaryHoverColor};
				}
			}
		}
	}
`;
