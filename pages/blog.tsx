import Layout from "@/components/Layout";
import styles from '../styles/blog.module.css'


interface Posts {
    id: number;
    title: string;
    body: string;
}

interface dataBlog {
    dataBlog: Posts[]
}

export default function Blog(props: dataBlog) {
    const { dataBlog } = props;
    return (
        <>
            <Layout pageTitle="Blog Pages">
                {dataBlog.map(blog => {
                    return (
                        <div key={blog.id} className={styles.card}>
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    )
                })}
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();

    return {
        props: {
            dataBlog,
        }
    }
}
