import styled from 'styled-components';

export const IPOLoadingWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 99999;
`;

export const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 90px;
	height: 90px;
	padding: 25px 15px 5px;
	transform: translateX(-50%) translateY(-50%);
	border-radius: 10px;
	background: rgba(0, 0, 0, 0.15);
`;
