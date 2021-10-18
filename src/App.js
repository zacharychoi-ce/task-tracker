import{ useState, useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
    // for toggling input boxes when clicking Add button
    const [showAddTask, setShowAddTask] = useState(false) // boolean, false by default
    const [tasks, setTasks] = useState([])
    

    useEffect(()=> {     // we can't use async function on line 14
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      
      getTasks()
    }, [])

    // Fetch Tasks (data)
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        // console.log(data)
        return data
      }

      // this is for only updating reminder toggle to server
      const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        // console.log(data)
        return data
      }

    // Add task
    const addTask = async (task) => {
      // // console.log(task)
      // const id = Math.floor(Math.random() * 10000) + 1
      // // console.log('new id: ', id)
      // const newTask = { id, ...task } // newTask will have object with the id from above, and the task passed in here (from input boxes)
      // setTasks([...tasks, newTask])

      // commented above for actual addTask to server.
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json() // await here cos its a promise! don't forget

      setTasks([...tasks, data])
    }

    // Delete task
    const deleteTask = async (id) => {
      // actual delete request to server. Made this function into async. Simple as this..
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })

      // console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id )) // setting the Task to the filtered task. for each task, if task.id doesn't equal to the (id)
      // so in other words, whenever delete is clicked, the State shows all id NOT clicked by the delete (to check)
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
      // getting the task
      const taskToToggle = await fetchTask(id)
      // then creating the new task
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method:'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })

      const data = await res.json()

      setTasks(tasks.map((task) => 
        task.id === id ?  {...task, reminder: data.reminder} : task
        ))  // (changed due to above server 'PUT'. before change, spread task, but change reminder to opposite of current task.reminder (false, true etc)
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
