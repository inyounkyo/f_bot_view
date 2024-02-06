import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

Layout.propType = {
    children: PropTypes.node.isRequired,
}

export default Layout;