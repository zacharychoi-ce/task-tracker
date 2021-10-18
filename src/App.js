import{ useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
    // for toggling input boxes when clicking Add button
    const [showAddTask, setShowAddTask] = useState(false) // boolean, false by default

    const [tasks, setTasks] = useState([])

    // Add task
    const addTask = (task) => {
      // console.log(task)
      const id = Math.floor(Math.random() * 10000) + 1
      console.log('new id: ', id)

      const newTask = { id, ...task } // newTask will have object with the id from above, and the task passed in here (from input boxes)
      setTasks([...tasks, newTask])
    }

    // Delete task
    const deleteTask = (id) => {
      // console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id )) // setting the Task to the filtered task. for each task, if task.id doesn't equal to the (id)
      // so in other words, whenever delete is clicked, the State shows all id NOT clicked by the delete (to check)
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ?  {...task, reminder: !task.reminder} : task))  // spread task, but change reminder to opposite of current task.reminder (false, true etc)
    }

    return (
      <div className='container'>
        <Header 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask} 
          />
          {showAddTask && <AddTask onAdd={addTask} />} {/* if showAddTask is true, then <AddTask ... */}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
            /> 
          ) : (
            'No tasks remaining' 
          )}
      </div>
    )
}

export default App;
