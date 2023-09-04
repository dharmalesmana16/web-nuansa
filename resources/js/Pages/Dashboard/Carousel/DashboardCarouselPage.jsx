import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Pagination from '@/Components/Pagination';
import { Link } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

export default function DashboardCarouselPage(props) {
    console.log(props);
    let no = 0;
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
                axios.delete("/dashboard/carousel/" + slug).then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        timer: 3000,
                        showConfirmButton: false,

                    })
                    setTimeout(() => {

                        window.location.replace('/dashboard/carousel');
                    }, 2000);
                });
            }
        })
    }
    return (
        <DashboardLayout>
            <div className="container">
                <div className="text-end py-2">
                    <a href="/dashboard/carousel/new" className='btn btn-md btn-success'>Add New Data</a>
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className='bg-white'>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell >Gambar</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.data.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {no += 1}
                                </TableCell>
                                <TableCell >
                                    <img src={`/storage/carousel/${row.photo}`} width={100} alt="" />

                                </TableCell>
                                <TableCell >

                                    <div className='d-flex '>
                                        <div className="px-2">

                                            <Link href={`/dashboard/carousel/edit/${row.slug}`} className='btn btn-sm btn-primary '>Edit</Link>
                                        </div>
                                        <div className="px-2">

                                            <Link href={`/dashboard/carousel/${row.slug}`} className='btn btn-sm btn-danger' onClick={handleDelete} id={row.slug}>Delete</Link>
                                        </div>

                                    </div>,
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="text-end float-end py-2">

                    <Pagination links={props.data.links} />
                </div>
            </div>
        </DashboardLayout >
    );
}
