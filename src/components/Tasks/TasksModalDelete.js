import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import DialogActions from '@mui/joy/DialogActions'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'

import WarningRoundedIcon from '@mui/icons-material/WarningRounded'

function TasksModalDelete({ item, onSuccess, onClose }) {
  return (
    <Modal
      open={true}
      onClose={onClose}
    >
      <ModalDialog
        variant="outlined"
        role="alertdialog"
      >
        <DialogTitle>
          <WarningRoundedIcon />

          Confirmation
        </DialogTitle>

        <Divider />

        <DialogContent>
          Are you sure you want to delete this task?
        </DialogContent>

        <DialogActions>
          <Button
            variant="solid"
            color="danger"
            onClick={() => onSuccess(item)}
          >
            Delete
          </Button>

          <Button
            variant="plain"
            color="neutral"
            onClick={onClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

export default TasksModalDelete
