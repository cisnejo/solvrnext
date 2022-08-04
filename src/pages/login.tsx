import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

function Login() {
  const { data: session } = useSession();

  const sessionIsLoaded = session ? (
    <div>
      <p>Welcome, {session.user.name}</p>
      <img src={session.user.image!} alt="" />
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  ) : (
    <div>
      <p>You are not signed in</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );

  return (
    <>
      {typeof session === "undefined" ? (
        <div>Fetching session...</div>
      ) : (
        sessionIsLoaded
      )}
    </>
  );
}

export default Login;
