
import getNetPaymentValidation from '@/src/integrations/smarty-venta/get-net-payment'
import ClearCart from './clear-cart'

export default async function page({ params }) {

    try {

        const { data, status } = await getNetPaymentValidation(params.key)

        return (

            <section className="text-gray-600 body-font h-screen">

                {status === 200 && <ClearCart />}

                <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900"> Notificación compra   </h1>

                        <br />

                        {data?.status?.status === "APPROVED" ? (

                            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
                                <span className="font-medium">{data?.status?.message}!</span> ¡Gracias por elegirnos para tu compra! 🌟 Tu pedido ha sido procesado con éxito y estamos emocionados de enviarte tus productos pronto.
                            </div>

                        ) : (

                            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-full rounded" role="alert">

                                <p>{data?.status?.message}</p>
                            </div>

                        )}


                        <div className="flex justify-center pt-12">

                            <a className='' href="/">Volver al inicio</a>

                        </div>

                    </div>


                </div>

            </section >

        )

    } catch (error) {

        return (

            <section className="text-gray-600 body-font h-screen">


                <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-full">


                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full" role="alert">
                            <strong className="font-bold">HA OCURRIDO UN PROBLEMA: </strong>
                            <span className="block sm:inline">{error?.response?.data?.message}</span>

                        </div>

                        <div className="flex justify-center pt-12">

                            <a className='' href="/">Volver al inicio</a>

                        </div>

                    </div>


                </div>

            </section >



        )

    }





}