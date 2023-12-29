'use client'

import PrimaryButton from '@/src/components/buttons/primary-button'
import useCart from '@/src/hooks/useCart'

export default function AddProductToCartButton({ product, qty }) {

    const { addToCart } = useCart();

    return (

        <PrimaryButton type="button" onClick={() => {

            product.qty = qty;

            addToCart(product)

        }}>

            Agregar al carro
        </PrimaryButton >
    )
}