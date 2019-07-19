import React, { useState, useEffect } from 'react';
import './App.scss';
import './rem.js';

function App() {
  const [bg] = useState(2);
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [week, setWeek] = useState(1);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(1);

  useEffect(() => {
    setTimeout(()=>{
      let time = new Date();
      setYear(time.getFullYear());
      setMonth(time.getMonth()+1);
      setDay(time.getDate());
      setWeek(time.getDay());
      setHour(time.getHours());
      setMinute(time.getMinutes());
      setSecond(time.getSeconds());
    },1000)
    // setTimeout(() => {
    //   bg === 10 ? setBg(1): setBg(bg+1)
    // }, 30000)
  })
  var yearDay = new Date().getFullYear();
  var monthDay = new Date().getMonth()+1;

  function getDays(year, month){ //获取当月的天数
    month = parseInt(month,10);
    var d= new Date(year,month,0);
    return d.getDate()
  }
  // 数字大小写转换
  function numToBig(num) {
    var zh = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    var res = "";
    if (num <= 10) {
      res = zh[num];
    } else if (num < 20) {
      var bits = num % 10;
      res = zh[10] + zh[bits];
    } else if (num < 70) {
      bits = num % 10;
      var decade = parseInt(num / 10);
      if (bits === 0) {
          res = zh[decade] + zh[10];
      } else {
          res = zh[decade] + zh[10] + zh[bits];
      }
    }
    return res;
  }
  function array(length) {
    return Array.from({length}).map((v, k) => k).map( x => x + 1)
  }
  return (
    <div className="App" style={{
      backgroundImage: `url(${require(`./assets/${bg}.jpg`)})`,
      backgroundSize: 'cover',
    }}>
      <div className='box'>
        <div className='year item'>
          <span>{year}</span>
        </div>
        {array(12).map((item,index)=>{
          return (
            <div key={index} className={`month item ${index===(month-1)?"active":""}`} style={{transform: `rotate(${30*(month-1)-index*30}deg)`}}>
              {`${numToBig(item)}月`}
            </div>
          )
        })}

        {array(getDays(yearDay, monthDay)).map((item,index)=>{
          return (
            <div key={index} className={`day item ${index===(day-1)?"active":""}`} style={{transform: `rotate(${(360/getDays(yearDay, monthDay))*(day-1)-index*(360/getDays(yearDay, monthDay))}deg)`}}>
              {`${numToBig(item)}日`}
            </div>
          )
        })}

        {array(7).map((item,index)=>{
          return (
            <div key={index} 
            className={`week item ${index===(week-1)?"active":""}`} 
            style={{transform: `rotate(${(360/7)*(week-1)-index*(360/7)}deg)`}}>
              {`星期${numToBig(item)}`}
            </div>
          )
        })}

        {array(24).map((item,index)=>{
          return (
            <div key={index} 
            className={`hour item ${index===(hour-1)?"active":""}`} 
            style={{transform: `rotate(${(360/24)*(hour-1)-index*(360/24)}deg)`}}>
              {`${numToBig(item)}点`}
            </div>
          )
        })}
        {array(60).map((item,index)=>{
          return (
            <div key={index} 
            className={`minute item ${index===(minute-1)?"active":""}`} 
            style={{transform: `rotate(${(360/60)*(minute-1)-index*(360/60)}deg)`}}>
              {`${numToBig(item)}分`}
            </div>
          )
        })}
        {array(60).map((item,index)=>{
          return (
            <div key={index} 
            className={`second item ${index===(second-1)?"active":""}`} 
            style={{transform: `rotate(${(360/60)*(second-1)-index*(360/60)}deg)`}}>
              {`${numToBig(item)}秒`}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
