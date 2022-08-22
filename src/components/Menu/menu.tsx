import classNames from 'classnames'
import React, { createContext, useState } from 'react'
import { MenuItemProps } from './menuItem'

type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  children?: React.ReactNode
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const classes = classNames('ljs-menu', className, {
    'menu-vertical': mode === 'vertical',
  })
  const handleClick = (index: number): void => {
    setCurrentActive(index)
    if (onSelect != null) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive != null ? currentActive : 0,
    onSelect: handleClick,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      console.log(child)
      const { name } = childElement.type
      console.log(name)
      if (name === 'MenuItem') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error('Warning: Menu has a child is not a menuitem')
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
