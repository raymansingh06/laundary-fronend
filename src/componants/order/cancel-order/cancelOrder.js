import React from "react";

const CancelOrder = () => {
    
    const cancelOrder =  () =>{
        


    }
    
    return (
        <>
            <section>
                <div className="cancel-order-container">
                    <div className="cancel-header">
                        <p className="alert-window">Alert</p>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="alert-body">
                        <aside className="alert-sign"><i className="fa-solid"></i></aside>
                        <div className="alert-msg-body">
                            <div><p>Are you sure you want to cancel the order </p></div>
                            <div className="cancel-order-btn"><button onClick={()=>{cancelOrder()}}>Proceed</button></div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default CancelOrder;