'use client'

import toMoney from "@/src/utils/to-money";
import toPorcentDiscount from "@/src/utils/to-porcent-discount";
import { useEffect, useState } from "react";
import BagSkeleton from '@/src/components/skeleton/bag-skeleton'
import EmplyCart from '@/src/components/emply-cart'
import RemoveButton from '@/src/components/buttons/remove-button'


export default function ProductCartList({
    cart,
    removeFromCart,
    updateQtyInCart
}) {

    const [load, setLoad] = useState();

    useEffect(() => setLoad(true), [])

    return (

        <div className="flex flex-col gap-6 pt-12 lg:pt-1 lg:py-4 bg-white  " >

            <h1 className="text-2xl font-semibold pb-4" >Carro de compras</h1>

            {load ? (

                <div className="relative overflow-x-auto">
                    
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 " >

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50" >

                            <tr>
                                <th scope="col" className="px-4 py-2 text-xs">Detalle</th>
                                <th scope="col" className="px-4 py-2 text-xs">Cant.</th>
                                <th scope="col" className="px-4 py-2 text-xs">Total</th>
                                <th scope="col" className="px-4 py-2 text-xs "></th>
                            </tr>

                        </thead>

                        <tbody>

                            {cart.length <= 0 ? <EmplyCart /> : cart?.map(c => (

                                <tr key={c.ecProductId} className="bg-white border-b h-32 "  >

                                    <td>

                                        <div className="flex flex-row gap-4 w-full " >

                                            <picture className="p-0.5 " >
                                                <img src={"https://smartyventa.cl/files/product/" + c.images[0]} alt="" className="lg:h-20 lg:w-32  h-6 w-10 " />
                                            </picture>

                                            <div className=" flex flex-col justify-center gap-2 w-full" >

                                                <span className="text-xs lg:text-sm text-gray-600 font-medium">{c.name}</span>

                                                <div className="flex flex-row gap-2" >

                                                    <span className="text-xs lg:text-sm font-semibold" >{toMoney(c.price?.priceNormal)}</span>

                                                    {c?.price?.isOffer &&
                                                        <span className="bg-red-500 rounded-lg text-white text-xs px-1 py-0.5 hidden lg:block ">
                                                            {toPorcentDiscount(c?.price?.discountPercentage)}
                                                        </span>
                                                    }

                                                </div>

                                                {c?.price?.isOffer &&
                                                    <p className="line-through font-normal text-xs lg:text-sm " >{toMoney(c?.price?.priceList)}</p>
                                                }

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-4" >

                                        <div className="flex items-center justify-center" >

                                            <input
                                                type="number"
                                                value={c.qty}
                                                min={1}
                                                max={c.stock.qtyAvailable}
                                                onChange={(event) => updateQtyInCart(c.ecProductId, event.target.value)}
                                                className="border  w-10 lg:w-full rounded text-center lg:text-sm  h-8 text-xs "
                                            />

                                        </div>

                                    </td>

                                    <td className="px-6 py-4 text-xs lg:text-sm text-center " >{toMoney(c.price?.priceNormal * c.qty)}</td>

                                    <td>   <RemoveButton onClick={() => removeFromCart(c.ecProductId)} /></td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            ) : <BagSkeleton />}

        </div >

    )
}