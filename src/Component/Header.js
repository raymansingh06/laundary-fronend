import React from "react";
const Header = () => {
    return (
        <div id='Header-comp'>
            <div id='Laundry-header'>LAUNDRY</div>


            <div id='Home-header'>
                <div id='content-home-header'>Home</div >
            </div>


            <div id='Pricing-header'>
             <div id='content-pricing-header'>Pricing</div>
            </div>


            <div id='Career-header'>
                <div id='content-career-header'>Career</div>
            </div>

            <Link to="/Signin">
                <div id='Signin-header'>
                    <div id='content-signin-header'>Signin</div>
                </div></Link>
        </div>
    )
}

export default Header