import axiosInstance from "@/src/config/axios-instance-smartyventa";

export async function getCategorys() {

    try {

        const { data, status } = await axiosInstance.get("ec-categorys");

        return {
            data,
            status
        }

    } catch (error) {

        throw error;

    }

}