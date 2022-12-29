import React,{useEffect,useState} from "react";
import DataTable from 'react-data-table-component';

const TableComponent = (props) => {
    
    const [orders,setOrders] = useState([]);
    
  
    useEffect(()=> {

        async function fetchOrders() {
            try{
                const response = await fetch(
                    // 'https://bootcamp-rent-cars.herokuapp.com/customer/order',    
                    // 'https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10',    
                    `https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10`,
                {
                    method: "GET",
                    headers : {
                        access_token : props.user
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
    });
   
    const columns = [
        {
            name: 'No',
            selector: (row,y) => y+1,
            sortable: true,
        },
        {
            name: 'User Email',
            selector: row => row.User.email,
            sortable: true,
        },
        {
            name: 'Start Rent',
            selector: row => row.start_rent_at,
            sortable: true,
        },
        {
            name: 'Finish Rent',
            selector: row => row.finish_rent_at,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.total_price,
            sortable: true,
        },       
        {
            name: 'Category',
            selector: row => row.Car?.category,
            sortable: true,
        },
    ];
   

        return (
            <DataTable 
                columns={columns}
                data={orders}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="300px"
               
              
               
                />
        )
  
}
export default TableComponent