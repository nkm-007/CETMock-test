// import { myVariable } from './question.js';

// console.log(myVariable);
 // Output: Hello, World!
//  document.querySelector(".total-correct").innerHTML=myVariable;
//   const percent=(myVariable/180)*100;
//   document.querySelector(".percentage").innerHTML=percent.toFixed(2)+"%";
//   document.querySelector(".total-score").innerHTML=myVariable +"/"+ 180;

function getScore(){
    const score=localStorage.getItem("totalScore");
    return score ? parseInt(score) : 0;
}
const tScore=getScore();
console.log(tScore);

  document.querySelector(".total-correct").innerHTML=tScore;
  const percent=(tScore/180)*100;
  document.querySelector(".percentage").innerHTML=percent.toFixed(2)+"%";
  document.querySelector(".total-score").innerHTML=tScore +"/"+ 180;