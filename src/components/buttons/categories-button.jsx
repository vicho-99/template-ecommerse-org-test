'use client'

import React from "react";
import useDrawerCategories from "@/src/hooks/useDrawerCategories"
import DrawerCategories from "@/src/components/drawer-categories"

import BarsIcon from "@/src/components/icons/bars-icon"

export default function CategoriesButton({
    CategoriesList
}) {

    const {
        drawerCategoriesIsOpen,
        toggleDrawerCategories
    } = useDrawerCategories();

    return (

        <React.Fragment>

            <DrawerCategories
                CategoriesList={CategoriesList}
                drawerCategoriesIsOpen={drawerCategoriesIsOpen}
                toggleDrawerCategories={toggleDrawerCategories}
            />

            <div className="flex flex-row gap-2.5 w-52 text-xs font-medium" >

                <button className="bg-[#8cc63e] rounded-full p-1.5" onClick={toggleDrawerCategories}  >

                    <BarsIcon className={"w-6 h-6 text-white"} />

                </button>

                <p> Menú de <br /> Categorías</p>

            </div>

        </React.Fragment>

    )

}