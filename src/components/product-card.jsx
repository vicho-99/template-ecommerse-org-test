import toMoney from "@/src/utils/to-money";
import toPorcentDiscount from "@/src/utils/to-porcent-discount";
import Rating from "@/src/components/rating";
import Link from "next/link";

export default function ProductCart({ product }) {

    return (


        <div key={product.ecProductId} className="lg:w-1/4 md:w-1/2 p-2.5 w-full">

            <div className="border flex flex-col h-full w-full p-4" >

                <div className="group overflow-hidden">

                    <Link href={"/producto/" + product.ecProductId} >

                        <picture>

                            <img
                                alt="photo-product-"
                                className="w-full h-80 transition-transform cursor-pointer transform duration-300 scale-100 group-hover:scale-105 p-4"
                                src={"https://smartyventa.cl/files/product/" + product?.images[0]}
                            />

                        </picture>

                    </Link>

                </div>

                <div className="mt-4">

                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product?.product?.category?.name}</h3>

                    <div className="h-16 text-ellipsis overflow-hidden" >

                        <h2 className="text-gray-900 title-font text-lg font-medium">{product?.name}</h2>

                    </div>

                    <div className="flex flex-col gap-1.5" >

                        <div className="flex flex-row gap-1.5" >

                            <p className="text-md text-gray-700" >{toMoney(product?.price?.priceNormal)}</p>

                            {product?.price?.isOffer &&

                                <div className=" bg-red-500 rounded-lg text-white text-xs px-2 py-1">

                                    {toPorcentDiscount(product?.price?.discountPercentage)}

                                </div>
                            }

                        </div>

                        {product?.price?.isOffer &&

                            <p className="line-through text-sm text-gray-500" >{toMoney(product?.price?.priceList)}</p>

                        }

                    </div>

                    <div className="py-2" >
                        <Rating />
                    </div>

                </div>

            </div>

        </div>
    )
}