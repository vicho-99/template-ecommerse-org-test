import axiosInstance from "@/src/config/axios-instance-smartyventa";

export async function getConfigs() {

    try {

        const { data, status } = await axiosInstance.get("ec-configs");

        return {
            data,
            status
        }

    } catch (error) {

        throw error;

    }

}