import React, { useState } from "react";
import './style.css';
import Background from '../../assets/images/image 2.png'

const Login = () => {
    const [formData, seFormData] = useState({
        email: "",
        password: "",
    });

    const onInputChange = (e) => {
        const newFormData = {
            ...formData,
            [e.target.name] : e.target.value,
        };

        seFormData(newFormData);

    };

    const storeToLocalStorage = (user) => {
        localStorage.setItem("user",JSON.stringify(user));
    };
    const onHanldeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
                {
                    method: "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            if(response.ok) {
                const user = await response.json();
                storeToLocalStorage(user);
                window.location.href = '/';
            }else {
                throw new Error(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
        
        <section id="loginSection">
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="left-side col-lg-8 p-0 d-none d-lg-flex">
            <div className="image">
              <img src={Background} alt="car"></img>
            </div>
          </div>
          <div className="right-side col-lg-4 d-flex justify-content-center align-items-center">
            <form className="mx-3"
            onSubmit={onHanldeSubmit}
            //  onSubmit={formik.handleSubmit}
             >
              <div className="rectangle"></div>
              <h1 className="w-100 my-4">Welcome Admin BCR!</h1>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Email"
                  onChange={(e)=>onInputChange(e)}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   value={formik.values.email}
                //   style={
                //     formik.errors.email &&
                //     formik.touched.email && { border: "red 1px solid" }
                //   }
                />
                {/* {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger mt-1">{formik.errors.email}</div>
                ) : null} */}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukkan Password"
                  onChange={(e)=>onInputChange(e)}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   value={formik.values.password}
                //   style={
                //     formik.errors.password &&
                //     formik.touched.password && { border: "red 1px solid" }
                //   }
                />
                {/* {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger mt-1">
                    {formik.errors.password}
                  </div>
                ) : null} */}
              </div>
              {/* {message != "berhasil login" && message != null ? (
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : null} */}
              <button type="submit" className="btn mt-3">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
        </>
      
    )
}

export default Login;