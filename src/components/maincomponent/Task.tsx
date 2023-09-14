function Task({task}: {task: any}) {
    return (
        <div className="text-left m-1 p-1 rounded drop-shadow-lg">
            <p className="font-medium">
                {task.title}
            </p>
            <p>
                {task.description}
            </p>
        </div>
    );
}

export default Task;