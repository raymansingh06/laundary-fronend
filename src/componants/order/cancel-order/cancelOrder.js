import React from "react";
import React, { useState } from "react";
import "./cancelOrder.css"
const API = "BApi";

const CancelOrder = (props) => {

   /*
   This cancel function is responsible for handling ths users decion to cancel order
This props value will get from main page only which containing all details which stored,canceloredrcode,
    from main page will get values
    it will give orderid,
    order details 
    
    <CancelOrder display={cancelDisplay}  setCancelDisplay={setCancelDisplay} orderId={orderId} ordersDetail={ordersDetail} setOrderDetail={setOrderDetail} />
   */


    const cancelOrder = async () =>{
//This will used to retrive the token value from browsers,that stored in localstorage when user will logs into authenticatin
        const token = localStorage.getItem("token");// local storage is allo
      // here we are using fetch method to send put request by syntaxing base url+endpoint+id whcih ever we will get
        await fetch(`${API}/updateorder/${props.orderId}`,{
            method: "PUT",
            headers : {
                Authorization: token
            }
        })
        //this line used to avoid the confirmation
        props.setCancelDisplay("none");
     
        const tempOrders = props.ordersDetail.map((data)=>{
            //data._id is uderdata id and props.orderid which user will used to cancel
            if(data._id == props.orderId){
                data.status = 'Cancelled'
            }
            return data// it will return data
        })
        //if the request is successful , the function updates the order status in props.orderDetails as "cancelled" it will
        // set as what ever status we getting as Cancelled 
        props.setOrderDetail(tempOrders)
        
    }
    
    return (
        <>
            <section>
                <div className="cancel-order-container">
                    <div className="cancel-header">
                        <p className="alert-window">Alert</p>
                        <i className="fa-solid fa-xmark " onClick={() => props.setCancelDisplay("none")} ></i>
                    </div>
                    <div className="alert-body">
                        <aside className="alert-sign"><i className="fa-solid fa-triangle-exclamation fa-2x"></i></aside>
                        <div className="alert-msg-body">
                            <div><p>Are you sure you want to cancel the order No: {props.orderId}</p></div>
                            <div className="cancel-order-btn"><button onClick={()=>{cancelOrder()}}>Proceed</button></div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default CancelOrder;