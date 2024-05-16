import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Define styles using the styled function
const Title = styled(Typography)({
  flexGrow: 1,
});

const useStyles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
};

function HomePage() {
  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <AppBar position="static" sx={{ marginBottom: '30px' }}>
        <Toolbar>
          {/* Use the styled component */}
          <Title variant="h6">
            My Website
          </Title>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={useStyles.card}>
              <CardContent sx={useStyles.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Card 1
                </Typography>
                <Typography>
                  This is a sample card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={useStyles.card}>
              <CardContent sx={useStyles.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Card 2
                </Typography>
                <Typography>
                  This is another sample card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={useStyles.card}>
              <CardContent sx={useStyles.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Card 3
                </Typography>
                <Typography>
                  This is yet another sample card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
