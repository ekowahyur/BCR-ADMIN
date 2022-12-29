import React, { useEffect,useState } from "react";

const TesData = (props) => {
    const [orders, setOrders] = useState([]);
    useEffect(()=> {

        async function fetchOrders() {
            try{
                const response = await fetch(
                    // 'https://bootcamp-rent-cars.herokuapp.com/customer/order',    
                    'https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10',    
                {
                    method: "GET",
                    headers : {
                        access_token : props.user, 
                    },
                }
                );        
          
                const dataOrders= await response.json();
                // console.log(dataOrders);
                setOrders(dataOrders.orders);
            }catch(e) {
                console.error(e);
            }
        }
        fetchOrders();
    },[]);
    // const Data = orders.map((order,index) => {
    //     console.log(order.total_price);
    // })

    return (

        <ul>
            {orders?.map((order,index) => {
                // console.log(order);
                return <li >{order.total_price}</li>

            })}
        </ul>
    )
}
export default TesData;