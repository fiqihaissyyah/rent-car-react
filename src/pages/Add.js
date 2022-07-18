import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BsAsterisk } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setShowToast } from "../features/carSlice";


const Add = () => {
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const [carName, setCarName] = useState("");
    const [carPrice, setCarPrice] = useState(0);
    const [carImage, setCarImage] = useState("");
  
    const submitCar = async (i) => {
      i.preventDefault();
  
      const formData = new FormData();
      formData.append("name", carName);
      formData.append("category", "Small");
      formData.append("price", carPrice);
      formData.append("image", carImage);
  
      try {
        await axios.post(`https://rent-cars-api.herokuapp.com/admin/car`, formData).then((response) => {
          console.log(response);
          Dispatch(setShowToast)
          navigate("/cars");
        });
      } catch (error) {
        console.log(error);
        alert("Add Car Error!");
      }
    };
  
    return (
      <div>
        <form onSubmit={submitCar} className="mx-4 my-8 flex flex-col gap-5">
          <div className="flex flex-row gap-20">
            <div className="mb-2 pl-2 flex items-center">
              <label htmlFor="nama" className="text-md text-black font-normal">
                Nama
              </label>
              <BsAsterisk size={9} color="red" />
            </div>
            <input type="text" name="nama" placeholder="placeholder" onChange={(i) => setCarName(i.target.value)} className="w-1/3 px-4 py-2 text-base border border-slate-300 rounded" />
          </div>
          <div className="flex flex-row gap-20">
            <div className="mb-2 pl-2 flex items-center">
              <label for="nama">Harga</label>
              <BsAsterisk size={9} color="red" />
            </div>
            <input type="number" name="harga" placeholder="placeholder" onChange={(i) => setCarPrice(i.target.value)} className="w-1/3 px-4 py-2 text-base border border-slate-300 rounded" />
          </div>
          <div className="flex flex-row gap-[5.7rem]">
            <div className="mb-2 pl-2 flex items-center">
              <label for="nama">Foto</label>
              <BsAsterisk size={9} color="red" />
            </div>
            <div className="flex flex-col ">
              <input type="file" name="foto" accept="image/*" onChange={(i) => setCarImage(i.target.files[0])} className="py-1 border-2 w-full border-slate-300 rounded" />
              <span>Maksimal ukuran File 2 MB</span>
            </div>
          </div>
          <div className="flex flex-row gap-16">
            <div className="mb-2 pl-2 flex items-center">
              <label for="nama">Start Rent</label>
            </div>
            <p>-</p>
          </div>
          <div className="flex flex-row gap-[4.7rem]">
            <div className="mb-2 pl-2 flex items-center">
              <label for="nama">Finish at</label>
            </div>
            <p>-</p>
          </div>
          <div className="flex flex-row gap-[3.8rem]">
            <div className="mb-2 pl-2 flex items-center">
              <label for="nama">Created at</label>
            </div>
            <p>-</p>
          </div>
          <div className="flex flex-row gap-[3.5rem]">
            <div className="mb-2 pl-2 flex items-center">
              <label for="nama">Updated at</label>
            </div>
            <p>-</p>
          </div>
  
          <div className="ml-2 flex flex-row gap-5">
            <Link to="/dashboard">
              <button className="p-2 border border-blue-800 rounded-sm">
                <p className="text-blue-800 font-bold">Cancel</p>
              </button>
            </Link>
            <button type="submit" className="px-4 py-2 bg-blue-800 rounded-sm">
              <p className="text-white font-bold">Save</p>
            </button>
          </div>
        </form>
      </div>
    );
  
  
}

export default Add