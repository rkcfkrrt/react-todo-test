import '../App.js';
import styled from 'styled-components';
import React, { useState } from "react";

export default function Login ({ handleLogin0 }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleAddUsername = e => {
    setUsername(e.target.value)
    
  }
  const handleAddPassword = e => {setPassword(e.target.value)}

  const handleLogin = () => {console.log(username, password)}

  return(
    <>
      <Username>
        <span>帳號：</span>
        <input type="text" className="input-content" value={username} onChange={handleAddUsername}/>
      </Username>
      <Password>
        <span>密碼：</span>
        <input type="text" className="input-content" value={password} onChange={handleAddPassword}/>
      </Password>
      <Submit className="btn btn-primary" type="submit" onClick={handleLogin}  >送出</Submit>
    </>
  )
}



const Submit = styled.button`
  &:hover {
    background: #F1CFCD;
  }
  
`;

const Username = styled.div`
  margin: 60px auto 30px;
`;

const Password = styled(Username)`
  margin: 0px auto 30px;
`;
