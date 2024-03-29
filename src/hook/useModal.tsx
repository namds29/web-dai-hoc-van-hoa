import { useState } from 'react'

const useModal = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  return {open , handleOpen, handleClose}
}

export default useModal
