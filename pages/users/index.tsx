import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import styles from '../../styles/users.module.css'

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
                        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
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
