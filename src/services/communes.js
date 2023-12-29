import axios from "axios";

export async function getCommunes() {

    try {

        const { data } = await axios.get("http://localhost:3000/api/communes");

  
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