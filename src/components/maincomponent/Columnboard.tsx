import myJson from '../../data.json'
import Task from './Task';

function Columnboard({name}: {name: string}) {

    return (
        <div className="w-1/4 text-center">
            <h1 className='left tracking-widest'>{name}</h1>
            <div className='flex flex-col'>
                {myJson.boards[0].columns[0].tasks.map((t, key) => {
                    return <Task task={t} key={key} />
                })}
            </div>
        </div>
    );
}

export default Columnboard;