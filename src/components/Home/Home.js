import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () =>
{
    document.title = "Sex in Italy-Free Dating Site";

    const cpaLink = "https://xokmmj.orlginaldates.com?utm_source=da57dc555e50572d&s1=166728&s2=1738770&j1=1";

    return (
        <div className='set-bg new'>
            <div >
                <Navbar />
            </div>
            <div className="d-flex new-bg justify-content-center align-items-center">
                <div className="container">
                    <div className="d-flex description justify-content-center align-items-center">
                        <div className='w-75 text-center '>
                            <h1 className='title fw-bold '>100% Free Dating Site - Dating in <br></br>Italy</h1>
                            <p>Welcome Italian Female 40 Create a profile</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className=" d-flex justify-content-center">
                            <a href={ cpaLink }><button className="  btn btn-success fs-4 m-2">Register Free</button></a>
                        </div>
                        <div className=" d-flex justify-content-center">
                            <a href={ cpaLink }><button className="  btn btn-outline-info fs-5 m-2 p-2">Log in</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;