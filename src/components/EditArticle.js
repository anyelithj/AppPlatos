import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'
import { Button} from 'react-bootstrap';
import { Modal } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { addAsyn, ListAsyn } from '../redux/actions/actionArticle';

const EditArticle = () => {
  const [state, reset] = useForm({
    name: '',
    shippingCost: '',
    currency: '',
    ingredients:[],
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {nombre, codigo, descripcion, precio} = state


  const handleSubmit = (e) => {
    e.preventDefaul();
    reset();
}

  return (
    <div style={{width: '30%', margin:' 5% 25%'}}>
    <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Desea modificar datos</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
     
  </div>
  )
}

export default EditArticle
