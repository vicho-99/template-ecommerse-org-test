import axios from "axios";

export async function getConfigs() {

    try {

        const { data } = await axios.get("http://localhost:3000/api/configs");

        return {
            config: data,
            error: null,
        }

    } catch (error) {


        return {
            config: null,
            error
        }
    }
}