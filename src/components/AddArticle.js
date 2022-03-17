import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'
import {Form, Button, Modal} from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import { addArticleInitiate, addAsyn, getArticlesInitiate, ListAsyn } from '../redux/actions/actionArticle';
import ListArticles from './ListArticles';
import "./AddArticle.css";


const AddArticle = () => {

  let [values, handleInputChange, reset] = useForm({
    name: '',
    shippingCost: '',
    currency: '',
    ingredients:[],
  });
 const marcaRef = React.useRef(null);
 const itemsRef = React.useRef(null);
 const precioRef = React.useRef(null);
 const cantidadRef = React.useRef(null);

  const [toggleModal,setModal] = useState(false);
  const addIngredient = () => {
    setModal(!toggleModal)
  }
  const [ingredientsState,setIngredient] = useState(false);
  const [ingredientList,setIngredientList] = useState([]);

  const handleClose = () => setModal(false);

  const saveIngredient = () => {
    const objeto = {
      target: {
        name:'ingredients', 
        value:[
          {
            brand:'',
            price:0,
            items:0,
            product:'margarina la fina',
            quanity:'600gr'
          }
        ]
      }
    }
    //handleInputChange(objeto)
    setIngredientList(oldVale => {
      return [...oldVale, ingredientsState];
    })
    handleClose();
    setIngredient(false);

  }

  const handleIngredientChange = (content) => {
    console.log("value : ", content.target.value, "key : ", content.target.name)
    setIngredient((oldState) => (
      {
        ...oldState,
        [content.target.name]:content.target.value
      }
    ))
  }

  const dispatch = useDispatch()
  
  
  const {name, shippingCost, currency, ingredients} = values
         
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addArticleInitiate())
    console.log(" ~ file: AddArticle.js ~ line 42 ~ handleSubmit ~ values", values)
    //inmutabilidad
    values.ingredients = [...ingredientList];
    dispatch(addAsyn(values))
    console.log(name, shippingCost, currency, ingredients)
    setIngredientList([]);
    reset();    
}

   
    
   return (
    <div className='form-agregar'>
      <h1>Agregar</h1>
       <Form onSubmit={handleSubmit} >
          <Form.Group  className="mb-3">
            <Form.Label>
            Nombre de Articulo
            </Form.Label>
            <Form.Control type="text" placeholder='nombre del articulo' name="name" onChange={handleInputChange} required/>
          </Form.Group>
          <Form.Group  className="mb-3">
            <Form.Label >
            Costo de envío
            </Form.Label>
              <Form.Control type="number" placeholder='costo de envío' name="shippingCost" onChange={handleInputChange} required/>
          </Form.Group>
          <Form.Group  className="mb-3">
            <Form.Label >
            divisa
            </Form.Label>
            <Form.Control type="text" placeholder='divisa' name="currency" onChange={handleInputChange} required/>
          </Form.Group>
          <Form.Group  className="mb-3" >
            <Form.Label >
            Ingrediente
            </Form.Label> <br />
            <span style={{color:'green', cursor:'pointer'}} onClick={addIngredient}>Agregar Ingrediente</span> <br />
            <br />
            {ingredientList && ingredientList.map( (x, index) => (
              <div key={index}>
              <span>Marca : {x.brand}</span> <br />
              <span>Items : {x.items}</span> <br />
              <span>Price : {x.price}</span> <br />
              <span>Product : {x.product}</span> <br />
              <span>Quantity : {x.quantity}</span> <br /> 
              <hr />
              </div>
            ) )}
          </Form.Group>
          <Form.Group  className="mb-3">
          </Form.Group>
            <Button type="submit">Guardar</Button>
    </Form>
    <ListArticles/>
    <Modal show={toggleModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Ingrediente</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <input type="text" placeholder='Marca' name="brand" ref={marcaRef} onBlur={handleIngredientChange}  />
          <input type="text" placeholder='Items' name="items" ref={itemsRef} onBlur={handleIngredientChange}  />
          <input type="text" placeholder='Precio' name="price" ref={precioRef} onBlur={handleIngredientChange}  />
          <input type="text" placeholder='Producto' name="product" ref={precioRef} onBlur={handleIngredientChange}  />
          <input type="text" placeholder='Cantidad' name="quantity" ref={cantidadRef} onBlur={handleIngredientChange}  />
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
    </div>
  )
}

export default AddArticle
