import React from 'react'
import { Link } from '@inertiajs/react'
export default function Pagination({ links }) {
    return (

        <nav aria-label="Page navigation example">
            <ul className="pagination">

                {links.length > 0 ? links.map((link, index) => {
                    return (

                        <li className={`page-item ${link.url === null && 'disabled'} ${link.active && 'active'}`} key={index}>
                            <Link className='page-link' href={link.url}  >
                                <div dangerouslySetInnerHTML={{ __html: link.label }}></div>
                            </Link>
                        </li>
                    )
                }) : (
                    ""
                )}
            </ul>
        </nav>


    )
}
