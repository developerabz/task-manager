import { useEffect, useState } from "react";
import Emptyboard from "./maincomponent/Emptyboard";
import Columnsboard from "./maincomponent/Columnsboard";
import Modal from "./maincomponent/Modal";

// board get cols
function Main({onColChange, cols}: {onColChange: any, cols: String[]}) {
  const [modal, setModal] = useState("w-full h-full bg-blue-500 hidden");
  // const [columns, setColumns] = useState<String[]>(cols);
  let columns = [...cols];
  const [currName, setCurrName] = useState("");
  function addNewCol() {
    setModal("inset-10 bg-white border z-1 fixed");
  }

  function addSuccess() {
    // columns.push(currName);
    // setColumns(columns);
    // columns.push(currName);
    columns = [...cols, currName.toLocaleUpperCase()]
    onColChange(columns);
    setModal("hidden");
    // console.log(columns)
  }

  // useEffect(() => {
  //   console.log(columns)
  // }, [columns])
  function updateName(event: any) {
    setCurrName(event.target.value);
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
    <main className="w-full min-h-full flex">
        {columns.length === 0 ? <Emptyboard addNewCol={addNewCol}/> : <Columnsboard names={columns} addNewCol={addNewCol}/>}
        <Modal {...modalProps} />
    </main>
  );

}

export default Main;