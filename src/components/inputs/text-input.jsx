

export default function MyTextInput({
    id,
    name,
    required,
    placeholder,
    label,
    value,
    onChange,
    type
}) {

    return (

        <div>

            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>

            <input
                onChange={onChange}
                value={value}
                type={type}
                id={id}
                name={name}
                className="bg-gray-50 
                border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                focus:ring-blue-500 
                focus:border-blue-500 
                block 
                w-full 
                p-1.5"
                placeholder={placeholder}
                required={required}
            />

        </div>

    )

}