import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'

import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'

function UsersProfile({ user }) {
  return (
    <Card>
      <Box sx={{ mb: 1 }}>
        <Typography level="title-md">User info</Typography>

        <Typography level="body-sm">
          Customize how your profile information will apper to the networks.
        </Typography>
      </Box>

      <Divider />

      <Stack
        direction="column"
        spacing={2}
        sx={{ display: { xs: 'flex' }, my: 1 }}
      >
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1}>
            <AspectRatio
              ratio="1"
              maxHeight={108}
              sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
            >
              <img
                src={user.image}
                srcSet={`${user.image} 2x`}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </Stack>

          <Stack spacing={1} sx={{ flexGrow: 1 }}>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>

              <FormControl
                disabled
              >
                <FormLabel>First name</FormLabel>
                <Input
                  size="sm"
                  placeholder="First name"
                  value={user.firstName}
                  disabled
                />
              </FormControl>
            </Stack>

            <Stack spacing={1} sx={{ flexGrow: 1 }}>

              <FormControl disabled>
                <FormLabel>Last name</FormLabel>
                <Input
                  size="sm"
                  placeholder="First name"
                  value={user.lastName}
                  disabled
                />
              </FormControl>
            </Stack>
          </Stack>
        </Stack>

        <FormControl disabled>
          <FormLabel>Email</FormLabel>

          <Input
            size="sm"
            type="email"
            startDecorator={<EmailRoundedIcon />}
            placeholder="email"
            value={user.email}
            sx={{ flexGrow: 1 }}
          />
        </FormControl>

        <FormControl disabled>
          <FormLabel>Phone</FormLabel>

          <Input
            size="sm"
            startDecorator={<PhoneRoundedIcon />}
            value={user.phone}
            sx={{ flexGrow: 1 }}
          />
        </FormControl>

        <FormControl disabled>
          <FormLabel>Role</FormLabel>
          <Input size="sm" value={user.role} />
        </FormControl>

        <FormControl disabled>
          <FormLabel>Gender</FormLabel>
          <Input size="sm" value={user.gender} />
        </FormControl>

        <FormControl disabled>
          <FormLabel>University</FormLabel>
          <Input size="sm" value={user.university} />
        </FormControl>

        <FormControl disabled>
          <FormLabel>Mac Adress</FormLabel>
          <Input size="sm" value={user.macAddress} />
        </FormControl>

        <FormControl disabled>
          <FormLabel>User Agent</FormLabel>
          <Input size="sm" value={user.userAgent} />
        </FormControl>
      </Stack>
    </Card>
  )
}

export default UsersProfile
