/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'

import { ComponentMeta, ComponentStory, Meta } from '@storybook/react'
import { Button } from './button'

const meta: Meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    // size: { options: ['lg', 'sm'], control: { type: 'radio' } },
  },
}

export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
export const Primary = Template.bind({})
export const Danger = Template.bind({})
export const Link = Template.bind({})

Primary.args = {
  size: 'lg',
  btnType: 'primary',
  children: 'primary',
}
Default.args = {
  size: 'lg',
  btnType: 'default',
  children: 'Default',
}
Danger.args = {
  size: 'lg',
  btnType: 'danger',
  children: 'Danger',
}
Link.args = {
  size: 'sm',
  btnType: 'default',
  children: 'Link',
}
