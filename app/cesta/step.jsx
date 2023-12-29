import StepIcon from '@/src/components/icons/step.icon'

export default function Step({ step }) {

    const cssSelected = "flex md:w-full items-center text-green-950 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10";

    const cssNotSelected = "flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10";

    return (

        <ol
            className="flex 
            pb-6 
            items-center 
            w-full 
            text-sm 
            font-medium 
            text-center 
            text-gray-500 
            sm:text-base">

            <li className={step === "RESUMEN" ? cssSelected : cssNotSelected}>

                <span className="flex 
                    items-center 
                    after:content-['/'] 
                    sm:after:hidden after:mx-2 
                    after:text-gray-200
                ">

                    {step === "RESUMEN" && <StepIcon />}

                    Resumen

                </span>

            </li>

            <li className={step === "FORMULARIO" ? cssSelected : cssNotSelected}>

                <span className="flex 
                    items-center 
                    after:content-['/'] 
                    sm:after:hidden after:mx-2 
                    after:text-gray-200
                ">
                    {step === "FORMULARIO" && <StepIcon />}
                    Despacho
                </span>

            </li>

            <li className="flex items-center">
                Pago
            </li>

        </ol>

    )
}