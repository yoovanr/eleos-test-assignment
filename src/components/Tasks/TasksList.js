import List from '@mui/joy/List'

import TasksCard from './TasksCard'

function TasksList({ data, onUpdate, onDelete }) {
  return (
    <List
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 2,
      }}
    >
      {
        data.map((item) => (
          <TasksCard
            key={item.id}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      }
    </List>
  )
}

export default TasksList