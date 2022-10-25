import React,{createContext, useState} from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type menuMode = 'vertical' | 'horizontal';
type selectedCallback = (selectedIndex: string) => void;

interface MenuProps {
  className?: string;
  mode?: menuMode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelected?: selectedCallback;
  defaultIndex?: string;
  defaultOpenSubMenus?: string[];
}

export interface contextProps{
  onSelected?: selectedCallback;
  index?: string;
  mode?: menuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<contextProps>({}) 

const Menu:React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, onSelected, defaultIndex, defaultOpenSubMenus} = props;
  const [currentActive,setActive] = useState(defaultIndex);
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index:string)=>{
    setActive(index);
    if(onSelected){
      onSelected(index);
    }
  }
  const passedContext = {
    index:currentActive,
    onSelected: handleClick,
    mode:mode
  }
  const renderChildren=()=>{
    return React.Children.map(children,(child,index)=>{
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName==='MenuItem' || childElement.type.displayName==='SubMenu'){
 
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      }else{
        console.error('Warning: Menu can only has child which is MenuItem type!')
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}
export default Menu
