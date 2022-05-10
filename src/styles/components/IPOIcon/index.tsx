import React, { FC, useState } from 'react';
import { IpoIconWrap } from './style';

interface IIPOIconProps {
  width?: number;
  height?: number;
  src: string;
}

export const IPOIcon: FC<IIPOIconProps> = ({ src, width, height }) => {

  width = width ?? 24
  height = height ?? 24

  const [isError, setIsError] = useState<boolean>(true)

  return (
    <>
      { isError && <IpoIconWrap width={width} height={height} >
                     <img src={src} onError={() => setIsError(false)}/>
                   </IpoIconWrap>
     }
    </>
  );
};