import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';
import axios from "axios";

const AddCar = (props) => {
  const [formData, seFormData] = useState({
    name: "",
    category: "",
    price: "",
    status: "",
    image: "",
  })

  const onInputChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    seFormData(newFormData);

  };
  console.log(formData);

  const onHanldeSubmit = async (e) => {
    e.preventDefault();

    const response = await axios(
      "https://bootcamp-rent-cars.herokuapp.com/admin/car",
      {
        method: "POST",

        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          access_token: props.user,
          // "Content-Type" : "multipart/form-data",

        },
        data: { ...formData }
      }
    )
      .then(() => {
        window.location.href = '/listCar';
      })
      .catch((error) => {
        console.log(error);
      })

  }


  return (

    <div className="content">
      <div className="main">
        <p>Cars {`>`} List Car {`>`} Add New Car</p>

        <h4>Add New Car</h4>
        <div className="row" style={{ backgroundColor: '#ffff', padding: '20px', marginRight: '10px' }}>
          <form action="" onSubmit={onHanldeSubmit}>
            <div className="col">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
                <div className="col-sm-10">
                  <input id="name" name="name" type="text" className="form-control" placeholder="Input Nama/Tipe Mobil" onChange={(e) => onInputChange(e)} />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Harga</label>
                <div className="col-sm-10">
                  <input id="price" name="price" type="number" className="form-control" placeholder="Input Harga Sewa Mobil" onChange={(e) => onInputChange(e)} />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-10">
                  <input id="status" name="status" type="text" className="form-control" placeholder="Input Status" onChange={(e) => onInputChange(e)} />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Foto</label>
                <div className="col-sm-10">
                  {/* <input id="image" name="image" type="file" className="form-control" placeholder="Upload Foto Mobil" onChange={(e)=>onInputChange(e)}/> */}
                  <input
                    className="foto"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      //   setData({
                      //     ...dataRef.current,
                      //     foto: e.target.files[0],
                      //     cek: e.target.files[0] === undefined ? false : true,
                      //   })
                      seFormData({
                        ...formData,
                        image: e.target.files[0],
                      })
                    }
                    id="foto"
                  />

                  <p className="text-muted">File Size Max. 2 MB</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Kategori</label>
                <div className="col-sm-10">
                  {/* <select className="form-select" id="exampleFormControlSelect1">
                                    <option >Pilih Kategori</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select> */}
                  <input id="category" name="category" type="text" className="form-control" placeholder="Kategori Mobil" onChange={(e) => onInputChange(e)} />

                </div>

              </div>
              <div className="button mt-5">
                <Link to={`/ListCar`}>
                  <button className="btn btn-outline-primary">Cancel</button>
                </Link>
                <button className="btn btn-primary ms-2">Save</button>
              </div>
            </div>
            <div className="col">
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default AddCar;