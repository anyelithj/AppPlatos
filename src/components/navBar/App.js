import React, { useRef, useState } from 'react'
import Burger from './Burger';
import Menu from './Menu'
import '../../Styled/styles.css'
import styled from 'styled-components';


const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${({ open }) => open ? '#008000' : '#FFFFFA'};
  height: 20vh;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";


`

const App = () => {

    const  [open, setOpen] = useState(false);
    const node = useRef();
  return (
    <div>
      <Nav ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
      </Nav>
    </div>
  )
}

export default App
