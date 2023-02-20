import Layout from "@/components/Layout";
import { useRouter } from "next/router";




interface UsersProps {
    dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
    const { dataUsers } = props;
    const router = useRouter();
    return (
        <Layout pageTitle="Users Pages">
            {dataUsers.map(user => {
                return (
                    <>
                        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>

                    </>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    return {
        props: {
            dataUsers,
        }
    }
}
