export default function ResumenSkeleton() {
    return (
        <div role="status" className="max-w-sm p-4 border border-gray-200 animate-pulse md:p-6 ">

            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

            <div className="h-2 bg-gray-200 rounded-full mt-10  mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    

            <div className="flex items-center flex-col mt-8">

                <div className="flex w-full" >
                    <div className="h-2.5 bg-gray-200 rounded-full w-full mb-2"></div>

                </div>

                <div className="flex w-full mt-4" >
                    <div className="h-12 bg-gray-200 rounded w-full mb-2"></div>

                </div>

            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}