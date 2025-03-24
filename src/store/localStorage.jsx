// Guardar todas las tareas (no solo una tarea nueva)
export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Obtener todas las tareas
export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || []
}
