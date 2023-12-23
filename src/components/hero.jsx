export default function Hero({ config }) {


    return (


        <div
            title="Smartyventa - Gestión inteligente de la experiencia de compra de tus clientes"
            alt="Smartyventa - Gestión inteligente de la experiencia de compra de tus clientes"
            className="w-full  bg-cover h-auto bg-left-bottom lg:py-20 py-0"
            style={{ backgroundImage: `url('https://smartyventa.cl/files/ec_banners/${config?.bannerUrls[0]}')` }}>

            <div
                className="
                    flex 
                    w-full 
                    h-full 
                    bg-opacity-0 
                    py-12">

                <div className="container mx-auto max-w-7xlxl px-3 py-12">
                    <div className="mx-auto text-left py-4 px-2">

                        <div className="flex flex-col gap-3 p-3" >

                            <h1 className=" text-3xl  font-bold">Descubre la Belleza de tu Jardín</h1>

                            <p className="text-lg mt-2">Encuentra una amplia selección de plantas, herramientas y accesorios <br /> para hacer florecer tu jardín.</p>

                            <button className="bg-[#8cc63e] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-52  ">
                                Explora Productos
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </div>


    )

}
