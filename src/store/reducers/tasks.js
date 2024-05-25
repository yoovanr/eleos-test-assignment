import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],

  selectedTask: null,

  isModalCreateVisible: false,
  isModalUpdateVisible: false,
  isModalDeleteVisible: false,
}

export const tasksSlice = createSlice({
  name: 'tasks',

  initialState,

  reducers: {
    createTask: (state, action) => {
      action.payload.id = Date.now()
    
      state.tasks = [...state.tasks, action.payload]
    },
  
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id)

      if (index !== -1) {
        state.tasks[index] = { ...action.payload }
      }
    },
  
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    },
  
    selectTask: (state, action) => {
      state.selectedTask = action.payload
    },

    showModalCreate: (state) => {
      state.isModalCreateVisible = true
    },

    hideModalCreate: (state) => {
      state.isModalCreateVisible = false
    },

    showModalUpdate: (state) => {
      state.isModalUpdateVisible = true
    },

    hideModalUpdate: (state) => {
      state.isModalUpdateVisible = false
    },

    showModalDelete: (state) => {
      state.isModalDeleteVisible = true
    },

    hideModalDelete: (state) => {
      state.isModalDeleteVisible = false
    },
  },
})

export const {
  createTask,
  updateTask,
  deleteTask,

  selectTask,

  showModalCreate,
  hideModalCreate,

  showModalUpdate,
  hideModalUpdate,

  showModalDelete,
  hideModalDelete,
} = tasksSlice.actions

export default tasksSlice.reducer