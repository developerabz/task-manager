import { BsThreeDotsVertical } from 'react-icons/bs';
import {ReactComponent as LightKanban} from '../assets/logo-dark.svg';
import { useState } from 'react';
import Taskmodal from './maincomponent/Taskmodal';
function Header({title}: {title: String}) {
  const [modal, setModal] = useState("w-full h-full bg-blue-500 hidden");
  // const [columns, setColumns] = useState<String[]>(cols);
//   let columns = [...cols];

  // FORM BUILT WITH CURR NAME DESCRIPTION COLUMN SELECTED
  // const [currName, setCurrName] = useState("");
  function addNewCol() {
    setModal("inset-20 bg-white border z-10 fixed");
  }

  function addSuccess() {
//     // columns.push(currName);
//     // setColumns(columns);
//     // columns.push(currName);
//     columns = [...cols, currName.toLocaleUpperCase()]
//     onColChange(columns);
    setModal("hidden");
//     // console.log(columns)
  }

  // useEffect(() => {
  //   console.log(columns)
  // }, [columns])
  function updateName(event: any) {
    // setCurrName(event.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    e.target.reset();
  }

  function onAdd() {
    return addSuccess();
  }
  function onClose() {
    setModal("hidden");
  }

  const modalProps = {
    modal,
    handleSubmit,
    updateName,
    onClose,
    onAdd
  }
  return (
    <header className="flex justify-between p-4 items-center">
        <LightKanban />
        <h1 className="text-xl font-bold text-black-600 font-sans">
        {title}
        </h1>
        <div>
            <button
              className="bg-purple-800 text-white rounded-3xl p-2 hover:bg-purple-900 hover:animate-pulse"
              onClick={addNewCol}
            >+ Add New Task</button>
            <button><BsThreeDotsVertical/></button>
            <Taskmodal {...modalProps} />
        </div>
    </header>
  );
}

export default Header;