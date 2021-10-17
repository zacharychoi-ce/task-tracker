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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
