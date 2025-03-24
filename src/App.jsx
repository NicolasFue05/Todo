import './App.css'
import ReactIcon from './assets/react.svg'
import { Box, Button, Fab, Input, Tooltip } from '@mui/material'
import Add from '@mui/icons-material/Add'
import { useState, useEffect } from 'react'
import { AddBoxRounded } from '@mui/icons-material'
import { getTasks, saveTasks } from './store/localStorage'
import TasksList from './components/list'

function App() {
  const [showInput, setShowInput] = useState(false)
  const [task, setTask] = useState([])
  const [taskDescription, setTaskDescription] = useState('')

  useEffect(() => {
    setTask(getTasks())
  }, [])

  const handleShowInput = () => {
    setShowInput(true)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    const newTask = {
      id: crypto.randomUUID(),
      content: taskDescription,
      isFinished: false,
    }
    const updatedTasks = [...task, newTask]
    saveTasks(updatedTasks)
    setTask(updatedTasks)
    setShowInput(false)
    setTaskDescription('')
  }

  const handleInputChange = (e) => {
    setTaskDescription(e.target.value)
  }

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <header style={{ display: 'flex', gap: 20 }}>
        <h1 style={{ fontSize: 60 }}>TO-DO</h1>
        <img src={ReactIcon} alt="react_icon" width={90} />
      </header>
      <Tooltip onClick={handleShowInput} title="Add Task" arrow placement="top">
        <Fab>
          <Add />
        </Fab>
      </Tooltip>
      {showInput && (
        <form onSubmit={handleAddTask}>
          <Box sx={{ marginTop: 4, display: 'flex' }}>
            <Input
              onChange={handleInputChange}
              value={taskDescription}
              placeholder="Enter a task..."
              fullWidth
            />
            <Button type="submit">
              <AddBoxRounded />
            </Button>
          </Box>
        </form>
      )}
      <TasksList task={task} setTask={setTask} />
    </Box>
  )
}

export default App
