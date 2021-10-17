import{ useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Buy groceries',
        day: 'Monday 2pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Follow up with recruiter',
        day: 'Monday 11am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Codewars practice',
        day: 'Monday 5pm',
        reminder: false,
    }
    ])

    // Delete task
    const deleteTask = (id) => {
      // console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id )) // setting the Task to the filtered task. for each task, if task.id doesn't equal to the (id)
      // so in other words, whenever delete is clicked, the State shows all id NOT clicked by the delete (to check)
    }

    return (
      <div className='container'>
        <Header />
        {tasks.length > 0 
        ? 
        <Tasks tasks={tasks} onDelete={deleteTask} /> 
        : 
        'No tasks remaining' }
      </div>
    )
}

export default App;
