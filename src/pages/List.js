import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/List.css'
import key from '../assets/images/fi_key.svg'
import clock from '../assets/images/fi_clock.svg'
import edit from '../assets/images/fi_edit.svg'
import trash from '../assets/images/fi_trash.svg'
import Bar from '../components/Bar'

const List = () => {
    const [carList, setCarList] = useState({car: [] })
    const getCar = async () =>{
        try {
           const res = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car`)
           console.log(res);
           setCarList({ car: res.data })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCar()
    }, [])
    
  return (
    <div className='p-4 container-fluid'>
        <Bar/>
        <div class="breadcrumb">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Cars</a></li>
                <li class="breadcrumb-item">List Cars</li>
              </ol>
            </nav>
        </div>
        <div className="title d-flex mb-3">
            <h2>List Cars</h2>
            <a href="/add" className="btn btn-add ms-auto"> + Add New Car</a>
        </div>
        <div className="d-flex filter-car mb-4">
            <a href="/#" className="btn btn-filter me-3"
                style={{ border: "1px solid #0D28A6", color: "#0D28A6", background: "#CFD4ED;"}}>All</a>
            <a href="/#" className="btn btn-filter me-3">Small</a>
            <a href="/#" className="btn btn-filter me-3">Medium</a>
            <a href="/#" className="btn btn-filter">Large</a>
        </div>
     {/* ==card cars== */}
    <div className="wrap-cars">
      <div className="row g-4">
       {carList.car.map((i) => (
          <div className="col-md-4">
            <div className="card">
              <div className="wrap-img-car">
                <Link to={{ pathname: `/detail/${i.id}` }}>
                        <img
                            src={i.image}
                            alt="car"
                            className="mx-auto d-block w-100"
                        />
                </Link>
              </div>
              <div className="body-card">
                <h4 className="name-car mb-3">
                  {i.name} <span> {i.category} </span>
                </h4>
                <h3 className="price-car mb-3">
                  Rp. {i.price} / hari
                </h3>
                <div className="d-flex date-rent mb-3">
                  <img style= {{ margin: "0 8px 0 0", width: "20px" }} src={key} alt=""/>
                  {i.start_rent_at && i.finish_rent_at !==null ? (
                      <p className="m-0"> {i.start_rent_at} - {i.finish_rent_at} </p>)
                    : (
                    <p className="m-0"> Start rent - Finish rent </p>
                  )}
                </div>
                <div className="d-flex date-update mb-3">
                  <img style= {{ margin: "0 8px 0 0", width: "20px" }} src={clock} alt=""/>
                  <p className="m-0"> {i.updatedtAt} </p>
                </div>
                <div className="row btn-action">
                  <div className="col-md-6">
                    <a href="/#" className="btn btn-outline-danger w-100" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                    <img style= {{ margin: "0 8px 0 0", width: "20px" }} src={trash} alt=""/> 
                        Delete</a>
                  </div>
                  <div className="col-md-6">
                    <a href="/#" className="btn btn-success w-100">
                    <img style= {{ margin: "0 8px 0 0", width: "20px" }} src={edit} alt=""/>
                        Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
       ))}
      </div>
    </div>
    </div>
  )
}

export default List