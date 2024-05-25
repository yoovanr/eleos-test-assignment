import { useDispatch, useSelector } from 'react-redux'

import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'

import { toast } from 'react-toastify'

import {
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
} from '../store/reducers/tasks'

import AppLayout from '../components/App/AppLayout'

import TasksList from '../components/Tasks/TasksList'
import TasksModalCreate from '../components/Tasks/TasksModalCreate'
import TasksModalUpdate from '../components/Tasks/TasksModalUpdate'
import TasksModalDelete from '../components/Tasks/TasksModalDelete'

function Tasks() {
  const dispatch = useDispatch()

  const isModalCreateVisible = useSelector((state) => state.tasks.isModalCreateVisible)
  const isModalUpdateVisible = useSelector((state) => state.tasks.isModalUpdateVisible)
  const isModalDeleteVisible = useSelector((state) => state.tasks.isModalDeleteVisible)

  const tasks = useSelector((state) => state.tasks.tasks)
  const selectedTask = useSelector((state) => state.tasks.selectedTask)

  const onSuccessCreateTask = (task) => {
    dispatch(createTask(task))

    onCloseCreateTask()

    toast.success('Task has been created!', { position: 'bottom-right', hideProgressBar: true })
  }

  const onSuccessUpdateTask = (task) => {
    dispatch(updateTask(task))

    onCloseUpdateTask()

    toast.success('Task has been updated!', { position: 'bottom-right', hideProgressBar: true })
  }

  const onSuccessDeleteTask = (task) => {
    dispatch(deleteTask(task))

    onCloseDeleteTask()

    toast.success('Task has been deleted!', { position: 'bottom-right', hideProgressBar: true })
  }

  const onCloseCreateTask = () => {
    dispatch(hideModalCreate())
  }

  const onCloseUpdateTask = () => {
    dispatch(hideModalUpdate())
    dispatch(selectTask(null))
  }

  const onCloseDeleteTask = () => {
    dispatch(hideModalDelete())
    dispatch(selectTask(null))
  }

  const onUpdateTask = (task) => {
    dispatch(selectTask(task))

    dispatch(showModalUpdate())
  }

  const onDeleteTask = (task) => {
    dispatch(selectTask(task))

    dispatch(showModalDelete())
  }

  return (
    <AppLayout>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <Typography
          level="h1"
          fontSize={{
            xs: 'xl2',
            md: 'xl4',
          }}
        >
          Tasks
        </Typography>

        <Stack direction="row" spacing={1.5}>
          <Button
            variant="solid"
            color="primary"
            onClick={() => dispatch(showModalCreate())}
          >
            Add task
          </Button>
        </Stack>
      </Stack>

      <Divider component="div" sx={{ my: 2 }} />

      {
        tasks.length
          ? (
            <TasksList
              data={tasks}

              onUpdate={onUpdateTask}
              onDelete={onDeleteTask}
            />
          )
          : (
            <Typography level="p">
              There are no tasks yet!
            </Typography>
          )
      }

      {
        isModalCreateVisible && (
          <TasksModalCreate
            onSuccess={onSuccessCreateTask}
            onClose={onCloseCreateTask}
          />
        )
      }

      {
        isModalUpdateVisible && (
          <TasksModalUpdate
            item={selectedTask}

            onSuccess={onSuccessUpdateTask}
            onClose={onCloseUpdateTask}
          />
        )
      }

      {
        isModalDeleteVisible && (
          <TasksModalDelete
            item={selectedTask}

            onSuccess={onSuccessDeleteTask}
            onClose={onCloseDeleteTask}
          />
        )
      }
    </AppLayout>
  )
}

export default Tasks
