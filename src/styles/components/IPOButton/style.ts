import { Button } from 'antd';
import { ButtonType } from 'antd/lib/button';
import styled from 'styled-components';
import { IPOColors } from '../../common';

export type ICustomButtonProps = typeof Button;
type IButtonStatus = 'default' | 'hover';

// 获取背景色
const getBtncolor:(type: ButtonType, disabled: boolean | undefined, status: IButtonStatus) => string = (type, disabled, status) => {
	let color: string = IPOColors.ipoWhite;

	switch (type) {
		case 'primary':
			!disabled && (color = IPOColors.blue.primaryColor)
			disabled && (color = IPOColors.blue.PrimaryDisabledColor)
			status === 'hover' && (color = IPOColors.blue.primaryHoverColor)
			break;
		case 'default': 
		case undefined:
			color = IPOColors.btn.btnDefaultColor
			status === 'hover' && (color = IPOColors.btn.btnDefaultHoverColor)
			break;
		case 'ghost':
			color = IPOColors.btn.btnInferiorColor
			status === 'hover' && (color = IPOColors.btn.btnInferiorHoverColor)
			break;
		case 'dashed':
			color = IPOColors.btn.btnDangerColor
			break;
		case 'text':
			status === 'hover' && (color = IPOColors.btn.btnDefaultHoverColor)
			break;
	}
	return color
}

// 获取文字颜色
const getTextColor:(type: ButtonType, disabled: boolean | undefined, status: IButtonStatus) => string = (type, disabled, status) => {
	let color: string = IPOColors.ipoWhite;

	switch (type) {
		case 'default': 
		case undefined: 
		case 'ghost':
			disabled && (color = IPOColors.text.textNote)
			!disabled && (color = IPOColors.text.textImportant)
			break;
		case 'link':
			disabled && (color = IPOColors.text.textNote)
			!disabled && (color = IPOColors.blue.primaryColor)
			status === 'hover' && (color = IPOColors.blue.primaryHoverColor)
			break;
	}

	return color
}

// 获取文字颜色
const getBorder:(type: ButtonType) => string = (type) => {
	let border: string = 'none';

	switch (type) {
		case 'ghost':
			border = `1px solid ${ IPOColors.line.lineInferior }`;
			break;
	}

	return border
}

/**
 * 重要按钮, 蓝色底色： type： primary
 * 
 * 次要按钮, 白色底色： type： ghost
 * 
 * 常规按钮, 灰色底色： type： undefined | default, 可不传
 * 
 * 警告按钮, 红色： type： dashed
 * 
 * 链接按钮, 常用作取消： type： link
 * 
 * 图标按钮，常用作图标， type： text
 */
export const IPOButton:ICustomButtonProps = styled(Button)<{ type: ButtonType }>`
	border: ${({ type }) => getBorder(type)};
	border-radius: 4px;
	-webkit-tap-highlight-color: transparent;
	background: ${({ type }) => getBtncolor(type, false, 'default')};
	color: ${({ type }) => getTextColor(type, false, 'default')};

	&&[disabled] {
		background: ${({ type }) => getBtncolor(type, true, 'default')} !important;
		color: ${({ type }) => getTextColor(type, true, 'default')};
	}
	&&[class~='ant-btn-link'] {
		:hover span {
			text-decoration: underline;
		}
	}
	:hover,
	:focus {
		background: ${({ type }) => getBtncolor(type, false, 'hover')};
		color: ${({ type }) => getTextColor(type, false, 'hover')};
		border: ${({ type }) => getBorder(type)};
	}
`;
