import classNames from 'classnames'
import React, { useContext } from 'react'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, disabled, index, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })
  const handleClick = (): void => {
    if (context.onSelect != null && !(disabled ?? false) && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} key={index} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem
