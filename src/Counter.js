import React, { useState, useEffect} from 'react';

export default function Counter(){
    const [num1, setNum1] = useState(Math.floor(Math.random() * 15) + 1)
    const [num2, setNum2] = useState(Math.floor(Math.random() * 15) + 1)
    const [num3, setNum3] = useState(Math.floor(Math.random() * 15) + 1)
    const [num4, setNum4] = useState(Math.floor(Math.random() * 15) + 1)
    const [score, setScore] = useState(0)
    const [seconds, setSeconds] = useState(10);
    const [timer, setTimer] = useState(false)
    const [over, setOver] = useState(false)


    useEffect(() => {
        if (seconds > 0 && timer) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } 
        else if (seconds === 0){
          setSeconds('Time Up!');
          setOver(prevOver => true);
        }
      }, [seconds, timer]);


    return(
        <div className="container">
            <h1>{seconds}</h1>
            <h2>Score: {score}</h2>
           <div className="counter">
               <div className="count" id="countS">{num1} + {num2} {`>=`} {num3} + {num4}
            </div>
            <div className="button_container">
                
                {!timer ? <button onClick={() => {setTimer(prevTimer => true)}} id="buttonS">Start</button> : null}
                {timer && !over ? <button onClick={() => check("false")} id="buttonF" >False</button> : null}
                {timer && !over ? <button onClick={() => check("true")} id="buttonT" >True</button> : null}
                {timer && over ? <button onClick={() => tryAgain()} id="tryAgain" >Try Again</button> : null}
                
                </div>
           </div>

        </div>
    )
    
    function tryAgain(){
        setSeconds(prevSeconds => 10)
        setOver(prevOver => false)
        setScore(prevScore => 0)
    }
    
    function check(token){
        if(token==="true"){
            if((num1 + num2) >= (num3 + num4)){
                setScore(prevScore => prevScore + 1)
            }
            else{
                setScore(prevScore => prevScore - 1)
            }
        }
        else{
            if((num1 + num2) >= (num3 + num4)){
                setScore(prevScore => prevScore - 1)
            }
            else{
                setScore(prevScore => prevScore + 1)
            }
        }
        setNum1(prevNum1 => Math.floor(Math.random() * 15) + 1)
        setNum2(prevNum2 => Math.floor(Math.random() * 15) + 1)
        setNum3(prevNum3 => Math.floor(Math.random() * 15) + 1)
        setNum4(prevNum4 => Math.floor(Math.random() * 15) + 1)
    }
    
    
}




