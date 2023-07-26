import ThreeCard from '@/Components/ThreeCard'
import Layout from '@/Layouts/Layout'
import React from 'react'

export default function Index(props) {
    return (
        <Layout >
            <div>
                <ThreeCard data={props.datavideotron} />
            </div>
        </Layout>
    )
}
