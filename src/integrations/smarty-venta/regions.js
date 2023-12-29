import axios from "axios";

export async function getRegions() {

    try {

        const { data } = await axios.get("https://smartyventa.cl/api/region");

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