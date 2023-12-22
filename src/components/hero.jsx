export default function Hero({ config }) {

    return (

        <div className="flex relative w-full">

            <img src={`https://smartyventa.cl/files/ec_banners/${config?.bannerUrls[0]}`} className="w-full" alt="banner-1" />

            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 text-black px-4">

                <div className="flex flex-col gap-3" >

                    <h1 className="text-3xl font-bold">Descubre la Belleza de tu Jardín</h1>

                    <p className="text-lg mt-2">Encuentra una amplia selección de plantas, herramientas y accesorios <br /> para hacer florecer tu jardín.</p>

                    <button className="bg-[#8cc63e] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-52  ">
                        Explora Productos
                    </button>

                </div>

            </div>

        </div>

    )

}
