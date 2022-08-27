/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'

import { ComponentMeta, ComponentStory, Meta } from '@storybook/react'

import Button from './button'

const meta: Meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: { ac}
}

export default meta

export const Default = () => <Button btnType='default'>Click</Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  size: 'lg',
  btnType: 'primary',
  children: 'test',
  color: 'red',
}
