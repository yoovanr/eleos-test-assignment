import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import tasksReducer from './reducers/tasks'

import { dummyjsonAPI } from './services/users'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    
    [dummyjsonAPI.reducerPath]: dummyjsonAPI.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dummyjsonAPI.middleware),
})

setupListeners(store.dispatch)