import { SharedInfoTag } from "@prisma/client";
import { useEffect, useState } from "react";

import { prisma } from "../db/client";
import styled from "styled-components";

export function ProfileList(users: any) {
  const [userProfiles, setUserProfiles] = useState({});

  console.log(users);
  const listings = users.users.map((user: any) => (
    <div>
      <div>Name : {user.name}</div>
      <div>Users Helped: {user.served}</div>
      <div>Description: {user.description}</div>
      <div>Rating: {user.rating}</div>
    </div>
  ));

  return (
    <div>
      <h2>Here is a list of available members:</h2>
      <div>{listings}</div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const users = await prisma.sharedInfoTag.findMany({
    where:{
      user:{
        name:"Joseph Cisneros"
      }
    }
     
   
  });

  return { props: { users } };
};

export default ProfileList;
