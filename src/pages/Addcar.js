import React from 'react'
import Bar from '../components/Bar'
import '../assets/styles/Addcar.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Alert, Toast } from 'reactstrap'



const Addcar = () => {
    const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate();


  const postCar = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", "Small");
    formData.append("price", price);
    formData.append("image", image);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      await axios.post(`https://rent-cars-api.herokuapp.com/admin/car`, formData, config).then((response) => {
        console.log(response);
        alert("data berhasil ditambahkan!");
        navigate("/cars");
      });
    } catch (error) {
      console.log(error);
      alert("Can't Post the data!");
    }
  };

  return (
    <div className='p-4 d-flex flex-column justify-content-end'>
        <Bar/>
        <div class="breadcrumb">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Cars</a></li>
                <li class="breadcrumb-item">List Cars</li>
                <li class="breadcrumb-item">Add New Car</li>
              </ol>
            </nav>
          </div>
        <div class="title">
            <h2>Add New Car</h2>
        </div>
    <div className="bg-white ml-6 py-4 mr-6">
        <form onSubmit={postCar}>
            <div className='row mb-3'>
                <label for="nama" className="col-sm-2 col-form-label">
                    Nama
                    <span className="text-red">*</span>
                </label>
                <div className='col-sm-6'>
                    <input type="text" name="nama" className="w-1/3 px-4 py-1 text-base border border-gray-300 rounded outline-none  focus:border-black " placeholder="Nama" />
                </div>
            </div>
            <div className='row mb-3'>
                <label for="harga" className="col-sm-2 col-form-label">
                    Harga
                    <span className="text-red">*</span>
                </label>
                <div className='col-sm-6'>
                    <input type="number" name="harga" className="w-1/3 px-4 py-1 text-base border border-gray-300 rounded outline-none  focus:border-black " placeholder="Harga" />
                </div>
            </div>
            <div className='row mb-3'>
                <label for="foto" className="col-sm-2 col-form-label">
                    Foto
                    <span className="text-red">*</span>
                </label>
                <div className='col-sm-6'>
                <input type="file" name="foto" className="border border-gray-300 rounded outline-none" placeholder="Foto" />
                <span className="block text-sm ml-40 font-light text-neutral-neutral3 mt-1">File size max. 2MB</span>
                </div>
            </div>
            <div className='row mb-3'>
                <label for="harga" className="col-sm-2 col-form-label">
                    Start Rent
                </label>
                <div className='col-sm-6'>
                <span>-</span>
                </div>
            </div>
            <div className='row mb-3'>
                <label for="harga" className="col-sm-2 col-form-label">
                    Finish Rent
                </label>
                <div className='col-sm-6'>
                <span>-</span>
                </div>
            </div>
            <div className='row mb-3'>
                <label for="harga" className="col-sm-2 col-form-label">
                    Created at
                </label>
                <div className='col-sm-6'>
                <span>-</span>
                </div>
            </div>
            <div className='row mb-3'>
                <label for="harga" className="col-sm-2 col-form-label">
                    Updated at
                </label>
                <div className='col-sm-6'>
                <span>-</span>
                </div>
            </div>
            <div className="d-grid d-md-block">
                    <button className="btn btn-outline-primary me-2" type="button">Cancel</button>
                    <button className="btn btn-primary" id="btn-add" type="submit" >Save</button>
            </div>
        </form>
      </div>
    </div>

  )
}

export default Addcar