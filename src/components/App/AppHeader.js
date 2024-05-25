import { useLocation } from 'react-router-dom'

import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import Button from '@mui/joy/Button'

function AppHeader() {
  const { pathname } = useLocation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        top: 0,
        zIndex: 10000,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        padding={2}
        sx={{ display: { sm: 'flex' } }}
      >

        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/"
          size="sm"
          sx={{ alignSelf: 'center' }}
          aria-pressed={pathname === '/'}
        >
          Tasks
        </Button>

        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/users"
          size="sm"
          sx={{ alignSelf: 'center' }}
          aria-pressed={pathname.includes('/users')}
        >
          Users
        </Button>
      </Stack>
    </Box>
  )
}

export default AppHeader