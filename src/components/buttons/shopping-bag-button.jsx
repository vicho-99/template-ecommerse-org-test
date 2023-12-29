'use client'

import ShoppingBagIcon from "@/src/components/icons/shopping-bag-icon";
import useCart from "@/src/hooks/useCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShoppingBagButton() {

    const router = useRouter()
    const [load, setLoad] = useState(false);
    const { totalProduct } = useCart();

    useEffect(() => {
        setLoad(true)
    }, [])

    return (

        <div className="flex items-center" >

            <div className="relative inline-block">

                <button onClick={() => router.push("/cesta")} >
                    <ShoppingBagIcon className={"h-6 w-6"} />
                </button>

                <div
                    className="absolute bottom-5 left-5 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {load ? totalProduct : 0}
                </div>

            </div>

        </div>

    )

}