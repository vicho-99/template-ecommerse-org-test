import axios from "axios";

export async function getRegions() {

    try {

        const { data } = await axios.get("http://localhost:3000/api/regions");

        return {
            data: data,
            error: null,
        }

    } catch (error) {


        return {
            data: null,
            error
        }
    }


} 