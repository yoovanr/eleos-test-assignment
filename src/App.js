import 'react-toastify/dist/ReactToastify.css'

import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { store } from './store'

import Tasks from './pages/Tasks'
import Users from './pages/Users'
import UsersId from './pages/UsersId'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/">
          <Route index element={<Tasks />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersId />} />
        </Route>
      </Routes>

      <ToastContainer />
    </Provider>
  )
}

export default App
