import React from 'react'

export default function BtnLink({ linkTo, disabled, Name, ...props }) {
    return (
        <div>
            <a className="btn btn-outline-primary" type="submit"  {...props}>{Name}</a>

        </div>
    )
}
