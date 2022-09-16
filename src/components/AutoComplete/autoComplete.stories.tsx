/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { AutoComplete, DataSourceType } from './autoComplete'

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

const handleFetch = (query: string) => {
  return lakers.filter(name => name.includes(query)).map(name => ({ value: name }))
}
const renderOption = (item: DataSourceType) => {
  return (
      <h2>Name: {item}</h2>
  )
}

const meta: Meta = {
  title: 'UI/AutoComplete',
  component: AutoComplete,
  argTypes: { onclick: { action: 'clicked' } },
}

export default meta

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />

export const Default = () => (
  <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption} />
)
