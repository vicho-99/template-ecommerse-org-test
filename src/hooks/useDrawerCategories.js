import { useState } from "react"

export default function useDrawerCategories() {

    const [drawerCategoriesIsOpen, setDrawerCategoriesIsOpen] = useState(false)

    const toggleDrawerCategories = () => {

        setDrawerCategoriesIsOpen((prevState) => !prevState)

    }

    return {
        toggleDrawerCategories,
        drawerCategoriesIsOpen

    }
}