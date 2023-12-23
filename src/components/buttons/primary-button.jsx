export default function PrimaryButton({ children, ...otherProps }) {
    return (

        <button {...otherProps} className="bg-[#8cc63e] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg" >
            {children}
        </button>

    )
}