import React from 'react'

export default function ConvertHTML(data, className = "") {
    return (
        <div dangerouslySetInnerHTML={{ __html: data.name }} className={className} ></div>
    )
}
