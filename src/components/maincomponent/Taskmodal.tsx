
function Taskmodal({modal, handleSubmit, updateName, onClose, onAdd}: {modal: any, handleSubmit: any, updateName: any, onClose: any, onAdd: any}) {
    return (
        <div className={modal}>
          <button onClick={onClose} className="w-full h-1/10 text-right p-1 px-2">X</button>
          <section className="w-full h-2/5 flex flex-col items-center justify-between">
            <h1>New Task</h1>
            <form onSubmit={handleSubmit} className="flex items flex-col">
              <div>
                <input type="text" className="bg-gray-200 p-2" onChange={updateName} placeholder="Name"/>
              </div>
              <div>
                {/* description */}
                <input type="text" className="bg-gray-200 p-2" onChange={updateName} placeholder="Description"/>
              </div>
              <div className="flex-1">
                {/* column option */}
                <select className="w-full bg-gray-200 p-2" name="columns" id="columnslist">
                    <option value="">Pick a column</option>
                    <option value="">col2</option>
                    <option value="">col3</option>
                </select>
                {/* <input type="radio" className="bg-gray-200 p-2" onChange={updateName} placeholder="Choose column"/> */}
              </div>
              <button className="bg-purple-800 text-white rounded-b-2xl p-2 hover:bg-purple-900" onClick={onAdd}>Add Task</button>
            </form>
          </section>
        </div>
    );
}

export default Taskmodal;