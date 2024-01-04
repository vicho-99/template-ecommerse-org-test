import { useState } from "react"
import { validateFormOrder } from '@/src/utils/validations/orders'
import Swal from "sweetalert2";
import { mappedOrder } from '@/src/utils/mapped/orders'
import useCart from "./useCart";
import { postOrder } from "../services/orders";
export default function useOrder() {

    const [order, setOrder] = useState({
        firstName: "",
        lastName: "",
        rut: "",
        phone: "",
        email: "",
        turnId: null,
        communeId: "",
        address: "",
        regionId: "",
    })

    const { cart } = useCart();

    async function onChangeInputText(event) {

        const { name, value } = event.target;

        setOrder({ ...order, [name]: value })

    }

    async function submitFormOrder() {

        try {

            Swal.showLoading();

            await validateFormOrder(order)


            let { data, error } = await postOrder(await mappedOrder({ order, cart }))

            if (error)
                throw error;

            window.location.href = data.url;

        } catch (error) {

            Swal.hideLoading();

            if (error.response) {

                Swal.fire("Comunicación servidor.", JSON.stringify(error?.response?.data?.message), "warning");
            } else {

                Swal.fire("Validación", error, "warning");
            }

        }


    }

    return {
        order,
        onChangeInputText,
        submitFormOrder
    }

}