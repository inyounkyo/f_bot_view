import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigate, useParams  } from 'react-router-dom'


const Layout = () => {
    const params = useParams();
    
    useEffect(() => {
        console.log('----Layout-----');
        console.log(params);
        console.log('----Layout-----');
    });

    return (
        <div className='border-solid border-2 border-indigo-600'>
            <Header />
            
            <Outlet />
            
            <Footer />
        </div>
    );
};

Layout.propType = {
    children: PropTypes.node.isRequired,
}

export default Layout;