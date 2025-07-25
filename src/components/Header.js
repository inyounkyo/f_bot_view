import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import "../styles/header.css";

const Header = () => {
    const navigate = useNavigate();
   
    return (
    <div className="radio-input">
        <label>
          <span onClick={() => navigate('/')}>매매 타점
            <input type="radio" id="value-1" name="value-radio" value="value-1" defaultChecked/>
          </span>
        </label>
        <label>
          <span onClick={() => navigate('/history')}>자산 내역
            <input type="radio" id="value-2" name="value-radio" value="value-2" />
          </span>
        </label>
        <label>
          <span onClick={() => navigate('/invest')}>투자
            <input type="radio" id="value-3" name="value-radio" value="value-3"/>
          </span>
        </label>
        <span className="selection"></span>
    </div>
    );
};

export default Header;