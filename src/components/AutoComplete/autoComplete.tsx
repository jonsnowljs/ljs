import React, { useState } from 'react'
import { Input, InputProps } from '../Input/input'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[]
  onSelect?: (item: string) => void
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, ...restProps } = props
  const [suggestions, setSuggestions] = useState<string[]>([])

  console.log(suggestions)

  const [inputValue, setInputValue] = useState(value)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const result = fetchSuggestions(value)
      setSuggestions(result)
    } else {
      setSuggestions([])
    }
  }
  return (
    <div className='viking-auto-complete'>
      <Input value={value} onChange={handleChange} {...restProps} />
    </div>
  )
}