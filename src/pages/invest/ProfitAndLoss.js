import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/ProfitAndLoss.module.css'
import './Sample.css';


const ProfitAndLoss = () => {

	const [date, setDate] = useState(new Date());

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
								Calendar: Fri Apr 04 2025
								<div>
									<button>검색</button>
								</div>
								<div className="Sample__container"> 
									<Calendar
										date={date}
										onChange={setDate} 
										selectRange={true}/>
								</div>
								
								{date.length > 0 && (
								<p className="text-center">
									{date[0].toDateString()}
									&nbsp;-&nbsp;
									{date[1].toDateString()}
								</p>
									) }

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


