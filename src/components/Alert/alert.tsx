import classNames from 'classnames'
import React from 'react'

export enum AlertSize {
  Large = 'lg',
  Small = 'sm',
}

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
}

interface BaseAlertProps {
  className?: string
  title?: string
  description?: string
  type?: AlertType
  closable?: boolean
  children?: React.ReactNode
  onClose?: () => void
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    className,
    title,
    closable,
    description,
    onClose,
    type,
    children,
    ...restProps
  } = props

  const classes = classNames('alert', className, {
    [`alert-${type ?? 'default'}`]: type
  })

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  )
}

Alert.defaultProps = {
  type: AlertType.Default,
  closable: false
}

export default Alert
