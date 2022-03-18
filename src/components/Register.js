import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm';
import { registroEmailPassAsyn } from '../redux/actions/actionRegistro';

const Register = () => {
  const dispatch = useDispatch()
  const [values, handleInputChange, reset] = useForm({
      nombre: '',
      email: '',
      password: '',
      passwordrep: ''
  })

  const {nombre, email, password, passwordrep} = values;
  
  const handleSubmitRegistro = (e) => {
    e.preventDefault();
    dispatch(registroEmailPassAsyn(email, password, nombre))
    reset()

  }
  return (
    <div>
      <h2 className="y-5 m-5">Registro</h2>
       <Form className="container w-50  y-5 m-5" onSubmit={handleSubmitRegistro} >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                    />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="passwordrep"
                        value={passwordrep}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <br></br>
                <Button
                    variant="dark" type="submit" className="w-50">
                    Registrarse
                </Button>
                <br></br>
                <br></br>
                <Link to="/login">Login</Link>

            </Form>       
    </div>
  )
}

export default Register

