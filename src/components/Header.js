import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import "../styles/header.css";

const Header = () => {
    const navigate = useNavigate();
   
    return (
    <div className="radio-input">
        <label>
        <input type="radio" id="value-1" name="value-radio" value="value-1" defaultChecked/>
        <span onClick={() => navigate('/')}>자산</span>
        </label>
        <label>
          <input type="radio" id="value-2" name="value-radio" value="value-2"/>
          <span onClick={() => navigate('/history')}>자산내역</span>
        </label>
        <label>
          <input type="radio" id="value-3" name="value-radio" value="value-3"/>
          <span onClick={() => navigate('/invest')}>투자</span>
        </label>
        <span className="selection"></span>
    </div>
    );
};

export default Header;