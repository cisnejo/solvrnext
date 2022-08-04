import { getSession, GetSessionParams, useSession } from "next-auth/react";

function Protected() {
  const { data: session, status } = useSession();

  return (

    
    <>
      {status === "authenticated" && <div>You are authenticated. Your Name is {session.user.name} </div>}
      {status === "unauthenticated" && <div>You are not authenticated</div>}
    </>
  );
}

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};
export default Protected;
