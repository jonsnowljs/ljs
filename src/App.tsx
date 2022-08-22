import React from 'react'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index)
          }}
        >
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item2</MenuItem>
          <MenuItem>Item3</MenuItem>
        </Menu>
        <Menu defaultIndex={1} mode="vertical">
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item2</MenuItem>
          <MenuItem>Item3</MenuItem>
        </Menu>
        <Button className="customer" btnType={'primary'} size={'lg'} autoFocus>
          Hello
        </Button>
        <Button disabled>Hello</Button>
        <Button
          btnType={'link'}
          size={'sm'}
          href="https://www.google.com"
          onClick={(e) => {
            e.preventDefault()
            alert('Hello')
          }}
        >
          Google
        </Button>
        <Button
          btnType={'link'}
          size={'sm'}
          href="https://www.google.com"
          disabled={true}
        >
          Google
        </Button>
        <Button size={'lg'} btnType={'danger'}>
          Google
        </Button>
        <h1>hello world</h1>
        <h2>hello world</h2>
        <h3>hello world</h3>
        <h4>hello world</h4>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
