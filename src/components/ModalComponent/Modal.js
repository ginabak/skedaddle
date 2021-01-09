import React, { useState } from 'react'
import { Modal } from 'react-modal-overlay'
import { Carousel } from '../Carousel'
import 'react-modal-overlay/dist/index.css'
 
export function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Shop Now!</button>
      <Modal show={isOpen} closeModal={() => setIsOpen(false)}>
        <Carousel/>
      </Modal>
    </div>
  )
}

export default ModalComponent;
