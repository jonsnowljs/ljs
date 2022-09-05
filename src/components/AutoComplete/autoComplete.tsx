import React, { useState } from 'react'
import { Input, InputProps } from '../Input/input'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[]
  onSelect?: (item: string) => void
  renderOption?: (item: string) => React.ReactElement
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, ...restProps } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<string[]>([])

  console.log(suggestions)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    console.log(value)
    setInputValue(value)
    if (value) {
      const result = fetchSuggestions(value)
      setSuggestions(result)
    } else {
      setSuggestions([])
    }
  }

  const generatateDropdopwn = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index}>
              {item}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className='viking-auto-complete'>
      <Input value={inputValue} onChange={handleChange} {...restProps} />
      {(suggestions.length > 0) && generatateDropdopwn()}
    </div>
  )
}
