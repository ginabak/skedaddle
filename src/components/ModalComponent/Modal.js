import React, { useState } from 'react'
import { Modal } from 'react-modal-overlay'
import 'react-modal-overlay/dist/index.css'
 
export function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Shop Now!</button>
      <Modal show={isOpen} closeModal={() => setIsOpen(false)}>
        <h4> we are shopping </h4>
      </Modal>
    </div>
  )
}

export default ModalComponent;
