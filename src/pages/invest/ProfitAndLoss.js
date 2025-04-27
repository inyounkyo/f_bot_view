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
							<tr key={item.DESC_NO}>
								<td>{item.DESC_NO}</td>
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

const Pageing = ({ pageObj, pageChange, currPg }) => {
	
	let totPage = (pageObj==undefined)?1:Number(pageObj.TOT_PAGE);
	console.log('currPg: %s, totPage: %s', currPg, totPage);
	let currNextStep = 0;

	if ((currPg+2) <= totPage) {currNextStep = currPg+2;}
	else currNextStep = totPage;

	

	return(
		<ul>
			{pageObj &&
				Array(currNextStep).fill(0).map((_, i) => 
					<li key={i}>
						<button onClick={()=>pageChange(i+1)}>{i+1}</button>
					</li>
				)
			}
		</ul>
	);
}

const ProfitAndLoss = () => {

	const [date, setDate] = useState([]);
	const [tableListObj, setTableListObj] = useState([]); 
	const [sideRef, setSideRef] = useState('ALL');

	const plRef = useRef('ALL');

	console.log( dayjs(date[0]).format('YYYY-MM-DD') );
	console.log( dayjs(date[1]).format('YYYY-MM-DD') );

	//console.log(date);
	/* paging vars
	*/
	// 현재 선택된 페이지 번호	
	const [currPg, setCurrPg] = useState("1");
	

	// 총 로우 수
	let totalRow = 0;
	// 페이지 당 ROW
	const PAGE_ROW_GB = 3;
	// 페이지 당 페이징<가변>
	let PAGE_PAGEING_GB = 3;
	// 총 페이지 수
	let totalPg = null;
	// 시작 페이지 번호
	let startPgIdx = null;

	useEffect(()=>{
		//console.log(date);
		const url = 'http://localhost:9191/getProfitList';
		const pgUrl = 'http://localhost:9191/getPageing';

		axios.get(pgUrl, 
			{ params: 
				{ from_kst_date: dayjs(date[0]).format('YYYY-MM-DD')
				, to_kst_date: dayjs(date[1]).format('YYYY-MM-DD')
				, sideRef: sideRef
				, currPg: currPg
				, PAGE_ROW_GB: PAGE_ROW_GB
			} 
		})
		.then(response =>  {
			// console.log(response);
			setTableListObj(response.data);
		}).catch(error => {
			console.log(error);
		});
	}, [date, sideRef, currPg]);

	function pageChange_fn( pageNum ){
		console.log(pageNum);
		setCurrPg(pageNum);
	}
	
	function searchAction(e){
		e.preventDefault();
		console.log( sideRef.current.value );
	}

	function onChangeCalendar(){
		setCurrPg(1);
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
										//date={date}
										//onChange={onChangeCalendar} 
										onChange={setDate}
										//onClick={()=>setCurrPg(1)} 
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
						<Pageing pageObj={tableListObj[0]} pageChange={pageChange_fn} currPg={currPg}/>
					</div>


			</div>
	);
};

export default ProfitAndLoss;