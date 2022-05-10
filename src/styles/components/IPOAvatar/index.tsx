import React, { CSSProperties, useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { _getRandomAvatarColor, getAvatarName } from '../../../utils/_getAvatar';
import { getFileUrl } from '../../../utils/files';
import { IpoAvatarWrap } from './style';

export interface IPAvatarProps {
	size?: number;
	shape?: 'square' | 'circle';
	info: { 
		avatar?: null | string; 
		name1?: string; 
		id: string; 
		name2?: string; 
		mobile?: string; 
		baseUrl?: string; 
	};
}

type IShowType = {
	src?: string;
	style?: CSSProperties;
};

export const IPOAvatar = ({
	info: { avatar, name1, name2, id, mobile, baseUrl },
	size = 20,
	shape = 'circle',
}: IPAvatarProps) => {

	const [ showType, setShowType ] = useState<IShowType>({})
	const [ avatarError, setAvatarError ] = useState<boolean>(false)

	useEffect(() => {
		if (!avatar) {
			setShowType({
				style: {
					backgroundColor: _getRandomAvatarColor(id),
					color: '#fff',
				}
			})
		} else {
			showType.src = getFileUrl(baseUrl ?? '', avatar);
			setShowType({
				src: getFileUrl(baseUrl ?? '', avatar)
			})
		}
	}, [])
	
	const handleError:() => boolean = () => {
		setShowType({
			style: {
				backgroundColor: _getRandomAvatarColor(id),
				color: '#fff',
			}
		})
		setAvatarError(true)
		return false
	}
	
	return (
		<IpoAvatarWrap fontSize={size}>
			<Avatar {...showType} shape={shape} size={size} onError={ () => handleError() }>
				{ (!avatar || avatarError) && <span>{getAvatarName({ name1: name1 ?? '', name2: name2 ?? '', mobile: mobile ?? '1' })}</span> }
			</Avatar>
		</IpoAvatarWrap>
		
	);
};
