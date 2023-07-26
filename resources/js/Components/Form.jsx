import React, { Children } from 'react'

export default function Form({ funcSubmit, children, ...props }) {
    return (
        <form onSubmit={funcSubmit}>
            {children}
        </form>
    )
}
