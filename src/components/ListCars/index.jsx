import React from "react";
import { Link } from 'react-router-dom'
import IconPeople from './Assets/Icons/fi_users.png';
import IconClock from './Assets/Icons/fi_clock.png';
import IconEdit from './Assets/Icons/fi_edit.png';
import IconDelete from './Assets/Icons/fi_trash-2.png';
import './style.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ListCars = (props) => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch(
          'https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10',
          {
            method: "GET",
            headers: {
              access_token: props.user
            },
          }
        );
        const dataCars = await response.json();
        setCars(dataCars.cars);

      } catch (e) {
        console.error(e);
      }
    }
    fetchCars()
  }, []);
  // console.log(cars);
  const onDelete = (id) => {
    axios.delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
      headers: {
        access_token: props.user
      }
    }).then(() => {
      window.location.reload()
    })


  }
  return (
    <div className="content">
      <div className="main">
        <p>Cars {`>`} List Car</p>
        <div className="button-filter">

        </div>
        <div className="row">
          <div className="col">
            <h4>List Car</h4>
            <div className="btn-group" >
              <button type="button" className="btn btn-outline-primary">All</button>
              <button type="button" className="btn btn-outline-primary">2 - 4 People</button>
              <button type="button" className="btn btn-outline-primary">4 - 6 People</button>
              <button type="button" className="btn btn-outline-primary">6 - 8 People</button>

            </div>
          </div>
          <div className="col">
            <Link to={`/addNewCar`}>
              <button style={{ marginLeft: '390px', marginBottom: '10px' }} className="btn btn-primary"> + Add New Car</button>
            </Link>
          </div>
        </div>
        <div className="row">
          {cars.map((car, index) => {
            return (
              <div className="col-lg-4 col-md-4" key={index}>
                <div className="card-border">
                  <div className="card">
                    <img src={car.image} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h6 >{car.name}</h6>
                      <h5 className="fw-bold">Rp {car.price} / hari</h5>
                      <h6><img src={IconPeople} alt="" /> People {car.category}</h6>
                      <h6><img src={IconClock} alt="" /> Update at 4 Apr 2022, 09.00</h6>
                      <div className="row">
                        <div className="col">
                          <Link className="btn btn-outline-danger" onClick={() => onDelete(car.id)} >
                            <img src={IconDelete} alt="" />  Delete
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="btn btn-success" to={`/editCar/${car.id}`}>
                            <img src={IconEdit} alt="" /> Edit
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  );
};

export default ListCars;
