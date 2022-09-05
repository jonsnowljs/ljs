/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { AutoComplete } from './autoComplete'

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

const handleFetch = (query: string) => {
  return lakers.filter(name => name.includes(query))
}

const meta: Meta = {
  title: 'UI/AutoComplete',
  component: AutoComplete
}

export default meta

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />

export const Default = () => (
  <AutoComplete fetchSuggestions={handleFetch} />
)
