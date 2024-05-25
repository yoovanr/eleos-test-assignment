import Box from '@mui/joy/Box'

import AppHeader from './AppHeader'

function AppLayout({ children }) {
  return (
    <>
      <AppHeader />

      <Box sx={[{ p: 2 }]}>
        {children}
      </Box>
    </>
  )
}

export default AppLayout
