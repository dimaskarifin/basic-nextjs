import { useRouter } from "next/router"

export default function DetailUsers() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Detail Users {id}</h1>
        </div>
    )
}
