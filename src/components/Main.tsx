import { useState } from "react";
import Emptyboard from "./maincomponent/Emptyboard";

// board get cols
function Main() {
  let col = 0;
  const [modal, setModal] = useState("w-full h-full bg-blue-500 hidden");
  const columns:any = [];
  const [currName, setCurrName] = useState("");
  function addNewCol() {
    setModal("inset-10 bg-white border z-1 fixed");
  }

  function addSuccess() {
    columns.push(currName);
    setModal("hidden");
    console.log(columns)
  }

  function updateName(event: any) {
    setCurrName(event.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    e.target.reset();
  }


  return (
    <main className="w-full min-h-full">
        {col === 0 ? <Emptyboard addNewCol={addNewCol}/> : <p>something went wrong</p>}
        <div className={modal}>
          <button onClick={() => setModal("hidden")} className="w-full h-1/10 text-right p-1 px-2">X</button>
          <section className="w-full h-2/5 flex flex-col items-center justify-between">
            <h1>New Task Column</h1>
            <form onSubmit={handleSubmit} className="flex items-center">
              <div>
                <input type="text" className="bg-gray-200 p-2" onChange={updateName} placeholder="Column Name"/>
              </div>
              <button className="bg-purple-800 text-white rounded-r-2xl p-2 hover:bg-purple-900" onClick={() => addSuccess()}>Add Column</button>
            </form>
          </section>
        </div>
    </main>
  );

}

export default Main;