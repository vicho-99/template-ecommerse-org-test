import { useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState({
        firstName: "",
        lastName: "",
        rut: "",
        phone: "",
        email: "",
        turnId: null,
        communeId: null,
        address: "",
        regionId: null,
    })

    async function onChangeInputText(event) {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value })
    }

    async function submitFormOrder(event) {
        event.preventDefault();
        alert('Ok')
    }

    return {
        order,
        onChangeInputText,
        submitFormOrder
    }

}