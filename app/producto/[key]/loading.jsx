import PhotoIcon from "@/src/components/icons/photo-icon"

export default function Loading() {
    return (


        <section className="text-gray-600 body-font overflow-hidden">

            <div className="container px-5 py-24 mx-auto">

                <div className="lg:w-4/5 mx-auto flex flex-wrap rounded-xs">

                    <picture className="lg:w-1/2 w-full lg:h-auto r" >

                        <PhotoIcon className="h-full w-full text-gray-200" />
                    </picture>

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">

                        <div className="w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                        </div>
                        <span className="sr-only">Loading...</span>

                    </div>

                </div>

            </div>

        </section >




    )
}