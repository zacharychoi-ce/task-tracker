// temp data to use Tasks below to use State
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {


    return (
        <>
            {tasks.map((task, index) => ( // index and change key={index} for error, for unique "key" prop?
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
