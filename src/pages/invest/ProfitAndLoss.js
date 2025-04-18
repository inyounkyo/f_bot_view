import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/ProfitAndLoss.module.css'
import './Sample.css';


const ProfitAndLoss = () => {

	const [value, onChange] = useState(new Date());

	return (
			<div className='mainContainer'>
					
			  	<div className='searchContainer'>
							<div>
								TYPE:
								<select>
									<option value='ALL' defaultValue>ALL</option>
									<option value='BID'>BID</option>
									<option value='ASK'>ASK</option>
								</select>
								손익:
								<select>
									<option value='ALL' defaultValue>ALL</option>
									<option value='P'>Profit</option>
									<option value='L'>Loss</option>
								</select>
								<div>
									From:<input type='text' /> ~ To:<input type='text' />
								</div>
								<div>
									<button>검색</button>
								</div>
								{/* <div className="Sample__container"> 
									<Calendar onChange={onChange} value={value} />
								</div> */}
								
							</div>
					</div>
			------------------------------------------------------------------------
					<div className='body_container'>
						<div className='body_hearder'>
							NO | tiker | date | income_per | profit_krw | account_krw
						</div>
						<div className='body_content'>
							<div>1 | XRP | 2025-04-18 13:34:30 | 2.34 | 2,000 | 96,000</div>
							<div>2 | DOGE | 2025-04-18 13:34:30 | 2.34 | 2,000 | 96,000</div>
							<div>3 | BTC | 2025-04-18 13:34:30 | 2.34 | 2,000 | 96,000</div>
							<div>4 | LAYER | 2025-04-18 13:34:30 | 2.34 | 2,000 | 96,000</div>
						</div>
					</div>


			</div>
	);
};

export default ProfitAndLoss;


