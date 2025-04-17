import React, { useState, useRef, useEffect } from 'react';

const Z03 = () => {
  const [id, setId] = useState('');
  const [isIdErr, setIsIdErr] = useState(false);
  const [domains, setDomains] = useState(['naver.com', 'gmail.com', 'skyblue.com']);
  const [currDomain, setCurrDomain] = useState('naver.com');
  const [pwd, setPwd] = useState(null);
  const [count, setCount] = useState(0);
  const inputTxt = useRef(null);
  const pwdTxt = useRef(null);
  
  const fullEmail = `${id}@${currDomain}`;

  const domainElOption = domains.map((d) => {
    return <option key={d} value={d}>{d}</option>
  });
  
  let onChgEmailHandler = (e) => setId(e.target.value);
  let domainChgHandler = (e) => {
    setCurrDomain(e.target.value);
  }
  let addDomainHandler = (e) =>{
    console.log( inputTxt.current.value );
    setDomains([...domains, inputTxt.current.value]);
    console.log(domains);
  }
  console.log('ref', inputTxt );

  function loginHandler(e){
    setCount((c) => c+= 1 );
    console.log('inner', count);
    console.log(id.trim() == '');
    if(id.trim() == '') setIsIdErr(true);
    else setIsIdErr(false);
  }
  
  useEffect(() => {
    pwdTxt.current.focus();
  }, []);

  return (
      <div style={{textAlign: 'left'}} className='login-form'>
          <div>
              <label htmlFor='id'>아이디</label>
              <input type='text' id='id' value={id} onChange={onChgEmailHandler}/>
              <span>@</span>
              <select value={currDomain} onChange={domainChgHandler}>
                  {domainElOption}
                  <option value=''>직접입력</option>
              </select>
              { currDomain == '' && < input type='text' ref={inputTxt}/> }
              <button onClick={addDomainHandler}>도메인 추가</button>
              {isIdErr && <div style={{color:'red'}}>아이디를 입력해 주세요</div>}
          </div>
          <label htmlFor='password'>패스워드</label>
          <input type='password' id='password' ref={pwdTxt} onChange={ (e)=> setPwd(e.target.value) }/>
          <p>{fullEmail}</p>
          count: {count}
          <button onClick={loginHandler}>로그인</button>
      </div>
  );
};

export default Z03;