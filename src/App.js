import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  console.log('Render App');
  return (
    <Fragment>Fragments are used to return multiple items
      <Counter initialCount={0}/>Counter
      <CounterHooks initialCount={0}/>Counter Hooks
    </Fragment>
  )
}

export default App;
