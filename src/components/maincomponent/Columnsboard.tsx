import Columnboard from "./Columnboard";
import Modal from "./Modal";

function Columnsboard({names, addNewCol}: {names: any, addNewCol: any}) {

    return (
        <div className="w-full flex">
            {names.map((n: any, key: any) => {
                return <Columnboard name={n} key={key} />
            })}
            <div className="bg-gray-400 w-1/4 text-size-3 flex justify-center items-center text-lg my-1 hover:animate-pulse" onClick={addNewCol}>
                <p>+ Add new column</p>
            </div>
        </div>
    );
}

export default Columnsboard;