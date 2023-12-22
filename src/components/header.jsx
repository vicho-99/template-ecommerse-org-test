
import CategoriesButton from "@/src/components/buttons/categories-button"
import HeaderOptions from "@/src/components/header-options"
import Logo from "@/src/components/logo"
import CategoriesList from "@/src/components/categories-list"

export default async function Header({ config }) {

    return (

        <header className="fixed top-0 w-full z-50 " >

            <nav style={{ background: config?.backgroundColorHeader }} className={`py-5 px-4 border shadow-sm`}>

                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl ">

                    <div className="flex items-center gap-6">

                        <Logo
                            className={"w-36 h-8  "}
                            url={"https://smartyventa.cl/files/" + config?.url}
                        />

                        <CategoriesButton CategoriesList={<CategoriesList />} />


                    </div>

                    <div className="flex items-center lg:order-2">

                        <HeaderOptions />


                    </div>

                </div>

            </nav>

        </header >
    )
}