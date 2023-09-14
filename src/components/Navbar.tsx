

import { useEffect, useState } from 'react';
import Boarditem from './navbarcomponents/Boarditem';
let exItems: any = {
    boardObjs: [
        {id: 0, boardName: "Platform Launch"},
        {id: 1, boardName: "Marketing Plan"},
        {id: 2, boardName: "Roadmap"}
    ],
    selected: 0
};

function getExItems() {
    return exItems;
}


function Navbar({onStateChange, onDarkMode}: {onStateChange:any, onDarkMode: any}) {
    const [items, setItems] = useState({
        boardObjs: [
            {id: 0, boardName: "Platform Launch"},
            {id: 1, boardName: "Marketing Plan"},
            {id: 2, boardName: "Roadmap"}
        ],
        selected: 0
    });
  let count = 3;

  const setSelected = (id: number) => {
      setItems({selected: id, boardObjs: items.boardObjs});
  }

  useEffect(() => {
    onStateChange(items);
  }, [items]);

  return (
    <aside className='min-h-full w-1/5 flex flex-col items-start py-3 pr-3'>
        <p className='text-xs text-gray-700 pl-3'>ALL BOARDS {count}</p>
        {/* <Boarditem boardName="Platform Launch" color={color} onClick={() => {setColor("bg-purple-800")}} />
        <Boarditem boardName="Marketing Plan" color={color} onClick={() => {setColor("bg-white-800")}}/>
        <Boarditem boardName="Roadmap" color={color} onClick={() => {setColor("bg-red-800")}}/> */}
        {items.boardObjs.map((b, key) => {
            return <Boarditem boardName={b.boardName} color={items.selected === b.id ? "bg-purple-800 text-white" : ""} onClick={()=>setSelected(b.id)} key={key} />;
        })}
        <div className='flex flex-1 w-full self-center justify-center'><div className='rounded bg-black w-1/4 self-end content-center' onClick={() => onDarkMode()}>Light</div></div>
    </aside>
  );
}

export {Navbar, getExItems };