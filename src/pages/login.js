
import axios from 'axios';
import { Card, CardHeader, CardContent, Container, FormLabel, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
  
const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const axiosInstance = axios.create();

  const handleLogin = () => {
    const payload = {
      userName,
      password,
    };

    axiosInstance.post('https://localhost:3000/let-me-login', payload)
    .then(() => {
      alert('successfully logged');
    })
    .catch((err) => {
      alert('got error: ' + err);
    })
  }

  return (
    <Container maxWidth='sm'
    sx={{
      py:6
    }}>
      <Card>
        <CardHeader
        title='Login Here'
        sx={{
          backgroundColor:'#ccc',
        }} />
        <CardContent>
          <FormLabel>User Name</FormLabel>
          <TextField id="user-name" variant="outlined" fullWidth value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
          />
          <FormLabel>Password</FormLabel>
          <TextField id="password" variant="outlined" fullWidth type={'password'} value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </CardContent>
        <CardContent sx={{
          display:'flex',
          justifyContent:'end',
        }}>
          <Button variant='contained' size='large' color='secondary' onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};
  
export default Login;