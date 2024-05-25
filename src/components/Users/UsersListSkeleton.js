import List from '@mui/joy/List'
import Stack from '@mui/joy/Stack'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Skeleton from '@mui/joy/Skeleton'

function UsersListSkeleton() {
  return (
    <List
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 2,
      }}
    >
      {
        Array(12).fill().map((item, index) => (
          <Stack spacing={2} key={index} useFlexGap>
            <Card variant="outlined">
              <CardContent orientation="horizontal">
                <Skeleton animation="wave" variant="circular" width={40} height={40} />

                <div>
                  <Skeleton animation="wave" variant="text" sx={{ width: 120 }} />

                  <Skeleton
                    animation="wave"
                    variant="text"
                    level="body-sm"
                    sx={{ width: 200 }}
                  />
                </div>
              </CardContent>
            </Card>
          </Stack>
        ))
      }
    </List>
  )
}

export default UsersListSkeleton