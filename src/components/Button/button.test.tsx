import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { ButtonProps, Button } from './button'

const defaultProps = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Hello</Button>)
    const element = wrapper.getByText('Hello') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Hello</Button>)
    const element = wrapper.getByText('Hello') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType="link" href="http://dummyurl">
        Link
      </Button>
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Hello</Button>)
    const element = wrapper.getByText('Hello') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
