import classNames from 'classnames'
import React from 'react'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  /** If the button is available to click */
  disabled?: boolean
  /** size of the button */
  size?: ButtonSize
  /** Type of the button */
  btnType?: ButtonType
  children?: React.ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/** Customized Button */
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType ?? 'default'}`]: btnType,
    [`btn-${size ?? 'sm'}`]: size,
    disabled: btnType === 'link' && disabled
  })

  if (btnType === 'link') {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  btnType: 'default',
  size: 'sm',
  disabled: false
}

export default Button
