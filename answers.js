function check_ans1(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Thor Ragnarok" || answer.value == "thor ragnarok" || answer.value == "Thor ragnarok" || answer.value == "Thor: ragnarok" || answer.value == "Thor: Ragnarok" || answer.value == "Thor:Ragnarok" || answer.value == "Thor:ragnarok"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans2(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Wonder Woman" || answer.value == "wonder woman" || answer.value == "aquaman" || answer.value == "Aquaman" || answer.value == "Wonder woman" && answer2.value=="Aquaman" || answer2.value == "Wonder Woman" || answer2.value == "wonder woman" || answer2.value == "aquaman" || answer2.value == "Wonder woman"){
    right.style.display = "block";
    next.style.display = "inline";
    wrong.style.display = "none";
  }
  else{
    wrong.style.display = "block";
    right.style.display = "none";
    next.style.display = "none";
  }
}
function check_ans3(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Grievous" || answer.value == "grievous"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    right.style.display = "none";
    next.style.display = "none";
  }
}


function check_ans3(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Redbeard" || answer.value == "redbeard" || answer.value == "Red beard" || answer.value == "red beard"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
