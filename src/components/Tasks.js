// temp data to use Tasks below to use State
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {


    return (
        <>
            {tasks.map((task) => ( // ? (task, index) and change key={index} for error, for unique "key" prop? (removed) removed, as not needed
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
