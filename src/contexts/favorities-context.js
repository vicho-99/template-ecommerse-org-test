import {
    createContext,
    useContext,
    useState,
} from "react";

const context = createContext()

export const FavoritiesProvider = (props) => {

    const [favorities, setFavorities] = useState([]);

    return (
        <context.Provider value={{
            favorities,
            setFavorities
        }} {...props} />
    )
}

export function FavoritiesContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
