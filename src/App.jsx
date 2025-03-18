import { Box } from '@mui/material'
import './App.css'
import ReactIcon from './assets/react.svg'
import AddTaskButton from './components/actionButton'

function App() {
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Box component="section" sx={boxStyles}>
      <header>
        <h1>TO-DO</h1>
        <img src={ReactIcon} alt="react_icon" width={50} />
      </header>
      <AddTaskButton />
    </Box>
  )
}

export default App
