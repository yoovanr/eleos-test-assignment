import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'
import IconButton from '@mui/joy/IconButton'

import Box from '@mui/joy/Box'

import EditIcon from '@mui/icons-material/Edit'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

function TasksCard({ item, onUpdate, onDelete, }) {
  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, }}>
        <Box>
          <Typography level="title-sm" textColor="text.primary" mb={0.5}>
            {item.name}
          </Typography>

          <Typography level="body-xs" textColor="text.tertiary">
            {item.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            height: '32px',
            flexDirection: 'row',
            gap: 1.5,
          }}
        >
          <IconButton size="sm" variant="soft" color="neutral" onClick={() => onUpdate(item)}>
            <EditIcon />
          </IconButton>

          <IconButton size="sm" variant="plain" color="danger" onClick={() => onDelete(item)}>
            <DeleteRoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}

export default TasksCard