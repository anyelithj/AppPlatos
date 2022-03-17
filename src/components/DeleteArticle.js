import { Modal } from 'bootstrap';
import { Button } from 'bootstrap';
import React, { useState } from 'react'
import useForm from '../hooks/useForm';

const DeleteArticle = () => {
  const [state, handleChange, reset] = useForm({
    name: '',
    shippingCost: '',
    currency: '',
    ingredients:[],
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {nombre, codigo, descripcion, precio} = state
  
  return (
    <div style={{width: '30%', margin:' 5% 25%'}}>
    <h1>Editar</h1>
    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
  </div>
  )
}

export default DeleteArticle
