
import React from "react";
import React, { useState } from "react";
import { useEffect } from "react";

const OrderPage = ()=>{
    const[summary,setSummary] = useState(false);
    const[orderData,setOrderData]=useState([]);
    const[get,setget] = useState(true);
    const[oredrhistory,    setorderhistory] = useState(true);

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
        <div>

        </div>
    )
}
export default OrderPage;