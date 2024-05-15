import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const error=useRouteError()
    console.log(error.message)
    let title="An error occerred!"
    let message="somthing went worng"
    if (error){
        message=error?.message
    }

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        {message||error}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        An error occurred while processing your request.
      </Typography>
      {/* <Button onClick={() => window.location.reload()} variant="contained" color="primary">
        Refresh Page
      </Button> */}
    </Container>
  );
};

export default ErrorPage;
