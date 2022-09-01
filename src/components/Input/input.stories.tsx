/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { Input } from './input'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
    />
  )
}

const meta: Meta = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    // size: { options: ['lg', 'sm'], control: { type: 'radio' } },
  },
}

export default meta

const Template: ComponentStory<typeof Input> = (args) => <Input style={{ width: '300px' }} {...args} />

export const Default = Template.bind({})
export const Disabled = Template.bind({})
export const Icon = Template.bind({})
export const Size = Template.bind({})
export const PrependInput = Template.bind({})
export const AppendInput = Template.bind({})

Default.args = {
  // children: <ControlledInput />,
  placeholder: 'Default Input',
}
Disabled.args = {
  disabled: true,
  placeholder: 'primary',
}
Icon.args = {
  placeholder: 'Danger',
  icon: solid('search'),
}
Size.args = {
  placeholder: 'Link',
  size: 'lg'
}
PrependInput.args = {
  defaultValue: 'prepend text',
  prepend: 'https://',
}
AppendInput.args = {
  defaultValue: 'append text',
  append: '.com',
}
