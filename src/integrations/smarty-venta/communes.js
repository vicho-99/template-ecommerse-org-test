import axios from "axios";

export async function getCommunes() {

    try {

        const { data } = await axios.get("https://smartyventa.cl/api/commune");

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