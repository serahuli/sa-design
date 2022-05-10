import { css } from 'styled-components';

// flex
export function flex(direction?: string, justifyContent?: string, alignItem?: string) {
	direction = direction ?? 'row';
	justifyContent = justifyContent ?? 'space-between';
	alignItem = alignItem ?? 'center';
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justifyContent};
		align-items: ${alignItem};
	`;
}

// 省略
export const ellipsis = (line: number = 1) => {
	return css`
		overflow: hidden;
		text-overflow: ellipsis;
		${line > 1
			? css`
					display: -webkit-box;
					-webkit-line-clamp: ${line};
					line-clamp: ${line};
					-webkit-box-orient: vertical;
					word-break: break-all;
			  `
			: 'white-space: nowrap'}
	`;
};

// 背景
export const backgroundImage = (
	url: string | { url: string; hoverUrl: string },
	backgroundSize?: string | number,
) => {
	if (typeof url === 'string') {
		return css`
			display: inline-block;
			background-size: ${backgroundSize ?? 'contain'};
			background-image: url(${url});
			background-repeat: no-repeat;
		`;
	}

	return css`
		display: inline-block;
		background-size: ${backgroundSize ?? 'contain'};
		background-image: url(${url.url});
		background-repeat: no-repeat;

		:hover {
			background-image: url(${url.hoverUrl});
		}
	`;
};
