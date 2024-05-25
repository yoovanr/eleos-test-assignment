import { useNavigate } from 'react-router-dom'

import List from '@mui/joy/List'
import Sheet from '@mui/joy/Sheet'
import Box from '@mui/joy/Box'
import Avatar from '@mui/joy/Avatar'
import Typography from '@mui/joy/Typography'

function UsersList({ data }) {
  const navigate = useNavigate()

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
          <Sheet
            key={item.id}
            component="li"
            variant="outlined"
            sx={{
              borderRadius: 'sm',
              p: 2,
              listStyle: 'none',
              '&:hover': {
                cursor: 'pointer',
                boxShadow: 'md',
              },
            }}
            onClick={() => navigate(`/users/${item.id}`)}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Avatar
                variant="outlined"
                src={item.image}
                srcSet={`${item.image} 2x`}
                sx={{ borderRadius: '50%' }}
              />

              <div>
                <Typography level="title-md">
                  {item.firstName} {item.lastName}
                </Typography>

                <Typography level="body-xs">
                  {item.email}
                </Typography>
              </div>
            </Box>
          </Sheet>
        ))
      }
    </List>
  )
}

export default UsersList