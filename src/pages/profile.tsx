import { useSession, signOut, getSession, GetSessionParams } from 'next-auth/react'



function Profile() {
    const { data: session, status } = useSession();

    return (
        <>
            {status === 'authenticated' &&
                <p>Welcome, {session.user?.name}</p>

            }
            {!session &&
                <div>
                    <p>you are not signed in</p>
                </div>
            }

        </>
    );
}

export default Profile;

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }
    return { props: { session } }
}