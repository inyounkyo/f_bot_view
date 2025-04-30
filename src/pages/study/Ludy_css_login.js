import React from 'react';
import styles from './Ludy_css_login.css';

const Ludy_css_login = () => {
    return (
        <div>
						{/* Ludiflex */}

            <div className='login-box'>
                <div className="login-header">
                    <header>Login</header>
                </div>
                <div className="input-box">
                    <input type="text" className='input-field' placeholder="Email" autoComplete='off' required/>
								</div>
								<div className="input-box">
                    <input type="password" className='input-field' placeholder="Password" autoComplete='off' required/>
								</div>
								<div className="forgot">
									<section>
										<input type="checkbox" id="check" />
										<label htmlFor="check">Remember me</label>
									</section>
									<section>
										<a href='#'>Forget password </a>
									</section>
								</div>
								<div className="input-submit">
									<button className="submit-btn" id="submit"></button>
									<label htmlFor="submit">Sign In</label>
								</div>
								<div className="sign-up-link">
									<p>Don't have account? <a href='#'>Sign Up</a></p>
								</div>
            </div>



        </div>

    );
};

export default Ludy_css_login; 