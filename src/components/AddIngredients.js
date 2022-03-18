import React from "react";
import { Button, Modal } from "react-bootstrap";


export function AddIngredients(props) {
  const {toggleModal, handleClose, handleIngredientChange, saveIngredient} = props;

  return (
    <Modal
      show={toggleModal}
      onHide={handleClose}
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Agregar Ingrediente</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Marca"
          name="brand"
          onBlur={handleIngredientChange} />
        <input
          type="text"
          placeholder="Items"
          name="items"
          onBlur={handleIngredientChange}
           />
        <input
          type="text"
          placeholder="Precio"
          name="price"
          onBlur={handleIngredientChange} />
        <input
          type="text"
          placeholder="Producto"
          name="product"
          onBlur={handleIngredientChange} />
        <input
          type="text"
          placeholder="Cantidad"
          name="quantity"
          onBlur={handleIngredientChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={saveIngredient}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
