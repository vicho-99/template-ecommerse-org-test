import axiosInstance from "@/src/config/axios-instance-smartyventa";

export async function createOrder({ order }) {

    try {

        const { data, status } = await axiosInstance.post("orders", order);

        return {
            data,
            status
        }

    } catch (error) {
        console.log(error.response.data)
        throw error;

    }

}
