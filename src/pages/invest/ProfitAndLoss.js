import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/ProfitAndLoss.module.css'
import './Sample.css';

function TableList({ tableListObj }){

	return (
		<>
		<table>
			<caption></caption>
			<colgroup>
				<col style={{backgroundColor: 'darkseagreen'}} />
			</colgroup>
				<thead>
					<tr style={{backgroundColor: 'wheat'}}>
						<th scope='col'>NO</th>
						<th scope='col'>tiker</th>
						<th scope='col'>side</th>
						<th scope='col'>date</th>
						<th scope='col'>income_per</th>
						<th scope='col'>profit_krw</th>
						<th scope='col'>account_krw</th>
					</tr>
				</thead>
				<tfoot>
					{
						tableListObj.map((item, inx) => 
							<tr key={item.no}>
								<td>{item.no}</td>
								<td>{item['list'].tiker}</td>
								<td>{item['list'].side}</td>
								<td>{item['list'].date}</td>
								<td>{item['list'].income_per}</td>
								<td>{item['list'].profit_krw}</td>
								<td>{item['list'].account_krw}</td>
							</tr>
						)
					}
				</tfoot>
			</table>
		</>
	);
}

const ProfitAndLoss = () => {
	const [date, setDate] = useState(new Date());
	const [tableListObj, setTableListObj] = useState([]); 
	
	const sideRef = useRef('ALL');
	const plRef = useRef('ALL');

	useEffect(()=>{
		setTableListObj([
			{
					"no" : 1,
					"list" : { "tiker":"XRP" , "side":"BID", "date":"2025-04-18 13:34:30", "income_per":"2.34", "profit_krw":"2,000", "account_krw":"96,000"}
			},
			{
					"no" : 2,
					"list" : { "tiker":"DOGE" , "side":"ASK", "date":"2025-04-18 13:34:30", "income_per":"2.34", "profit_krw":"2,000", "account_krw":"96,000"}
			}
		]);
	}, []);

	function searchAction(e){
		e.preventDefault();
		console.log( sideRef.current.value );
	}

	return (
			<div className='mainContainer'>
					
			  	<div className='searchContainer'>
						<form onSubmit={searchAction}>
							<div>
								SIDE-TYPE:
								<select ref={sideRef} name="productId">
									<option value='ALL' defaultValue>ALL</option>
									<option value='BID'>BID</option>
									<option value='ASK'>ASK</option>
								</select>
								손익:
								<select ref={plRef}>
									<option value='ALL' defaultValue>ALL</option>
									<option value='P'>Profit</option>
									<option value='L'>Loss</option>
								</select>
								
								{date.length > 0 && (
								<p className="text-center">
									{`FROM: ${dayjs(date[0]).format('YYYY-MM-DD')} `}
									&nbsp;-&nbsp;
									{`TO: ${dayjs(date[1]).format('YYYY-MM-DD')} `}
								</p>
									) }

								<div>
									<button type='submit'>검색</button>
								</div>
								<div className="Sample__container"> 
									<Calendar
										date={date}
										onChange={setDate} 
										selectRange={true}
										formatDay ={(locale, date) => dayjs(date).format('DD')}
									/>
								</div>
							</div>
							</form>
					</div>
			
					<div className='body_container'>
						<div className='body_content'>
									<TableList tableListObj={tableListObj}/>
						</div>
					</div>


			</div>
	);
};

export default ProfitAndLoss;


