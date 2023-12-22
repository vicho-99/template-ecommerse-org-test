import { getProducts } from "@/src/services/products"
import ProductCart from "@/src/components/product-card";

export default async function HomeProductList() {

    const {
        data
    } = await getProducts.lastProducts();

    return (

        <div className="flex w-full" >

            <div className="mx-auto max-w-screen-xl px-6 py-12 ">

                <div className="flex flex-wrap ">

                    <div className="flex flex-col gap-6 w-full text-center py-8" >

                        <h1 className="text-3xl font-semibold" >Productos recientes</h1>

                        <p className="text-sm" >Estamos constantemente actualizando nuestros productos para brindarte la mayor variedad posible.</p>

                    </div>

                    {data?.map(it => <ProductCart product={it} key={it.ecProductId} />)}

                </div>

            </div>

        </div>

    )
}