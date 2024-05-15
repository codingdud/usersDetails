import * as React from 'react';

import { Await, defer, json,  useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import LoadingPage from './Loading';
import ProfileCard from './ProfileCard';

export default function Profile() {
    const {userID}=useLoaderData();
    console.log(userID)
  return (<Suspense fallback={<LoadingPage/>}>
          <Await resolve={userID}>
            {(userData)=>(<ProfileCard data={userData}/>)}
          </Await>
        </Suspense>);
}

async function loadID(id){
  console.log(id)
  const response = await fetch('httpS://602e7c2c4410730017c50b9d.mockapi.io/users/'+id);

  if (!response.ok) {
    // return {isError:true,message:"faild load data"}
    //throw new Response(JSON.stringify({message:"could'nt fetch events"}),{status:500}) 
    //throw json({message:"could'nt fetch users by id"},{status:500});
    throw new Error("could'nt fetch users by id")
  } else {
    const  data=await response.json();
    console.log(data)
    return  data
  }
}
export function loader({resquest,params}) {
  const id=params.id
  return defer({
    userID: loadID(id)
  })
}