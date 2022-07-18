import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ModalImage from "react-modal-image";
import { BsPeople } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaRegCalendar } from 'react-icons/fa';
import '../assets/styles/Detail.css'

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({ car: []})

    const getDetailCar = async () => {
        try {
            const res = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
           console.log(res);
           setDetail({ car: res.data })
        } catch (error) {    
        }
    }

    useEffect(() => {
        getDetailCar()
    }, [])

  return (
    <div>
        <div className='mt-4'>
            <div className="wrap-detail container">
                <div className="row">

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body p-4">
                                <h5 className="title-detail fw-bold">Tentang Paket</h5>
                                <p>Include</p>

                                <ul className="text-detail">
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>

                                <p>Exlude:</p>
                                <ul className="text-detail">
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                
                                <div class="accordion" id="accordionDetail">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button title-detail fw-bold px-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Refund, Reschedule, Overtime
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionDetail">
                                            <div class="accordion-body p-0">
                                                <ul className="text-detail">
                                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li> Tidak termasuk akomodasi penginapan</li>
                                                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li> Tidak termasuk akomodasi penginapan</li>
                                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li> Tidak termasuk akomodasi penginapan</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="title-detail fw-bold"> </h5>

                            
                            </div>

                        </div>

                        <div className="row flex-row-reverse mt-4 clearfix">
                            <div className="col-md-4 float-right">
                                <Link to="/invoice" className="btn btn-card btn-bayar btn-success w-100">
                                    Lanjutkan pembayaran
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div>
                                    <ModalImage
                                    className="modal-image d-block mx-auto"
                                    small={detail.car.image}
                                    large={detail.car.image}                       
                                    />
                                </div>
                                <h5 className="title-detail fw-bold">{detail.car.name}/{detail.car.category}</h5>
                                <div className="mb-4 text-muted">
                                    <small><BsPeople/>4 orang</small>
                                    <small className="mx-2"><FiSettings/>Manual</small>
                                    <small> <FaRegCalendar/>Tahun 2020</small>
                                </div>
                                
                                <div className="d-flex px-2 justify-content-between">
                                    <div className="">Total</div>
                                    <div className="ms-auto fw-bold" style={{textAlign:'right'}}>Rp. {detail.car.price}</div>
                                </div>

                                <div className="container mt-2 px-0">
                                    <Link to="/invoice" className="btn btn-bayar btn-success w-100">
                                        Lanjutkan pembayaran
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Detail