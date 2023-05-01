import React from "react";
import {useState} from 'react';
import "./style.css";

export default function App() {
  const[showFinalResults,setShowFinalResults]=useState(false)
  const[score,setScore]=useState(0)
  const[currentQuestion,setCurrentQuestion]=useState(0)
  const question = [  
    { 
        text: "What is the capital of France?",   
     options: [
       {id:0,text:'newYork',isCorrect:false},
       {id:1,text:'Boston',isCorrect:false},
       {id:2,text:'paris',isCorrect:true},
       {id:3,text:'delhi',isCorrect:false},
     ]
  },
  {
    text: "What is the capital of Jharkhand?",   
    options: [
      {id:0,text:'Madras',isCorrect:false},
      {id:1,text:'WestBengal',isCorrect:false},
      {id:2,text:'Ranchi',isCorrect:true},
      {id:3,text:'delhi',isCorrect:false},
    ]
  },
  {
    text: "What is the capital of Bihar?",   
    options: [
      {id:0,text:'Madras',isCorrect:false},
      {id:1,text:'Tamilnadu',isCorrect:false},
      {id:2,text:'Patna',isCorrect:true},
      {id:3,text:'Bhagalpur',isCorrect:false},
    ],
  },
  {
    text: "What is the capital of Bihar?",   
    options: [
      {id:0,text:'Madras',isCorrect:false},
      {id:1,text:'Tamilnadu',isCorrect:false},
      {id:2,text:'Patna',isCorrect:true},
      {id:3,text:'Bhagalpur',isCorrect:false},
    ],
  },
  {
    text: "What is the smallest continent of the world?",   
    options: [
      {id:0,text:'Asia',isCorrect:false},
      {id:1,text:'NorthAmerica',isCorrect:false},
      {id:2,text:'Australia',isCorrect:true},
      {id:3,text:'Antarctica',isCorrect:false},
    ],
  }, 
  
];
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
