import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate= useNavigate();
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button component={Link} onClick={()=>navigate(-1)}  variant="contained" color="primary">
        Go Back
      </Button>
    </Container>
  );
};

export default NotFoundPage;
