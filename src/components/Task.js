import { FaTimes } from 'react-icons/fa' // for icons. install: npm i react-icons

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{ color:'red', cursor: 'pointer' }} 
            onClick={() => onDelete(task.id)} // function for onClick because we want to pass in specific id
            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
