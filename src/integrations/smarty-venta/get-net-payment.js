import axiosInstance from "@/src/config/axios-instance-smartyventa";

export default async function getNetPaymentValidation(key) {

    try {

        const { data, status } = await axiosInstance.get("get-net-payments/" + key);

        return {
            data,
            status
        }
    } catch (error) {

        throw error;

    }

}

