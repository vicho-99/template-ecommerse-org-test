'use client'

import { useEffect } from 'react';
import useCart from '../../../src/hooks/useCart'

export default function ClearCart() {

    const { clearCart } = useCart();

    useEffect(() => {
        clearCart()
    }, [])



    return (
        <br />
    )

}