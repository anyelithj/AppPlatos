import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { loginEmailPassword, loginGoogle } from '../redux/actions/actionLogin';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm( {
        email: '',
        password: ''
    })

    const { email, password} = values

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }
    const handleGoogle = () => {
        dispatch(loginGoogle())
        navigate("/listArticle")

    }
  return (
    <div className="container">
        <h2 className="y-5 m-5">Login</h2>
       <Form onSubmit={handleLogin} className="w-50  y-5 m-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
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
                <br></br>
                <Button variant="dark" type="submit"  onClick={handleGoogle} className="w-50">
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Button>
                <br></br>
                <br></br>
                <Link to="/register">Registrarse</Link>
            </Form>

    </div>
  )
}

export default Login
