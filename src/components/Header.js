import '../App.js';
import styled from 'styled-components';
import React from "react";

export default function Header () {


  return(
    <header className="header"  id="header">
      <Title>Todo List</Title>
      <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
        <div className="header_img"> <img src="" alt="" /> </div>
    </header>
  )
}


const Title = styled.h3`
  color: #545871;
  display: flex;
  justify-content: center;
  margin: 15px auto;
`;