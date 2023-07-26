import React from 'react'
import { Link } from '@inertiajs/react'
export default function Pagination({ datas }) {
    return (

        <>

            {datas.links.map((data, i) => {
                (

                    <h1 key={i}>
                        {data.label}
                    </h1>
                )


            })}

        </>


    )
}
