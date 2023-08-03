import DashboardLayout from '@/Layouts/DashboardLayout'
import React from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2';
export default function Page(props) {
    console.log(props.auth.user);
    function handleDelete(e) {
        e.preventDefault();
        const slug = e.currentTarget.id;
        Swal.fire({
            title: 'Apakah Anda Yakin ?',
            text: "Data yang akan dihapus tidak dapat dikembalikan lagi !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus Data',
            closeOnConfirm: false,
            closeOnCancel: false
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("/dashboard/projects/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000,
                        showConfirmButton: false,

                    })
                    setTimeout(() => {

                        window.location.replace('/dashboard/projects');
                    }, 2000);
                });
            }
        })
    }
    let no = 0;

    const columns = [
        {
            name: 'id',
            selector: row => no += 1,
        },
        {
            name: 'Nama ',
            selector: row => row.nama,

        },
        {
            name: 'Deskripsi',
            selector: row => <div dangerouslySetInnerHTML={{ __html: row.description }}></div>,
            //
        },


        {
            name: 'Gambar',
            selector: row => <img src={`/storage/${row.photo}`} className="w-50" />,

        },
        {
            name: 'Action',
            selector: row => <div className='d-flex '>
                <a href={`/dashboard/projects/edit/${row.slug}`} className='btn btn-sm btn-primary p-2'>Edit</a>
                <button className='btn btn-sm btn-danger' onClick={handleDelete} id={row.slug} type='button'>Delete</button>

            </div>,

        },


    ];
    return (
        <DashboardLayout>
            <div className="text-end py-2">

                <a href="/dashboard/projects/new" className='btn btn-md btn-success'>Add New Data</a>
            </div>
            <DataTable columns={columns}
                data={props.dataprojects}
                pagination
            />
        </DashboardLayout>
    )
}
