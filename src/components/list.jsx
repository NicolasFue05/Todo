import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { saveTasks } from '../store/localStorage'
import { Cancel, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import { useState } from 'react'

export default function TasksList({ task, setTask }) {
  const handleRemoveTask = (taskId) => {
    const updatedTasks = task.filter((t) => t.id !== taskId) // Filter the removed task
    saveTasks(updatedTasks)
    setTask(updatedTasks)
  }

  const [hoveredTaskId, setHoveredTaskId] = useState(null)

  const handleMouseEnter = (taskId) => {
    setHoveredTaskId(taskId)
  }

  const handleMouseLeave = () => {
    setHoveredTaskId(null)
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {task.length > 0 ? (
        task.map((t) => (
          <ListItem key={t.id}>
            <ListItemText primary={t.content} />
            <Button
              onClick={() => handleRemoveTask(t.id)}
              onMouseEnter={() => handleMouseEnter(t.id)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredTaskId === t.id ? (
                <CheckBox sx={{ color: '#00d8ff' }} />
              ) : (
                <CheckBoxOutlineBlank sx={{ color: 'gray' }} />
              )}
            </Button>
          </ListItem>
        ))
      ) : (
        <Box
          sx={{
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Cancel fontSize="large" />
          <Typography variant="h6" fontWeight="800">
            There are no pending tasks
          </Typography>
        </Box>
      )}
    </List>
  )
}
