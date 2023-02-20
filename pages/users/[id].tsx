import Layout from "@/components/Layout";
import { useRouter } from "next/router"

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}
interface UserDetailProps {
    user: User;
}

export default function DetailUsers(props: UserDetailProps) {

    const { user } = props;

    return (
        <>
            <Layout pageTitle="Users Detail">
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.phone}</h1>
                    <h1>{user.website}</h1>
                </div>
            </Layout>

        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user : User) => ({
        params: {
            id: `${user.id}`
        },
    }));
    return {
        paths,
        fallback: false,
    }
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user,
        }
    }
}
