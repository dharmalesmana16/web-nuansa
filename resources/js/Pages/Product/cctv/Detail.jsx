import DetailProduct from '@/Components/DetailProduct'
import Layout from '@/Layouts/Layout'
import React from 'react'

export default function Detail(props) {
    return (
        <Layout>

            <div>
                <DetailProduct data={props.data} />
            </div>
        </Layout>
    )
}
