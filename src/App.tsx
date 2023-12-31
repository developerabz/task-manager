import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Navbar, getExItems} from './components/Navbar';
import Main from './components/Main';
import {ReactComponent as LightKanban} from './assets/logo-dark.svg';
import {ReactComponent as DarkKanban} from './assets/logo-light.svg';
import {firebaseAuths, app} from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth";




function App() {
  const [items, setItems] = useState(getExItems());
  const [isDark, setDark] = useState(false);
  const [kanban, setKanban] = useState(<LightKanban />);
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
  }

  useEffect(() => {
    if (isDark) {
      setOnDark("box-border min-h-screen flex flex-col bg-black text-white");
      setKanban(<DarkKanban />);
    } else {
      setOnDark("box-border min-h-screen flex flex-col bg-white text-black");
      setKanban(<LightKanban />);
    }
  }, [isDark]);

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
      } kanban={kanban}/>
      <section className='flex flex-1'>
        <Navbar onStateChange={onStateChange} onDarkMode={onDarkMode}/>
        <Main onColChange={onColChange} cols={
          boards.boardArr.filter((b: any) => b.id === boards.selected)[0].cols
        } />
      </section>
      {/* <section className='border'>
        
      </section> */}

    </div>
  );
}

export {App};
