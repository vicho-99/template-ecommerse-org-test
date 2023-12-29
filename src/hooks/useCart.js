'use client'

import { useEffect, useState } from 'react';
import { CartContext } from '@/src/contexts/cart-context'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import isBrowser from '../utils/is-browser';

const stepProps = {
    'RESUMEN': 'RESUMEN',
    'FORMULARIO': 'FORMULARIO',
    'PAGO': 'PAGO',
}

const useCart = () => {

    const router = useRouter()

    const { cart, setCart } = CartContext()

    const totalProduct = cart?.length || 0;

    const [step, setStep] = useState(stepProps['RESUMEN'])

    const onChangeStep = (newStep) => setStep(stepProps[newStep])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (event, product, qty) => {

        event.preventDefault();

        if (!product?.stock.qtyAvailable > 0)
            return Swal.fire("Producto sin stock!", "", "warning");

        const {
            ecProductId,
            productId,
            name,
            price,
            stock,
            images,
        } = product;


        const existingProduct = cart.find((item) => item.ecProductId === ecProductId);

        if (existingProduct) {

            setCart((prevCart) => prevCart.map((item) =>
                item.ecProductId === ecProductId ? { ...item, qty: qty } : item
            ));

        } else {

            setCart((prevCart) => [
                ...prevCart,
                {
                    ecProductId,
                    productId,
                    name,
                    price,
                    stock,
                    qty,
                    images,
                },
            ]);
        }


        Swal.fire({
            title: "Producto añadido a la cesta!",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Continuar comprando",
            denyButtonText: `Ir a la cesta`,
            cancelButtonText: 'Cerrar',
            denyButtonColor: '#8cc63e',
            confirmButtonColor: '#a3a8a5',
            showCloseButton: true,
        }).then((result) => {

            if (result.isDenied) {
                return router.push("/cesta")
            }
        });


    };

    const removeFromCart = (ecProductId) => {
        setCart((prevCart) => prevCart.filter((product) => product.ecProductId !== ecProductId));
    };

    const clearCart = () => {
        setCart([]);
    };


    const updateQtyInCart = (ecProductId, newQty) => {

        if (newQty <= 0) return null;

        const updatedCart = [...cart];

        const index = updatedCart.findIndex(item => item.ecProductId === ecProductId);

        if (index !== -1) {
            updatedCart[index] = {
                ...updatedCart[index],
                qty: newQty,
            };


            setCart(updatedCart);
        }
    };

    const totalCart = () => {
        if (isBrowser) {
            return cart.reduce((total, item) => {
                return total + parseFloat(item.qty) * parseFloat(item.price.priceNormal);
            }, 0);
        }

    }

    const totalWithoutDiscountCart = () => {
        if (isBrowser) {
            return cart.reduce((total, item) => {
                return total + parseFloat(item.qty) * parseFloat(item.price.priceList);
            }, 0);
        }
    }

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalProduct,
        updateQtyInCart,
        totalCart,
        totalWithoutDiscountCart,
        onChangeStep,
        step
    };

};

export default useCart;
