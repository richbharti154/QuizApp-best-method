import React from "react";
import {useState} from 'react';
import "./style.css";
import question from './Data.js'

export default function App() {
  const[showFinalResults,setShowFinalResults]=useState(false)
  const[score,setScore]=useState(0)
  const[currentQuestion,setCurrentQuestion]=useState(0)


function handleOption(isCorrect){
  if(isCorrect){
    setScore(score+1)
    console.log(isCorrect)
  }
  if(currentQuestion+1<question.length){
    setCurrentQuestion(currentQuestion+1)
  }
  else{
    setShowFinalResults(true)
  }
  
}
function handleRestart(){
  setScore(0),
  setCurrentQuestion(0),
  setShowFinalResults(false)
}


  return (
    <div classNmae='App'>
      <h1 >Quiz App</h1>
     <h2>current score:{score}</h2>
     {showFinalResults ?  (
     <div className='final-results'>
         <h1>Final reults</h1>
         <h2>{score} out of {question.length} correct-({(score/question.length)*100}%)
         </h2>
           <button className='btn' onClick={()=>handleRestart()}>
            Start Game
           </button>
           </div>)

       :( <div className='question-card'>
       <h2>Question {currentQuestion+1} out of {question.length}</h2>
       <h3 className='question-text'> {question[currentQuestion].text}</h3>
       <ol className='ol'>
        {question[currentQuestion].options.map((ele)=>{return(
        <li onClick={()=>handleOption(ele.isCorrect)} key={ele.id}>{ele.text}</li>
        )})}
       </ol>
       </div>)
     }
    
     
    </div>
  );
}
