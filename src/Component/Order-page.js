
import React from "react";
import React, { useState } from "react";
import { useEffect } from "react";

const OrderPage = ()=>{
    const[summary,setSummary] = useState(false);
    const[orderData,setOrderData]=useState([]);
    const[get,setget] = useState(true);
    const[oredrhistory,    setorderhistory] = useState(true);
    const[query,setQuery] =useState("")

    useEffect(()=>{
        if(Authou){
            axious({
                mathod:'GET',
                url:"createoredrurl",
                headers:{
                    
                }
            }).then((datas)=>{
                setorderhistory(true);
                //console.log(currorder);
            setOrderData(datas.data);
            })
        }else{
            Navigate("/Signin")
        }
    },[])

    const handleView=(data)=>{
        setViewdata(data);
    }

    const selecthandler = (e)=>{
        if(e.target.value === "Store location"){
            setget(!get)
        }else{
            const newdata = orderData.filter((item)=>{
                if("")
            })
        }
    }
    return(
        <>
        <div className="class">
    <p className="orderv">Order {orderData.length}</p>
 <div className="class">
    <Link to="/create-order"><button className="create">Create</button></Link>
    <img className="mangnifine" src="/images/search.png" alt=""/>
    <input type="search1" onChange={event=>setQuery(event.target.value)} className="search"/>
 </div>
 <table className="order_table" style={{border:"none"}}>
    <tr>
        <th style={{width:"90px"}}>Order Id</th>
    </tr>
    <th style={{width:"150px"}}>Order Date and Time</th>

 </table>

        </div>
        </>
    )
}
export default OrderPage;