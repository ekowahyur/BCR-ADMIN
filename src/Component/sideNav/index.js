import { Link,useLocation } from 'react-router-dom';
import React,{useState} from 'react';
import './style.css';
import Home  from './Assets/Images/Home.png';
import Cars from './Assets/Images/Cars.png';
import Avatar from './Assets/Images/Avatar.png';
import Img from './Assets/Logo/logo.svg';

const SideNav = () => {
    const [collapse, setCollapse] = useState(true);
    const HandleCollapse = () => {
        setCollapse(!collapse);
    };
    const location = useLocation();
    const showMenu = location.pathname === '/' ? true : false 


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
                            AdeSug
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                            <li><a className="dropdown-item" href="#tes">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          
           

        </>

    )
}
export default SideNav;