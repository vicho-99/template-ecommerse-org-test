'use client'

import useCart from "@/src/hooks/useCart";
import toMoney from "@/src/utils/to-money";
import ResumenSkeleton from '@/src/components/skeleton/resumen-skeleton'
import { useEffect, useState } from "react";

export default function BagResumen({
    totalCart,
    totalWithoutDiscountCart,
    onChangeStep,
    step,
    submitFormOrder
}) {

    const [load, setLoad] = useState();

    useEffect(() => setLoad(true), [])

    return (

        load ?

            <div className="flex flex-col gap-1  border border-gray-300 rounded bg-gray-50   p-6 " >

                <div className="flex justify-between flex-row items-center" >

                    <h1 className="text-xl pb-6 font-semibold" >RESUMEN</h1>

                    {step === "FORMULARIO" && (
                        <button className="text-lg" onClick={() => onChangeStep('RESUMEN')} >
                            MODIFICAR CARRITO
                        </button>
                    )}

                </div>

                <hr />

                <br />

                <div className="flex flex-col py-2 gap-2" >

                    <div className="flex flex-row gap-1 justify-between  " >

                        <span className="text-xs lg:text-sm font-medium" >TOTAL</span>

                        <p className="text-xs lg:text-sm" >{toMoney(totalWithoutDiscountCart())}</p>

                    </div>

                    <div className="flex flex-row gap-1 justify-between  " >

                        <span className="text-xs lg:text-sm font-medium" >DESCUENTO</span>

                        <p className="text-xs lg:text-sm text-red-500" >{toMoney(totalCart() - totalWithoutDiscountCart())}</p>

                    </div>


                    <div className="flex flex-row gap-1 justify-between pt-3 " >

                        <span className="text-xs lg:text-sm font-medium" >TOTAL FINAL</span>

                        <p className="text-xs lg:text-sm" >{toMoney(totalCart())}</p>

                    </div>

                    <div className="py-1.5 pt-4 flex gap-3 flex-col" >



                        <button
                            onClick={() => {

                                switch (step) {
                                    case 'RESUMEN':

                                        return onChangeStep('FORMULARIO')
                                    case 'FORMULARIO':

                                        return submitFormOrder()
                                    default:
                                        break;
                                }


                                

                            }}
                            className="bg-gray-900 w-full text-white py-2 lg:pt-2.5 lg:px-2 px-1.5  text-sm lg:text-md rounded" >

                            {(() => {

                                switch (step) {
                                    case 'RESUMEN':

                                        return 'CONTINUAR'
                                    case 'FORMULARIO':

                                        return 'PAGAR'
                                    default:
                                        break;
                                }

                            })()}


                        </button>



                    </div>

                </div>

            </div> : <ResumenSkeleton />

    )

}