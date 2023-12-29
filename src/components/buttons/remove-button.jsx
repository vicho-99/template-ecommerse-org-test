import RemoveIcon from '@/src/components/icons/remove-icon'

export default function RemoveButton({ ...otherProps }) {

    return (

        <button
            type="button"
            className="text-sm text-red-500"
            {...otherProps}
        >
            <RemoveIcon />

        </button>

    )
    
}