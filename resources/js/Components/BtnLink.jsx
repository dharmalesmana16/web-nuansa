import { Link } from '@inertiajs/react'
import React from 'react'

export default function BtnLink({ href, disabled, Name, className = '', ...props }) {
    return (
        <Link className={"btn btn-outline-primary " + className} type="submit" style={{
            borderColor: "#023e8a"
        }} href={href} {...props} > {Name}</Link>

    )
}
