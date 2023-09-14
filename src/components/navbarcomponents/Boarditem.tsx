import { useState } from 'react';
import {ReactComponent as IconBoard} from '../../assets/icon-board.svg';

function Boarditem({boardName, color, onClick}: {boardName: String, color: String, onClick: any}) {
    const [clickColor, setColor] = useState(color);
    const divStyle = "flex items-center w-full pl-3 py-1 hover:bg-purple-900 hover:text-white rounded-r-2xl hover:animate-pulse " + color;
    return (
        <div className={divStyle} onClick={onClick}>
            <IconBoard />
            <p className='px-1'>{boardName}</p>
        </div>
    );
}

export default Boarditem;