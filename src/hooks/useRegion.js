import { useEffect, useState } from "react"
import { getRegions } from "../services/regions";

export default function useRegion() {

    const [regions, setRegions] = useState();

    async function listRegions() {
        let { data } = await getRegions();
        setRegions(data)
    }

    useEffect(() => {

        (async () => {
            await listRegions();
        })();

    }, [])

    return { regions }
}