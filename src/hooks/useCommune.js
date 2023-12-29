import { useEffect, useState } from "react"
import { getCommunes } from "../services/communes";

export default function useCommune() {

    const [communes, setCommunes] = useState();

    async function listCommunes() {
        let { data } = await getCommunes();
        setCommunes(data)
    }

    useEffect(() => {

        (async () => {
            await listCommunes();
        })();

    }, [])

    return { communes }
}