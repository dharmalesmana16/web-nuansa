import DashboardLayout from '@/Layouts/DashboardLayout'
import React from 'react'

export default function DashboardHome({ auth }) {
    // console.log(auth);
    console.log(auth);
    return (
        <DashboardLayout user={auth.user}>
            <div className="row">

            </div>

        </DashboardLayout>
    )
}
