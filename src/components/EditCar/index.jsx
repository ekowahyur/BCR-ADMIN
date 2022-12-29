// import axios from "axios";
// import React from "react";
// import {Link} from 'react-router-dom';

// const EditCar = () => {
//     const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/admin/car/635'

//     const fetch = useRef(true);

//     const getDetail = (CarsId) => {
//         axios.get(`${baseUrl}/admin/car/${CarsId}`)
//         .then((response)=> {
//             setDetail(response.data)
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//     }
//     return (

//         <div className="content">
//             <div className="main">
//                 <p>Cars {`>`} List Car {`>`} Edit Car</p>

//                 <h4>Edit Car</h4>
//                 <div className="row" style={{ backgroundColor: '#ffff', padding: '20px', marginRight: '10px' }}>
//                     <div className="col">
//                         <div className="mb-3 row">
//                             <label  className="col-sm-2 col-form-label">Nama/Tipe Mobil</label>
//                             <div className="col-sm-10">
//                                 <input type="text" className="form-control" placeholder="Input Nama/Tipe Mobil" />
//                             </div>
//                         </div>
//                         <div className="mb-3 row">
//                             <label className="col-sm-2 col-form-label">Harga</label>
//                             <div className="col-sm-10">
//                                 <input type="number" className="form-control" placeholder="Input Harga Sewa Mobil" />
//                             </div>
//                         </div>
//                         <div className="mb-3 row">
//                             <label className="col-sm-2 col-form-label">Foto</label>
//                             <div className="col-sm-10">
//                                 <input type="file" className="form-control" placeholder="Upload Foto Mobil" />
//                                 <p className="text-muted text-sm">File Size Max. 2 MB</p>
//                             </div>
//                         </div>
//                         <div className="mb-3 row">
//                             <label className="col-sm-2 col-form-label">Kategori</label>
//                             <div className="col-sm-10">
//                                 <select className="form-select" id="exampleFormControlSelect1">
//                                     <option >Pilih Kategori</option>
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                     <option>4</option>
//                                     <option>5</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="button mt-5">
//                             <Link to={`/ListCar`}>
//                             <button className="btn btn-outline-primary">Cancel</button>
//                             </Link>
                           
//                             <button className="btn btn-primary ms-2">Save</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditCar