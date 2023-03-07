var randomNumbers = []
title = document.getElementById("title")
function makeButtons(){
  title.innerHTML = "Give it a sec, we have to do some work first"
  fillArray();
  for(i =0 ; i< 16 ; i++){
      var btn = document.createElement("button");
      btn.setAttribute("type","button");
      btn.setAttribute("id" , i);
      theGrid.appendChild(btn);
      var first = document.getElementById(i);
      first.innerHTML = randomNumbers[i];   
  }
}
function fillArray(){
  while(randomNumbers.length < 16){
    var rndNum = Math.random()*16;
    rndNum = Math.ceil(rndNum);
    if(!randomNumbers.includes(rndNum)){
      randomNumbers.push(rndNum);
    }
  }//end loop
  console.log(randomNumbers)
}
