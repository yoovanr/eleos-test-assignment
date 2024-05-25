import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Divider from '@mui/joy/Divider'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import AppLayout from '../components/App/AppLayout.js'

import UsersProfile from '../components/Users/UsersProfile'
import UsersProfileSkeleton from '../components/Users/UsersProfileSkeleton'

import { useGetUserByIdQuery } from '../store/services/users'

function UsersId() {
  const params = useParams()
  const navigate = useNavigate()

  const { data: user, isLoading, error } = useGetUserByIdQuery(params.id)

  useEffect(() => {
    if (error && error.status === 404) {
      navigate('/users')

      toast.error('User not found!', {
        position: 'bottom-right',
        hideProgressBar: true,
      })
    }
  }, [error])

  return (
    <AppLayout>
      <Stack
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
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

          <Link
            underline="hover"
            color="neutral"
            href="/users"
            fontSize={12}
            fontWeight={500}
          >
            Users
          </Link>

          {
            user && (
              <Typography color="primary" fontWeight={500} fontSize={12}>
                {user.firstName} {user.lastName}
              </Typography>
            )
          }
        </Breadcrumbs>

        <Typography
          level="h1"
          fontSize={{
            xs: 'xl2',
            md: 'xl4',
          }}
        >
          User
        </Typography>

        <Divider component="div" sx={{ my: 2 }} />

        {
          isLoading
            ? <UsersProfileSkeleton />
            : user
            ? <UsersProfile user={user} />
            : null
        }
      </Stack>
    </AppLayout>
  )
}

export default UsersId
