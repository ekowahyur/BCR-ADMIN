import './styles.css';
import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import Img from "../../assets/css/logo/logo.svg";
import Home from '../../assets/images/Home.png';
import Cars from '../../assets/images/Cars.png';
import Avatar from '../../assets/images/Avatar.png';


const Header = () => {

    const [collapse, setCollapse] = useState(true);
    const HandleCollapse = () => {
        setCollapse(!collapse);
    };
    const location = useLocation();
    const showMenu = location.pathname === '/' ? true : false 
    const Logout = () => {
        localStorage.clear();
        window.location.href = '/login';
      };


    return (
        <>
            {/* Navbar */}
            <div className="navigation">
                <div className="logo"></div>
                <div className="navigation-icon">
                    <Link to={`/`}>
                    <img src={Home} alt="" />
                    </Link>
                </div>
                <div className="navigation-icon">
                    <Link to={`/listCar`}>
                    <img src={Cars} alt="" />
                    </Link>
                </div>
            </div>

            <div className="container">
       
                <div className={collapse ? "sidebar sidebar-show" : "sidebar"}>
                {showMenu ? ( 
                    <>
                     <h4 className="mx-3 text-muted" >Dashboard</h4>
                     <div className='mx-3 bg-light bg-gradient'>
                         <h4 className='menu-klik'>Dashboard</h4>
                     </div>
                    </>
                    
                    
                    ) : 
                    <>
                         <h4 className="mx-3 text-muted" >Cars</h4>
                    <div className='mx-3 bg-light bg-gradient'>
                        <h4 className='menu-klik'>List Car</h4>
                    </div>  
                    </>
                    }
                   
                   
                </div>
                <div className={collapse ? "content content-show " : "content"}>
                    
                </div>
            </div>

            {/* Header */}
            <div className="header">
                <a className="navbar-brand" href="#tes">
                    <img src={Img} alt="Bootstrap" width="70" height="24" />
                </a>
                <div className="toggle" onClick={() => HandleCollapse()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 18H21"
                            stroke="#151515"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 12H21"
                            stroke="#151515"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 6H21"
                            stroke="#151515"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="space-header" />
                <div>
                    <div className="input-group">
                        <div className="form-outline">
                            <input id="search-input" type="search" placeholder='search' className="form-control" />
                        </div>
                        <button id="search-button" type="button" className="btn btn btn-outline-primary">
                            search
                        </button>
                    </div>
                </div>
               <div className='avatar'>
                    <img src={Avatar} alt="a" />
               </div>
                <div>
                    <div className="dropdown">
                        <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin Bcr
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                            <li><a onClick={Logout} className="dropdown-item" href="#tes">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          
           

        </>

    )
}

export default Header;