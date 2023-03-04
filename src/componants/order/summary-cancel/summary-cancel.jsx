import { useState } from "react";
import { json } from "react-router-dom";
import CancelOrder from "../cancel-order/cancelOrder";
import "./summary-cancel.css";

export default function Summary(props) {

  const [cancelDisplay, setCancelDisplay] = useState("none");
  const dataDetail = props.summaryData;
  const orders = dataDetail.orders;
  console.log(orders);

  const call = () => {
    props.setSummaryDisplay("none")
    setCancelDisplay("block");
  }    
    

  return(
    <>
  <div id="summary_holder" style={{ display: props.summaryDisplay }}>
    <div id="summary_page">
      <div id="summary_header">
        <h3>Summary</h3>
        <i className="fa-solid fa-xmark " onClick={() => props.setSummaryDisplay("none")}></i>
      </div>
      
      <div className="store_addrs">
        <select>
<<<<<<< HEAD
          <option>Jp Nagar</option>
=======
          <option>K.R Puram</option>
>>>>>>> 098eaedba03d2e0523d81170f73b3d16e83f2a92
        </select>
        <dl>
          <dt>
            <b>Store Address:</b>
          </dt>
<<<<<<< HEAD
          <dd>Near Phone booth, 10th road</dd>
=======
          <dd>Near Bakery Circle, 8th road</dd>
>>>>>>> 098eaedba03d2e0523d81170f73b3d16e83f2a92
        </dl>
        <dl>
          <dt>
            <b>Phone:</b>
          </dt>
<<<<<<< HEAD
          <dd>91 9999999999</dd>
=======
          <dd>91 9876543210</dd>
>>>>>>> 098eaedba03d2e0523d81170f73b3d16e83f2a92
        </dl>
      </div>
      <div className="order_details">
        <p className="summary_title_name">Order Details</p>
        <div className="summary_orderlist">
            { props.visibility && 
                orders.map(data=>{
                    return <div key={data.product_type} className="summary_order_container">
                    <p className="summary_prodduct_type">{data.product_type}</p>
                    <p className="summary_wash_type">{data.wash_type}</p>
                    <p className="summary_qty">{`${data.quantity} X ${data.price} = `}</p>
                    <p className="single_total">{Number(data.quantity)*Number(data.price)}</p>
                    </div>
                })
            }
            </div>
        <p className="summary_sub_total">Sub total: {dataDetail.total_price - 90}</p>
        <p className="summary_pickup">Pickup Charges: 90</p>
        <div className="total_price">Total :  Rs. {dataDetail.total_price} </div>
      </div>
      <div className="address_holder" >
            <p className="address_title">Adderss</p>
            <div className="address_container">
            <address>
                <p><b>Home</b></p>
                <p>{localStorage.getItem("address")}</p>
            </address>
            <address>
                <p><b>Other</b></p>
<<<<<<< HEAD
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
=======
                <p>#289, 2nd road, K.R Puram , Bangalore</p>
>>>>>>> 098eaedba03d2e0523d81170f73b3d16e83f2a92
            </address>
            <button className="address_btn">
            ADD NEW
            </button>
            </div>
        </div>

      <button className="summary_confirm"  onClick={() => call()}>Cancel</button>
      
    </div>
  </div>
      <CancelOrder display={cancelDisplay}  setCancelDisplay={setCancelDisplay} orderId={props.orderId} ordersDetail={props.ordersDetail} setOrderDetail={props.setOrderDetail}/>

  </>
  )
}
