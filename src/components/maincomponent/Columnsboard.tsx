import Columnboard from "./Columnboard";

function Columnsboard({names}: {names: any}) {

    let totalColumns: any;
    for (const name of names) {
        if (names.length === 1) {
            totalColumns = <Columnboard name={name} />
        } else {
            totalColumns += <Columnboard name={name} />
        }
    }
    // console.log(totalColumns);
    return (
        <div className="w-full flex">
            {totalColumns}
            <div className="bg-gray-400 w-1/4 text-size-3 flex justify-center items-center text-lg my-1">
                <p>+ Add new column</p>
            </div>
        </div>
    );
}

export default Columnsboard;