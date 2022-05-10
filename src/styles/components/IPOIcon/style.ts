import { IPOColors } from '../../common';
import styled from 'styled-components';

export const IpoIconWrap = styled.span<{ width: number; height: number }>`
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	display: inline-block;
	background: #fff;
	border-radius: 4px;
	text-align: center;
	line-height: ${({ height }) => `${height}px`};
	cursor: pointer;

	> img {
		width: ${({ width }) => `${width - 10}px`};
		height: ${({ height }) => `${height - 10}px`};
	}

	:hover {
		background: ${IPOColors.btn.btnDefaultHoverColor};
	}
`;
