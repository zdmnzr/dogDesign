import React, { useContext } from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem:React.FC<MenuItemProps> = (props) => {
  const {index,disabled,className,style,children} = props;
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index===context.index
  })

  const handleClick=()=>{
    console.log(123)
    if(context.onSelected && !disabled && (typeof index === 'string')){
      context.onSelected(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName='MenuItem'
export default MenuItem
