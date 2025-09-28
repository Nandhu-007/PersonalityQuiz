var villain_score = 0;
var hero_score = 0;
var qcount = 0;


var restart=document.getElementById("restart");

var result=document.getElementById("result");
var rp=document.getElementById("rp");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");



q1a1.addEventListener("click",  () => hero("q1a1", "q1a2"));
q1a2.addEventListener("click", () => villain("q1a1", "q1a2"));
q2a1.addEventListener("click", () => hero("q2a1", "q2a2"));
q2a2.addEventListener("click", () => villain("q2a2", "q2a1"));
q3a1.addEventListener("click", () => hero("q3a1", "q3a2"));
q3a2.addEventListener("click", () => villain("q3a2", "q3a1"));
q4a1.addEventListener("click", () => hero("q4a1", "q4a2"));
q4a2.addEventListener("click", () => villain("q4a2", "q4a1"));
q5a1.addEventListener("click", () => hero("q5a1", "q5a2"));
q5a2.addEventListener("click", () => villain("q5a2", "q5a1"));
restart.addEventListener("click", reset)



function villain(q1,q2) {
  document.getElementById(q1).disabled = true;
  document.getElementById(q2).disabled = true;
  document.getElementById(q1).style.backgroundColor = "blue";  
  villain_score += 1;
  qcount += 1;
  console.log("Question count = " + qcount + " Villain Score = " + villain_score);
  if(qcount==5) {
    console.log("The Quiz is done!!");
    updateResult()
  }
}

function hero(q1,q2) {
  document.getElementById(q1).disabled = true;
  document.getElementById(q2).disabled = true;
 document.getElementById(q1).style.backgroundColor = "blue"; 
  hero_score += 1;
  qcount += 1;
  console.log("Question count = " + qcount + " Hero Score = " + hero_score);
  if(qcount==5) {
    console.log("The Quiz is done!!");
    updateResult()
  }
}

function updateResult(){
  if(villain_score>hero_score){
    result.innerHTML="You're the Villain";
    rp.innerHTML="You're not evil — you're evolved. Sharp, misunderstood, and done playing by broken rules. Whether you're pulling a Light Yagami or a Dabi, one thing’s for sure: you’re unforgettable. Just try not to go full Madara… unless that’s the goal.";
    console.log("You're the Villain");
  }
  else if (hero_score>villain_score){
    result.innerHTML=" You're the Hero";
    rp.innerHTML="You have got heart, grit, and maybe  even a killer backstory — but you choose kindness. Whether you’re the Deku, the Tanjiro, or the Naruto of your world, you fight for others, even when it’s hard. Keep that spirit alive — you’re who the world needs.";
    console.log("You're the Hero");
  }
}

function reset(){
  result.innerHTML="Wonder if you are a villain or hero?";
  rp.innerHTML="Answer all the questions to find out right now!";
  villain_score=0;
  hero_score=0;
  qcount=0;
  for (let i = 1; i < 6; i++){
    for(let a=1; a < 3; a++){
    document.getElementById("q"+i+"a"+a).disabled = false;
      document.getElementById("q"+i+"a"+a).style.backgroundColor = "Red"; 

    }
  }
      
    console.log(villain_score+hero_score+qcount);
  
}


