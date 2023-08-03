import { Link } from '@inertiajs/react'
import React from 'react'

export default function BtnLink({ linkTo, disabled, Name, className = '', ...props }) {
    return (
        <Link className={"btn btn-outline-primary " + className} type="submit"  {...props}> {Name}</Link >

    )
}
