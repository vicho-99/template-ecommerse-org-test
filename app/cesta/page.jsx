'use client'

import ProductCartList from './product-cart-list'
import BagResumen from '@/app/cesta/bag-resumen'
import Step from '@/app/cesta/step'
import useCart from '@/src/hooks/useCart';
import FormPayment from '@/src/components/forms/form-payment'

export default function Page() {

    const {
        totalCart,
        totalWithoutDiscountCart,
        cart,
        removeFromCart,
        updateQtyInCart,
        step,
        onChangeStep
    } = useCart();

    const stepRender = () => {

        switch (step) {
            case "RESUMEN":
                return (
                    <ProductCartList cart={cart}
                        removeFromCart={removeFromCart}
                        updateQtyInCart={updateQtyInCart}
                    />
                )

            case "FORMULARIO":
                return (
                    <FormPayment />
                )

            default:
                return (
                    <ProductCartList cart={cart}
                        removeFromCart={removeFromCart}
                        updateQtyInCart={updateQtyInCart}
                    />
                );
        }

    }

    return (

        <section className="text-gray-600 body-font overflow-hidden ">

            <div className="container px-5 py-8 mx-auto ">

                <div className="mx-auto flex flex-wrap ">

                    <div className="grid grid-cols-3 gap-1 lg:gap-12 w-full min-h-screen">

                        <div className=" col-span-3 lg:col-span-2 ">

                            <Step step={step} />

                            {stepRender()}

                        </div>

                        <div className=" col-span-3 lg:col-span-1    ">

                            <BagResumen
                                step={step}
                                onChangeStep={onChangeStep}
                                totalCart={totalCart}
                                totalWithoutDiscountCart={totalWithoutDiscountCart}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}