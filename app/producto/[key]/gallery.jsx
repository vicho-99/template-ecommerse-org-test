'use client'

import React, { useState } from "react"

export default function Gallery({ images }) {

    const [photos, setPhothos] = useState([...images]);

    const [selectedPhoto, setSelectedPhoto] = useState(images[0]);

    return (

        <React.Fragment>

            < picture className="lg:w-1/2 w-full lg:h-auto   flex  justify-center flex-col gap-2.5 rounded " >

                <img alt="ecommerce" className="object-cover object-center rounded border p-1" src={"https://smartyventa.cl/files/product/" + selectedPhoto} />

                <div className="flex flex-row gap-1" >
                    {
                        photos.map(e => (
                            <div className="border cursor-pointer rounded" key={e} onClick={() => setSelectedPhoto(e)} >
                                <img alt="ecommerce" className="h-20 w-20 p-1" src={"https://smartyventa.cl/files/product/" + e} />
                            </div>

                        ))
                    }
                </div>



            </picture >


        </React.Fragment>
    )
}