import React from 'react';


const Navbar = () =>
{
    const cpaLink = "https://xokmmj.orlginaldates.com?utm_source=da57dc555e50572d&s1=166728&s2=1738770&j1=1=1";
    return (
        <nav className="header fixed-top">
            <div className="nav-container">
                <div className='d-flex justify-content-start sign'>
                    <a className="" href={ cpaLink }>SEXTODAYITALY</a>
                </div>


                <div className="d-flex justify-content-end login">
                    <a className=" " href={ cpaLink }>LOG IN NOW</a>
                </div>

            </div>
            <hr />
        </nav>
    );
};

export default Navbar;