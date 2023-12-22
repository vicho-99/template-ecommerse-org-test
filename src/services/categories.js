import axios from "axios";

export async function getCategories() {

    try {

        const { data } = await axios.get("http://localhost:3000/api/categories");

        return {
            categories: data,
            error: null,
        }

    } catch (error) {

        console.log(error)

        return {
            categories: null,
            error
        }
    }
}