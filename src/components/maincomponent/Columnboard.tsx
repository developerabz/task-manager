import myJson from '../../data.json'
import Task from './Task';

function Columnboard({name}: {name: string}) {
    // const data = JSON.parse()
    console.log(myJson);
    return (
        <div className="w-1/4 h-full text-center">
            <h1 className='left tracking-widest'>{name}</h1>
            <div className='flex flex-col h-full'>
            {myJson.boards[0].columns[0].tasks.map(t => {
                return <Task task={t} />
            })}

            </div>
        </div>
    );
}

export default Columnboard;