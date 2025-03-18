import { Fab, Tooltip } from '@mui/material'
import Add from '@mui/icons-material/Add'
export default function AddTaskButton() {
  const tooltipStyles = {
    marginTop: 5,
  }
  return (
    <Tooltip title="Add Task" arrow placement="top" sx={tooltipStyles}>
      <Fab>
        <Add />
      </Fab>
    </Tooltip>
  )
}
