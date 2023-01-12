import React from 'react';

const Footer = () =>
{
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <div className='text-center p-10'>Copyright&copy; All Rights Reserve { getYear }</div>
    );
};

export default Footer;