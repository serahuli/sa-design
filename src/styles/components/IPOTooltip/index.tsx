import { CSSProperties } from 'react';
import { Tooltip } from 'antd';
import React from 'react';

interface ITooltip {
	text: string;
	isHidden?: boolean;
	maxShowNum?: number;
	className?: string | undefined;
	style?: CSSProperties | undefined;
}

export function IPOTooltip({ text, maxShowNum, style, isHidden }: ITooltip) {
	maxShowNum = maxShowNum ? maxShowNum : 12;
	isHidden = isHidden ?? true;
	return (
		<Tooltip title={text} placement="top">
			<span style={style}>
				{isHidden ? (text?.length > maxShowNum ? `${text.substr(0, maxShowNum)}...` : text) : text}
			</span>
		</Tooltip>
	);
}
