import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import {
  addAsyn
} from "../redux/actions/actionArticle";
import "../Styled/AddArticle.css";
import { AddIngredients } from "./AddIngredients";
import { Item } from "./Item";



const AddArticle = () => {
  let [values, handleInputChange, reset] = useForm({
    name: "",
    shippingCost: "",
    currency: "",
    ingredients: [],
  });

  const [toggleModal, setModal] = useState(false);

  const addIngredient = () => {
    setModal(!toggleModal);
  };

  const [ingredientsState, setIngredient] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);

  const handleClose = () => setModal(false);

  const saveIngredient = () => {
    const objeto = {
      target: {
        name: "ingredients",
        value: [
          {
            brand: "",
            price: 0,
            items: 0,
            product: "margarina la fina",
            quanity: "600gr",
          },
        ],
      },
    };
   
    setIngredientList((oldVale) => {
      return [...oldVale, ingredientsState];
    });
    handleClose();
    setIngredient(false);
  };

  const handleIngredientChange = (content) => {
    console.log(
      "value : ",
      content.target.value,
      "key : ",
      content.target.name
    );
    setIngredient((oldState) => ({
      ...oldState,
      [content.target.name]: content.target.value,
    }));
  };

  const dispatch = useDispatch();

  const { name, shippingCost, currency, ingredients } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
   
    values.ingredients = [...ingredientList];
    dispatch(addAsyn(values));
    console.log(name, shippingCost, currency, ingredients);
    setIngredientList([]);
    reset();
  };

  return (
    <div className="form-agregar">
      <h1>Agregar</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de Articulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre del articulo"
            name="name"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Costo de envío</Form.Label>
          <Form.Control
            type="number"
            placeholder="costo de envío"
            name="shippingCost"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>divisa</Form.Label>
          <Form.Control
            type="text"
            placeholder="divisa"
            name="currency"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ingrediente</Form.Label> <br />
          <span
            style={{ color: "green", cursor: "pointer" }}
            onClick={addIngredient}
          >
            Agregar Ingrediente
          </span>{" "}
          <br />
          <br />
          {ingredientList &&
            ingredientList.map((x, index) => (
              <Item key={index} item={x}></Item>
            ))}
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>
        <Button type="submit">Guardar</Button>
      </Form>
      <AddIngredients
        toggleModal={toggleModal}
        handleClose={handleClose}
        saveIngredient={saveIngredient}
        handleIngredientChange={handleIngredientChange}
      ></AddIngredients>
    </div>
  );
};

export default AddArticle;
