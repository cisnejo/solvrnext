import { SharedInfoTag } from "@prisma/client";
import { useEffect, useState } from "react";

import { prisma } from "../db/client";

export function ProfileList(users: any) {
  const [userProfiles, setUserProfiles] = useState({});
  const listings = users.users.map((user: SharedInfoTag) => (
    <>
      <div>Description: {user.description}</div>
      <div>Rating: {user.rating}</div>
    </>
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
    where: {
      available: true,
    },
  });

  return { props: { users } };
};

export default ProfileList;
