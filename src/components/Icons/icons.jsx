import React from 'react';
import IconsSVG from '../../svg/symbol-defs.svg';

export const Icons = ({name, className, color, width, height }) => {

  return(
    <svg className={`${className}`} fill={color} stroke={color} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}