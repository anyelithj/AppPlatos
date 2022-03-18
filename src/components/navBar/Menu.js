import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { actionLogout } from '../../redux/actions/actionLogin'

const StyledMenu = styled.nav`
  display: flex;
  flex.direction: row;
  justify-content: center;
  background:  ##9acd32;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 15rem;
  position: absolute;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media(max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #008000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media(max.width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color:#058c42 ;
    }
  }
`

const Menu = ({open}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log('click en logout');
    dispatch(actionLogout())
    navigate("/")
  }
  return (
    <StyledMenu open={open}>
      <a href='/'>
        registro Articulo
      </a>
      <a href='/'>
        Editar Articulo
      </a>
      <a href='/'>
        Articulos
      </a>
      <button type="button" className='btn btn-danger' onClick={() => handleLogout()}>Logout</button>
    </StyledMenu>
  )
}

export default Menu
