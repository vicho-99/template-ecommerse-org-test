import { getProducts } from "@/src/services/products"
import ProductNoFound from '@/src/components/product-no-found'
import Rating from "@/src/components/rating"
import toMoney from "@/src/utils/to-money"
import toPorcentDiscount from "@/src/utils/to-porcent-discount"
import AddFavoritiesButton from '@/src/components/buttons/add-favorities-button'
import FormAddToCart from '@/src/components/forms/form-add-to-cart'
import Gallery from './gallery'
import Properties from './properties'

export default async function page({ params }) {

    const { product, error } = await getProducts.getOne({ key: params.key })

    if (error) return <ProductNoFound />

    return (

        <section className="text-gray-600 body-font overflow-hidden">

            <div className="container px-5 py-12 mx-auto">

                <div className="lg:w-4/5 mx-auto flex flex-wrap ">

                    <Gallery images={product?.images} />

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

                                <FormAddToCart product={product} />

                                {/*  <AddFavoritiesButton /> */}

                            </div>

                        </div>

                    </div>

                    <Properties product={product} />

                </div>

            </div>

        </section >

    )

}