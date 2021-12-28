import { useState } from 'react'
import AddTask from './components/AddTask'

export default function TaskListApp() {

const [task, setTask] = useState(['Preparar Clases', 'Aprender React'])

const removeTask = ( ) => {

  const taskbutton = document.querySelectorAll('.taskButton')

  console.log(taskbutton.value)
}

  return (
    <div>
    
    <h1>Lista de tareas</h1>

    <AddTask setTask={ setTask }/>

      <ol>
        {
          task.map( taskies => {
            return <li key={ taskies } > { taskies } <span className='taskbutton' onClick={ removeTask }>X</span> </li>
          } )
        }
      </ol>
    </div>
  )
}
