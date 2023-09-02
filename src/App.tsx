import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Navbar, getExItems} from './components/Navbar';
import Main from './components/Main';

function App() {
  const [items, setItems] = useState(getExItems());
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  function onStateChange(items: any) {
    setItems(items);
  }

  // console.log(items.boardObjs.filter((b: any) => b.id === items.selected))
  return (
    <div className="bg-gray-300 box-border min-h-screen flex flex-col" >
      <Header title={
        items.boardObjs.filter((b: any) => b.id === items.selected)[0].boardName
      }/>
      <section className='flex flex-1'>
        <Navbar onStateChange={onStateChange}/>
        <Main />
      </section>

    </div>
  );
}

export {App};
