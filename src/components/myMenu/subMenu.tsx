import React, { FunctionComponentElement, useContext, useState } from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'
import { MenuItemProps } from './menuItem';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon/icon'

library.add(fas)

interface SubMenuProps {
  index?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title: string;
}

const SubMenu:React.FC<SubMenuProps> = (props) => {
  const {className, style, children, title, index} = props;
  const context = useContext(MenuContext)
  const [ menuOpen, setOpen ] = useState(false)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const handleClick=(e:React.MouseEvent)=>{
    console.log('cccc')
    e.preventDefault();
    setOpen(prev=>!prev)
  }
  let timer:any;
  const handleMouse=(e:React.MouseEvent, toggle:boolean)=>{
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 200);
  }
  const clickEvents = context.mode==='vertical'?{
    onClick: handleClick
  }:{}
  const hoverEvents = context.mode==='vertical'?{}:{
    onMouseLeave: (e:React.MouseEvent)=>{handleMouse(e,false)},
    onMouseEnter: (e:React.MouseEvent)=>{handleMouse(e,true)},
  }
  // console.log(context.mode,hoverEvents,'hoverEvents')
  function renderChildren(){
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children,(child, i)=>{
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName==='MenuItem'){
        return React.cloneElement(childElement,{
          index:`${index}-${i}`
        })
      }else{
        console.error('Warning, SubMenu can only has child which in MenuItem type')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li style={style} className={classes} {...hoverEvents} >
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon='angle-down' className='arrow-icon'/>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName='SubMenu'
export default SubMenu
