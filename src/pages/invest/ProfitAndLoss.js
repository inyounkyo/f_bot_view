import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import axios from 'axios';

import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/ProfitAndLoss.module.css'
import './Sample.css';
import './Pageing.css';

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
								<td>{item.tiker}</td>
								<td>{item.side}</td>
								<td>{item.kst_date}</td>
								<td>{item.income_per}</td>
								<td>{item.profit_krw}</td>
								<td>{item.account_krw}</td>
							</tr>
						)
					}
				</tfoot>
			</table>
		</>
	);
}

const Pageing = () => {
	return(
		<ul>
			<li><a href="#">Previous</a></li>
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">5</a></li>
			<li><a href="#">6</a></li>
			<li><a href="#">7</a></li>
			<li><a href="#">Next</a></li>
		</ul>
	);
}

const ProfitAndLoss = () => {
	const [date, setDate] = useState([]);
	const [tableListObj, setTableListObj] = useState([]); 
	const [sideRef, setSideRef] = useState('ALL');

	const plRef = useRef('ALL');

	useEffect(()=>{
		console.log(date);
		const url = 'http://localhost:9191/getProfitList';
		axios.get(url, 
			{ params: 
				{ from_kst_date: dayjs(date[0]).format('YYYY-MM-DD')
				, to_kst_date: dayjs(date[1]).format('YYYY-MM-DD')
				, sideRef: sideRef
			} 
		})
		.then(response =>  {
			console.log(response);
			setTableListObj(response.data);
		}).catch(error => {
			console.log(error);
		});
	}, [date, sideRef]);

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
								<select name="productId" onChange={ (e)=>setSideRef(e.target.value) }>
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

					<div style={{width:'300px'}}>
						<Pageing />
					</div>


			</div>
	);
};

export default ProfitAndLoss;