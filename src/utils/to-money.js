export default function toMoney(value) {
    return "$" + Intl.NumberFormat('es-CL').format(value)
}