import { getProducts } from "@/src/services/products"
import ProductNoFound from '@/src/components/product-no-found'
import Rating from "@/src/components/rating"
import toMoney from "@/src/utils/to-money"
import toPorcentDiscount from "@/src/utils/to-porcent-discount"
export default async function page({ params }) {

    const { product, error } = await getProducts.getOne({ key: params.key })

    if (error) return <ProductNoFound />

    return (

        <section class="text-gray-600 body-font overflow-hidden">

            <div class="container px-5 py-24 mx-auto">

                <div class="lg:w-4/5 mx-auto flex flex-wrap">

                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={"https://smartyventa.cl/files/product/" + product?.images[0]} />

                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{product?.product?.category?.name}</h2>

                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product?.name}</h1>

                        <div class="flex my-4">

                            <Rating />

                        </div>

                        <p class="leading-relaxed">{product?.shortDescription}</p>

                        <div class="flex">

                            <div className="flex flex-row gap-2.5" >

                                <div className="flex-shrink-0 flex items-center" >

                                    <span class="title-font font-medium text-2xl text-gray-900">{toMoney(product?.price?.priceNormal)} </span>

                                </div>

                                <div className="flex-shrink-0 flex items-center" >

                                    {product?.price?.isOffer &&

                                        <div className="bg-red-500 rounded-lg text-white text-xs px-2 py-1 ">

                                            {toPorcentDiscount(product?.price?.discountPercentage)}

                                        </div>
                                    }
                                </div>

                            </div>

                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">

                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}