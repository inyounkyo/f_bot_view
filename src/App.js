import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <br/>
        거래소 별
        <br/>
        티커 & 매수/매도 | 수익/손실( 총 매매해서 +-손익, 매매런닝시간) | 
        <br/>
        달력, 그래프 차트, 텍스트 행, 
        <br/>

      </header>
    </div>
  );
}

export default App;
