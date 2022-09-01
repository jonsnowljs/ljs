/* eslint-disable @typescript-eslint/no-base-to-string */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import React, { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** If the input is disabled */
  disabled?: boolean
  /** The size of the input */
  size?: InputSize
  /** Icon show in the right side of the input  */
  icon?: IconProp
  /** Prepend before the input */
  prepend?: string | ReactElement
  /** Append to the end of the input */
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Input component
 */
export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const cnames = classNames('viking-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend ?? append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input disabled={disabled} className="viking-input-inner" {...restProps} />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  )
}
