import { FaTimes } from 'react-icons/fa' // for icons. install: npm i react-icons

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
        className={`task ${task.reminder ? 'reminder' : ''}`}  // for toggling style, green line to show/hide when double click
        onDoubleClick={() => onToggle(task.id)}
        >
            <h3>{task.text} <FaTimes style={{ color:'red', cursor: 'pointer' }} 
            onClick={() => onDelete(task.id)} // function for onClick because we want to pass in specific id
            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
