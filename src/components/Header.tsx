import { BsThreeDotsVertical } from 'react-icons/bs';
import {ReactComponent as LightKanban} from '../assets/logo-dark.svg';
function Header({title}: {title: String}) {
  return (
    <header className="bg-white flex justify-between p-4 items-center">
        <LightKanban />
        <h1 className="text-xl font-bold text-black-600 font-sans">
        {title}
        </h1>
        <div>
            <button className="bg-purple-800 text-white rounded-3xl p-2 hover:bg-purple-900">+ Add New Task</button>
            <button><BsThreeDotsVertical /></button>
        </div>
    </header>
  );
}

export default Header;