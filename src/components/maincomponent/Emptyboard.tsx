
function Emptyboard() {
    return (
      <div className="w-full min-h-full flex justify-center items-center flex-col">
        <p className="text-gray-700 py-4">This board is empty. Create a new column to get started</p>
        <button className="bg-purple-800 text-white rounded-3xl p-2 hover:bg-purple-900">+ Add New Column</button>
      </div>
    );
}

export default Emptyboard;