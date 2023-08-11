import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card bg-white shadow border-0  rounded-3" style={{ width: "17%" }} >
                <img src={imgExample} className="img-fluid " style={{
                    objectFit: 'fill',
                    height: "200px",
                    borderRadius: "20px 20px 0px 0px"
                }} alt="..." />
                <div className="card-body ">
                    <h5 className="fw-bold judul">Berita 1</h5>
                    <p className='paragraph2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor optio quae minima unde maiores! Error necessitatibus, blanditiis impedit officia provident aut illo culpa deserunt aperiam, ea harum excepturi vitae.</p>
                </div>
                <div className="card-footer bg-white border-0 ">
                    {/* <secondLink href={"/"}>Dhar</secondLink> */}
                    <Link href='' className='secondLink'>Selengkapnya {">"}</Link>
                </div>
            </div>
        </div>
    )
}
