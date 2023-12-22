import axios from "axios";

export const getProducts = {

    lastProducts: async () => {

        try {

            const { data } = await axios.get("http://localhost:3000/api/products", {
                params: {
                    page: 1,
                    limit: 12
                }
            });

            return {
                data: data.data,
                error: null,
            }

        } catch (error) {


            return {
                data: null,
                error
            }
        }
    },

    getOne: async ({ key }) => {
        try {

            const { data } = await axios.get("http://localhost:3000/api/products/" + key);

            return {
                product: data,
                error: null,
            }

        } catch (error) {

            return {
                product: null,
                error
            }
        }
    }


}