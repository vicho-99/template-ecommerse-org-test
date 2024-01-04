
import getNetPaymentValidation from '@/src/integrations/smarty-venta/get-net-payment'
import ClearCart from './clear-cart'

export default async function page({ params }) {

    try {

        const { data, status } = await getNetPaymentValidation(params.key)

        return (

            <section className="text-gray-600 body-font h-screen">

                {status === 200 && <ClearCart />}

                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">¡Celebramos tu Elección! 🌟 Confirmación de Compra Exitosa

                        </h1>

                        <p className="mb-8 leading-relaxed">¡Gracias por elegirnos para tu compra! 🌟 Tu pedido ha sido procesado con éxito y estamos emocionados de enviarte tus productos pronto.</p>

                        <div className="flex justify-center">
                            
                            <a href="/">Volver al inicio</a>
                           
                        </div>

                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-full">

                        <embed className="object-cover object-center rounded" src={data?.location} type="" />

                    </div>

                </div>

            </section >

        )

    } catch (error) {

        return (

            <section className="text-gray-600 body-font h-screen">

                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Notificación
                            <br className="hidden lg:inline-block" />
                        </h1>

                        <p className="mb-8 leading-relaxed">{error?.response?.data?.message}</p>

                    </div>

                </div>

            </section>

        )

    }





}