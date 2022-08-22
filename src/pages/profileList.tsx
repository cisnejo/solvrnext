import { SharedInfoTag } from "@prisma/client";
import { useEffect, useState } from "react";

import { prisma } from "../db/client";
import styled from "styled-components";

interface UserInfo {
  id:string;
  name: string;
  sharedinfotags: {
    served: string;
    description: string;
    rating: number;
    available:boolean;
  };
}
export function ProfileList(users: any) {
  const [userProfiles, setUserProfiles] = useState({});

  console.log(users)
  const listings = users.users.map((user: UserInfo) => (
    <div key = {user.id} >
      <div>Name : {user.name}</div>
      <div>Users Helped: {user.sharedinfotags.served}</div>
      <div>Description: {user.sharedinfotags.description}</div>
      <div>Rating: {user.sharedinfotags.rating}</div>
      <div>available: {user.sharedinfotags.available}</div>
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
  const users = await prisma.user.findMany({
    include: {
      sharedinfotags: true,
    },
  });

  return { props: { users } };
};

export default ProfileList;
