import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import './style.css';
import Table from '../DataTable';

const Dashboard = (props) => {
    const [orders, setOrders] = useState([]);
    const [months, setMonth] = useState([]);

    const submit = async (e) => {
        e?.preventDefault()
        
        const response = await fetch(
            `https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?from=${hasilMonth()}-01&until=${hasilMonth()}-${daysInMonth(newMonth(),newYear())}`,
            {
                method: "GET",
                headers: {
                    access_token: props.user
                },
            }
        );

        const dataOrders = await response.json();
        // console.log(dataOrders);
        setOrders(dataOrders);
    }
    const bulanIni = () => {
        return new Date().getMonth()+1
    
    }
    // console.log(typeof bulanIni().toString());
    const hasilMonth = () => {
        if(months.length === 0) {
            // console.log(new Date().getFullYear() + '-' + new Date().getMonth());
           return new Date().getFullYear() + '-' + bulanIni().toString();
        }else{
            // console.log(months);
           return  months;
        }
    }
    // console.log('hasilmon' + hasilMonth());
    const newMonth = () => {
        return hasilMonth().replace('-','').slice(4,6)
    }
    // console.log(newMonth());
    const newYear = () => {
        return hasilMonth().replace('-','').slice(0,4)
    }
    // console.log(newYear());

    const daysInMonth = (month,year) => {
        return new Date(year,month,0).getDate()
    }
    // console.log(daysInMonth(newMonth(),newYear()));
    // console.log(hasilMonth());
   
    // const tanggal = '2022-11';
    // console.log(tanggal);


    useEffect((e) => {
        submit(e)
    }, []);

    // console.log(orders)

    const dataOrderCount = orders.map(order => order.orderCount);
    // console.log(dataOrderCount);


    const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'];

    const data = {
        labels,
        datasets: [
            {
                label: "Amount of Car Rented",
                backgroundColor: "#586B90",
                borderColor: "rgb(255, 99, 132)",
                data: dataOrderCount,
            }
        ]
    }


    return (
        <div>

            <div className="content">
                <div className="main">
                    
                   <form action="" onSubmit={(e)=>submit(e)}>
                   <input type="month" name="month" onChange={event => setMonth(event.target.value) } />
                   <button className="btn btn-primary ms-2" type="submit" >Go</button>
                   </form>
                    <Bar data={data} />
                    <div style={{ padding: '5px' }}></div>
                    <Table user={props.user} />
                    {/* <TesData user={props.user}/> */}




                </div>
            </div>

        </div>

    );
};

export default Dashboard;
