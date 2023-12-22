import axiosInstance from "@/src/config/axios-instance-smartyventa";

export async function getProducts({
    page,
    limit,
    categoryId
}) {

    try {

        const { data, status } = await axiosInstance.get("ec-products/light", {
            params: {
                page,
                limit,
                categoryId
            }
        });

        return {
            data,
            status
        }

    } catch (error) {
        console.log(error)
        throw error;

    }

}


export async function getProduct({ key }) {
    try {

        const { data, status } = await axiosInstance.get("ec-products/" + key);

        return {
            data,
            status
        }

    } catch (error) {
        console.log(error)
        throw error;

    }
}