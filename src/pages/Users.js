import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import Divider from '@mui/joy/Divider'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'

import { useGetUsersQuery } from '../store/services/users'

import AppLayout from '../components/App/AppLayout'

import UsersList from '../components/Users/UsersList'
import UsersListSkeleton from '../components/Users/UsersListSkeleton'

function Users() {
  const { data, isLoading } = useGetUsersQuery()

  return (
    <AppLayout>
      <Breadcrumbs
        size="sm"
        aria-label="breadcrumbs"
        separator={<ChevronRightRoundedIcon fontSize="sm" />}
        sx={{ pl: 0 }}
      >
        <Link
          underline="none"
          color="neutral"
          href="/"
          aria-label="Home"
        >
          <HomeRoundedIcon />
        </Link>

        <Typography color="primary" fontWeight={500} fontSize={12}>
          Users
        </Typography>
      </Breadcrumbs>

      <Typography
        level="h1"
        fontSize={{
          xs: 'xl2',
          md: 'xl4',
        }}
      >
        Users
      </Typography>

      <Divider component="div" sx={{ my: 2 }} />

      {
        isLoading
        ? <UsersListSkeleton />
        : data.users && data.users.length
        ? <UsersList data={data.users} />
        : (
          <Typography level="p">
            There are no users yet!
          </Typography>
        )
      }
    </AppLayout>
  )
}

export default Users
