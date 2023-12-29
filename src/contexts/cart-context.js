import {
    createContext,
    useContext,
    useState,
} from "react";

import { getCartFromLocalStorage } from '@/src/utils/storage/get-from-storage'

const context = createContext()


export const CartProvider = (props) => {

    const [cart, setCart] = useState(getCartFromLocalStorage());


    return (
        <context.Provider value={{
            cart,
            setCart
        }} {...props} />
    )
}

export function CartContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
