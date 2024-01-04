import axios from "axios";

export async function postOrder(order) {

    try {


        const { data } = await axios.post("http://localhost:3000/api/orders", order);

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