import React, { Fragment, useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext()

function App() {
  console.log('Render App');
  const [theme, setTheme]= useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
    <Fragment>Fragments are used to return multiple items
      <Counter initialCount={0}/>Counter
      <CounterHooks initialCount={0}/>Counter Hooks
    </Fragment>
    <button onClick={()=> setTheme(prevTheme =>{
      return prevTheme === 'red' ? 'blue': 'red';
    })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
