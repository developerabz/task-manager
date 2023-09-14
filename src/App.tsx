import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Navbar, getExItems} from './components/Navbar';
import Main from './components/Main';

function App() {
  const [items, setItems] = useState(getExItems());
  const [isDark, setDark] = useState(false);
  const [ondark, setOnDark] = useState("bg-gray-300 box-border min-h-screen flex flex-col bg-white text-black");
  const [boards, setBoards] = useState({
    boardArr: [
      {
        cols: [],
        id: 0
      },
      {
        cols: [],
        id: 1
      },
      {
        cols: [],
        id: 2
      }
    ],
    selected: 0
  });

  function onStateChange(items: any) {
    setItems(items);

    setBoards(prev => {
      return {selected: items.selected, boardArr: [...prev.boardArr]};
    });
    // console.log(boards);

  }

  function onDarkMode() {
    setDark(prevDark => !prevDark);
    isDark ? setOnDark("box-border min-h-screen flex flex-col bg-black text-white") :
    setOnDark("box-border min-h-screen flex flex-col bg-white text-black")
  }

  function onColChange(columns: any) {
    const boardObj = boards;
    const boardArray = [...boards.boardArr];
    boardArray.filter(b => b.id === boardObj.selected)[0].cols = columns;

    setBoards(prev => {
      return {
        boardArr: [
          ...boardArray
        ],
        selected: prev.selected
      }
    });
    // console.log(boards);
  }
  // console.log(boards.boardArr.filter((b: any) => b.id === boards.selected)[0].cols)
  // console.log(items.boardObjs.filter((b: any) => b.id === items.selected))
  return (
    <div className={ondark}>
      <Header title={
        items.boardObjs.filter((b: any) => b.id === items.selected)[0].boardName
      }/>
      <section className='flex flex-1'>
        <Navbar onStateChange={onStateChange} onDarkMode={onDarkMode}/>
        <Main onColChange={onColChange} cols={
          boards.boardArr.filter((b: any) => b.id === boards.selected)[0].cols
        } />
      </section>

    </div>
  );
}

export {App};
