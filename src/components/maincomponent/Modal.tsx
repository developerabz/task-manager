
function Modal({modal, handleSubmit, updateName, onClose, onAdd}: {modal: any, handleSubmit: any, updateName: any, onClose: any, onAdd: any}) {
    return (
        <div className={modal}>
          <button onClick={onClose} className="w-full h-1/10 text-right p-1 px-2">X</button>
          <section className="w-full h-2/5 flex flex-col items-center justify-between">
            <h1>New Task Column</h1>
            <form onSubmit={handleSubmit} className="flex items-center">
              <div>
                <input type="text" className="bg-gray-200 p-2" onChange={updateName} placeholder="Column Name"/>
              </div>
              <button className="bg-purple-800 text-white rounded-r-2xl p-2 hover:bg-purple-900 hover:animate-pulse" onClick={onAdd}>Add Column</button>
            </form>
          </section>
        </div>
    );
}

export default Modal;