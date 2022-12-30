import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import './style.css';

const EditCar = (props) => {
  const [detail, setDetail] = useState({});
  const carId = window.localStorage.getItem('id_car');
  let { id } = useParams();
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/admin';

  const fetch = useRef(true);

  const getDetail = (id) => {
    axios.get(`${baseUrl}/car/${id}`,
      {
        headers: {
          access_token: props.user
        }
      })
      .then((response) => {
        setDetail(response.data);
        window.localStorage.setItem('id_car', response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };
  console.log(detail);

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(id)
    }
  }, [id]);


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

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios(
        `${baseUrl}/admin/car/${carId}`,
        {
          method: "PUT",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            access_token: props.user,
          },
          data: { ...formData }
        }
      );

      window.location.href = '/listCar';
    } catch (error) {
      console.log(error);
    }
  };


  return (

    <div className="content">
      <div className="main">
        <p>Cars {`>`} List Car {`>`} Edit Car</p>

        <h4>Edit Car</h4>
        <div className="row" style={{ backgroundColor: '#ffff', padding: '20px', marginRight: '10px' }}>
          <form action="" onSubmit={onHandleSubmit}>
            <div className="col">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" placeholder="Input Nama/Tipe Mobil" />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Harga</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" placeholder="Input Harga Sewa Mobil" />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Foto</label>
                <div className="col-sm-10">
                  <input type="file" className="form-control" placeholder="Upload Foto Mobil" />
                  <p className="text-muted text-sm">File Size Max. 2 MB</p>
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditCar;