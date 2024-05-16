import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import UserCard from '../components/UserCard';
import { Typography } from '@mui/material';
import { Await, defer, json, Outlet, useLoaderData } from 'react-router-dom';
 import { Suspense } from 'react';

import LoadingPage from '../components/Loading';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserPage() {
    const {usersData}=useLoaderData();
    console.log(usersData)
  return (
    <Box sx={{ p:2,flexGrow: 1 }}>
        <Typography
            color={"black"}
            variant="h3"
            fontWeight="600"
            sx={{
              "&:hover": {
                color: 'blue',
                cursor: "pointer",
              },
            }}
          >
        Users
          </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={7}>
        <Suspense fallback={<LoadingPage/>}>
          <Await resolve={usersData}>
            {(userLoadedData)=>{
              console.log(userLoadedData[0])
              return <Item item xs={12 } >
                {userLoadedData.map((userData,id)=>(<UserCard
                id={userData.id}
                key={id}   
                url={userData.avatar} 
                name={`${userData.profile.firstName} ${userData.profile.lastName}`} 
                subtitle={userData.jobTitle}/>))}
              </Item>
            }}
          </Await>
        </Suspense>
        </Grid>
        <Grid xs={12} md={5} className="hidden-xs-down">
          <Item>
            <Outlet/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}


async function loadUsers(){
  const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');

  if (!response.ok) {
    // return {isError:true,message:"faild load data"}
    //throw new Response(JSON.stringify({message:"could'nt fetch events"}),{status:500}) 
    throw new Error("could'nt fetch users");
  } else {
    const  data=await response.json();
    //console.log(data)
    return  data
  }
}
export function loader() {
  return defer({
    usersData:loadUsers()
  })
}