import { getProducts } from "@/src/services/products"
import ProductNoFound from '@/src/components/product-no-found'
import Rating from "@/src/components/rating"
import toMoney from "@/src/utils/to-money"
import toPorcentDiscount from "@/src/utils/to-porcent-discount"
import PrimaryButton from '@/src/components/buttons/primary-button'

export default async function page({ params }) {

    const { product, error } = await getProducts.getOne({ key: params.key })

    if (error) return <ProductNoFound />

    return (

        <section className="text-gray-600 body-font overflow-hidden">

            <div className="container px-5 py-24 mx-auto">

                <div className="lg:w-4/5 mx-auto flex flex-wrap rounded-xs">

                    <picture className="lg:w-1/2 w-full lg:h-auto border" >

                        <img alt="ecommerce" className="object-cover object-center rounded" src={"https://smartyventa.cl/files/product/" + product?.images[0]} />

                    </picture>

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">

                        <div className="flex flex-col divide-y "> {/* Divisor  */}

                            <div className="flex flex-col gap-2 py-3" >

                                <div className="flex flex-row justify-between" >

                                    <span className="text-xs lg:text-sm  text-gray-500 ">{product?.product?.category?.name}</span>

                                    <span className=" text-xs lg:text-sm  text-gray-500" >SKU: {product?.product?.externalid}</span>

                                </div>

                                <h1 className="text-gray-900 text-xl lg:text-2xl  font-medium">{product?.name}</h1>

                                <div className="flex flex-row gap-3 items-center">

                                    <Rating />

                                    <a className="cursor-pointer underline  text-xs lg:text-sm " >Califar</a>

                                </div>

                            </div>

                            <div className="flex flex-col gap-2.5 py-3 " >

                                <div className="flex flex-col gap-1  " >

                                    <div className="flex flex-row gap-1" >

                                        <div className="flex-shrink-0 flex items-center  " >

                                            <span className="font-semibold text-2xl lg:text-3xl text-gray-600">{toMoney(product?.price?.priceNormal)} </span>

                                        </div>

                                        <div className="flex-shrink-0 flex items-center" >

                                            {product?.price?.isOffer &&

                                                <div className="bg-red-500 rounded-lg text-white text-xs px-2 py-1 ">

                                                    {toPorcentDiscount(product?.price?.discountPercentage)}

                                                </div>
                                            }

                                        </div>

                                    </div>


                                    {product?.price?.isOffer &&

                                        <p className="line-through font-normal text-lg lg:text-xl text-gray-500" >{toMoney(product?.price?.priceList)}</p>

                                    }

                                </div>

                                <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-2.5 py-3" >

                                    <div className="flex flex-row gap-1.5  " >

                                        <button className="bg-gray-200  rounded-lg text-lg w-9 font-bold" >+</button>

                                        <input type="number" disabled defaultValue={1} className="text-center rounded-lg   w-14 " />

                                        <button className="bg-gray-200  rounded-lg text-lg w-9  font-bold" >-</button>

                                    </div>

                                    <div className="flex justify-between" >

                                        <PrimaryButton>
                                            Agregar al carro
                                        </PrimaryButton>

                                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">

                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>

                                        </button>
                                    </div>




                                </div>

                            </div>



                        </div>


                        {/* 
                            <div className="flex flex-col gap-1.5" >

                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product?.product?.category?.name}</h2>

                                <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">{product?.name}</h1>

                                <div className="flex flex-row gap-3 divide-x">

                                    <Rating />

                                    <a className="cursor-pointer underline pl-4 " >Califar</a>

                                </div>

                            </div>

                            <div className="flex flex-row gap-2.5 pt-3 " >

                                <div className="flex-shrink-0 flex flex-row justify-between bg-gray-500" >

                                    <span>Normal</span>


                                    <span className="title-font font-medium text-2xl text-gray-900">{toMoney(product?.price?.priceNormal)} </span>

                                </div>

                                <div className="flex-shrink-0 flex items-center" >

                                    {product?.price?.isOffer &&

                                        <div className="bg-red-500 rounded-lg text-white text-xs px-2 py-1 ">

                                            {toPorcentDiscount(product?.price?.discountPercentage)}

                                        </div>
                                    }

                                </div>

                            </div>
 */}
                        {/* <div>

                                <div className="flex flex-row gap-2.5" >

                                    <div className="flex-shrink-0 flex items-center" >

                                        <span className="title-font font-medium text-2xl text-gray-900">{toMoney(product?.price?.priceNormal)} </span>

                                    </div>

                                    <div className="flex-shrink-0 flex items-center" >

                                        {product?.price?.isOffer &&

                                            <div className="bg-red-500 rounded-lg text-white text-xs px-2 py-1 ">

                                                {toPorcentDiscount(product?.price?.discountPercentage)}

                                            </div>
                                        }

                                    </div>

                                </div>

                                <div>
                                    <PrimaryButton>
                                        Agregar al carro
                                    </PrimaryButton>
                                </div>


                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">

                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>

                                </button>

                            </div> */}





                    </div>

                </div>

            </div>

        </section >

    )
}