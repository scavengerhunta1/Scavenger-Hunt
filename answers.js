function check_ans1(){
  var right = document.querySelector("#right");
  var answer = document.querySelector("#answer");
  var wrong = document.querySelector("#wrong");
  var next = document.querySelector(".next");
  if (answer.value == "Famous Five" || answer.value == "famous five" || answer.value == "Famous five" || answer.value == "The famous five" || answer.value == "The Famous Five"){
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
  if (answer.value == "Edgar Allan" || answer.value == "Edgar allan" || answer.value == "edgar allan"){
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
  if (answer.value == "Redbeard" || answer.value == "redbeard" || answer.value == "Red beard" || answer.value == "red beard"){
    next.style.display = "inline";
    wrong.style.display = "none"
  }
  else{
    wrong.style.display = "block"
    next.style.display = "none";
  }
}
