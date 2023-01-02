
import { Card, CardHeader, CardContent, Container, FormLabel, TextField, CardActionArea, Button } from '@mui/material';
import React from 'react';
  
const Login = () => {
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
          <TextField id="user-name" variant="outlined" fullWidth/>
          <FormLabel>Password</FormLabel>
          <TextField id="password" variant="outlined" fullWidth type={'password'} />
        </CardContent>
        <CardContent sx={{
          display:'flex',
          justifyContent:'end',
        }}>
          <Button variant='contained' size='large' color='secondary'>
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};
  
export default Login;