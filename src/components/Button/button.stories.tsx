/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './button'

const styles: React.CSSProperties = {
  textAlign: 'center',
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}F</div>

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  size: 'lg',
  btnType: 'primary',
  children: 'test',
}
