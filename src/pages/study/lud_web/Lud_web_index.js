import React from 'react';
import '../lud_web/css/style.css';
import { useState, useEffect, useRef } from 'react';

const Lud_web_index = () => {
	
	const [menu_media_toggle, setMenu_media_toggle] = useState(true);
	const [modalSelId, setModalSelId] = useState("");
	const modalSelIdRef = useRef("");

	useEffect(() => {
		window.addEventListener("click",  (e) => {
			if(e.target.className == 'modal') setModalSelId('close');
		});
	});

	const myMenuFunction=() => {
    setMenu_media_toggle(!menu_media_toggle);
	};
	const menuClose = () => {
		setMenu_media_toggle(!menu_media_toggle);
	}

	return (
	<div>
			{/* Welcome WebSite - Css with Html  */}

			{/* MODAL BOX */}
			<div className="modal" id="myModal" style={{ display:`${(modalSelId=='myModal')?'block':'none'}` }}>
				<div className="modal-content">
					<span className="close" onClick={ () => setModalSelId('close') }><i className="fa fa-times"></i></span>
					<div className="content-title">
						<span>Skills</span>
					</div>
					<div className="skills-box">
						<span className="skills-label">HTML</span>
						<span className="skills-label">CSS</span>
						<span className="skills-label">Angular</span>
						<span className="skills-label">Javascript</span>
						<span className="skills-label">React</span>
						<span className="skills-label">Vue</span>
						<span className="skills-label">PHP</span>
					</div>
				</div>
			</div>

			<div className="modal" id="myModal1" style={{ display:`${(modalSelId=='myModal1')?'block':'none'}` }}>
				<div className="modal-content">
					<span className="close" onClick={ () => setModalSelId('close') }><i className="fa fa-times"></i></span>
					<div className="content-title">
						<span>Service We Offer</span>
					</div>
					<div className="desc_content">
						<p>I work together with my team to offer best services in:</p>
						<ul className="services_list">
							<li>Web Development</li>
							<li>Web Design</li>
							<li>Web Hosting</li>
							<li>Software Development</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="modal" id="myModal2" style={{ display:`${(modalSelId=='myModal2')?'block':'none'}` }}>
				<div className="modal-content">
					<span className="close" onClick={ () => setModalSelId('close') }><i className="fa fa-times"></i></span>
					<div className="content-title">
						<span>About Me</span>
					</div>
						<p>I am a skilled and creative frontend web developer with a passion for crafting engaging 
						and user-friendly web interfaces. My expertise lies in transforming design concepts into 
						responsive and visually appealing websites and web applications. 
						With a strong foundation in HTML, CSS, and JavaScript, I excel at implementing responsive design, 
						optimizing performance, and ensuring cross-browser compatibility</p>
				</div>
			</div>
			{/* END OF MODAL BOX */}

			<div className="wrapper">
					<nav className="nav">
							<div className="nav_logo">
								<span>Young-Kyo</span>
							</div>
							<div className="right_nav">
								<div className={(menu_media_toggle)?'nav_menu':'nav_menu responsive'}  id="navMenu">
									<ul className="link_list">
										<div className="close-menu" onClick={ ()=> menuClose() }>
											 <i className="fa fa-times"></i>
										</div>
										<li className="list">
											<a href="#" className="link">Home</a>
										</li>
										<li className="list">
											<a href="#" className="link" id="myBtn" onClick={ () => setModalSelId('myModal') }
												>Skills<i className="fa-solid fa-caret-down">
												</i></a>
											<div className="description_box">
												<div className="link_description" id="myDescription">
													<div className="content-title">
														<span>I'm Skilled In</span>
													</div>
													<div className="desc_content">
														<span className="skills-label">HTML</span>
														<span className="skills-label">CSS</span>
														<span className="skills-label">Angular</span>
														<span className="skills-label">Javascript</span>
														<span className="skills-label">React</span>
														<span className="skills-label">Vue</span>
														<span className="skills-label">PHP</span>
														<span className="skills-label">MySql</span>
													</div>
												</div>
											</div>
										</li>
										<li className="list">
											<a href="#" className="link" id="myBtn"
												onClick={ () => setModalSelId('myModal1') }
											>Services<i className="fa-solid fa-caret-down"></i></a>
											<div className="description_box">
												<div className="link_description" id="myDescription">
													<div className="content-title">
														<span>Service We Offer</span>
													</div>
													<div className="desc_content">
														<p>I work together with my team to offer best services in:</p>
														<ul className="services_list">
															<li>Web Development</li>
															<li>Web Design</li>
															<li>Web Hosting</li>
															<li>Software Development</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li className="list">
											<a href="#" className="link" id="myBtn"
												onClick={ () => setModalSelId('myModal2') }
											>About<i className="fa-solid fa-caret-down"></i></a>
											<div className="description_box about_box">
												<div className="link_description" id="myDescription">
													<div className="content-title">
														<span>About Me</span>
													</div>
													<div className="desc_content">
														<p>
														I am a skilled and creative frontend web developer with a passion for crafting engaging 
														and user-friendly web interfaces. My expertise lies in transforming design concepts into 
														responsive and visually appealing websites and web applications. 
														With a strong foundation in HTML, CSS, and JavaScript, I excel at implementing responsive design, 
														optimizing performance, and ensuring cross-browser compatibility
														</p>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="nav_button">
									<a href='asset/pdf/download.pdf' className='btn'><i className="fa fa-download"></i><span>Download CV</span></a>
								</div>
								<div className="mode">
									<div className="moon-sun" id="toggle-switch">
										<i className="fa fa-moon" id="moon"></i>
										<i className="fa fa-sun" id="sun"></i>
									</div>
								</div>
								<div className="nav_menu_btn">
									<i className="fa fa-bars" onClick={ ()=>myMenuFunction() }></i>
								</div>
							</div>
					</nav>
			</div>





	</div>
	);
};

export default Lud_web_index;