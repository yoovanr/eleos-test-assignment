import { useForm, Controller } from 'react-hook-form'

import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import Input from '@mui/joy/Input'
import Textarea from '@mui/joy/Textarea'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import Stack from '@mui/joy/Stack'

function TasksModalCreate({ onSuccess, onClose }) {
  const { control, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const onSubmit = (data) => {
    onSuccess(data)
  }

  const isDisabled = !isDirty || !isValid

  return (
    <Modal
      open={true}
      onClose={onClose}
    >
      <ModalDialog>
        <DialogTitle>Create task</DialogTitle>
        <DialogContent>Please provide the details for your to-do item.</DialogContent>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'This field is required!' }}
              render={({ field: { value, onChange } }) => (
                <FormControl>
                  <FormLabel>Name *</FormLabel>

                  <Input
                    value={value}
                    onChange={onChange}
                  />

                  {
                    !!errors.name && (
                      <FormHelperText>
                        {errors.name.message}
                      </FormHelperText>
                    )
                  }
                </FormControl>
              )}
            />

            <Controller
              name="description"
              control={control}
              rules={{ required: 'This field is required!' }}
              render={({ field: { value, onChange } }) => (
                <FormControl>
                  <FormLabel>Description *</FormLabel>

                  <Textarea
                    value={value}
                    onChange={onChange}
                    minRows={4}
                  />

                  {
                    !!errors.description && (
                      <FormHelperText>
                        {errors.description.message}
                      </FormHelperText>
                    )
                  }
                </FormControl>
              )}
            />

            <Button
              type="submit"
              disabled={isDisabled}
            >
              Create
            </Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  )
}

export default TasksModalCreate