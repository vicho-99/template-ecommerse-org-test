'use client'

import { useEffect, useState } from 'react'
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

export default function DrawerCategories({
    drawerCategoriesIsOpen,
    toggleDrawerCategories,
    CategoriesList

}) {

    const [load, setLoad] = useState();

    useEffect(() => setLoad(true), [])

    return (

        load &&
        <Drawer
            open={drawerCategoriesIsOpen}
            onClose={toggleDrawerCategories}
            direction='left'
            className='bla bla bla'
        >


            <div className='flex py-2 px-4' >
                <h1 className='text-gray-950 text-sm' >Categorías</h1>
            </div>

            {CategoriesList}

        </Drawer>

    )
}

