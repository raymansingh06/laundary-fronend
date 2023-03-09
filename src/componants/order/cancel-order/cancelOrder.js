import React, { useState } from "react";
import Axios from "axios";
import "./cancelOrder.css"
const API = process.env.REACT_APP_API || "https://backend-laundary-final.onrender.com"

const CancelOrder = (props) => {
    // it will give orderid,
    /// order details 
    //<CancelOrder display={cancelDisplay}  setCancelDisplay={setCancelDisplay} orderId={orderId} ordersDetail={ordersDetail} setOrderDetail={setOrderDetail} />

    const cancelOrder = async () =>{
        const token = localStorage.getItem("token");
        console.log("calllll")
        await fetch(`${API}/updateorder/${props.orderId}`,{
            method: "PUT",
            headers : {
                Authorization: token
            }
        })    
        props.setCancelDisplay("none");
     
        const tempOrders = props.ordersDetail.map((data)=>{
            if(data._id == props.orderId){
                data.status = 'Cancelled'
            }
            return data
        })
        props.setOrderDetail(tempOrders)
        console.log(props.ordersDetail)
    }
    
    return (
        <>
            <section style={{display: props.display}}>
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
