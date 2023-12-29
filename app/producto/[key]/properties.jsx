
export default function Properties({ product }) {

    return (

        <div className="mt-12 w-full" >

            <div className=" sm:px-0">

                <h3 className="text-2xl pb-4 font-normal leading-7 text-gray-700">Información adicional</h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{product?.description}</p>

            </div>

            <div className="mt-6 border-t border-gray-100">

                <dl className="divide-y divide-gray-100">

                    {product?.specifications.map(s => (
                        <div key={s.ecSpecificationId} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">{s.key}</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{s.value}</dd>
                        </div>
                    ))}


                </dl>

            </div>

        </div>

    )

} 