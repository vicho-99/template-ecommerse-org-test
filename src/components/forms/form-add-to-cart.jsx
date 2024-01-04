'use client'

import PrimaryButton from '@/src/components/buttons/primary-button'
import useCart from '@/src/hooks/useCart'
import { useState } from 'react';


export default function FormAddToCart({ product }) {

    const { addToCart } = useCart();

    const [qty, setQty] = useState(1)

    function AddQty() {
        if (qty < product?.stock?.qtyAvailable )
            setQty(qty + 1)
    }

    function minusQty() {
        if (qty > 1)
            setQty(qty - 1)
    }

    function onSubmitAddProductToCart(event) {
        addToCart(event, product, qty)
        setQty(1);
    }

    return (

        <form onSubmit={onSubmitAddProductToCart}>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-2.5 py-3" >

                <div className="flex flex-row gap-1.5  " >

                    <button
                        type='button'
                        onClick={minusQty}
                        className="bg-gray-200  rounded-lg text-lg w-9  font-bold"
                    >-
                    </button>

                    <input
                        type="number"
                        disabled
                        min={1}
                        max={product.stock.qtyAvailable}
                        value={qty}
                        className="text-center rounded-lg w-14"

                    />
                    <button
                        type='button'
                        onClick={AddQty}
                        className="bg-gray-200  rounded-lg text-lg w-9 font-bold">
                        +
                    </button>

                    <div className='flex items-center pl-2.5 text-sm text-gray-500' >
                        <span>Disponible: {product?.stock.qtyAvailable}</span>
                    </div>

                </div>

                <div className="flex justify-between" >

                    <PrimaryButton type="submit">
                        Agregar al carro
                    </PrimaryButton >

                </div>

            </div>

        </form>
    )
}