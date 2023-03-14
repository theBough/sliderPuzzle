var enterBtn = document.getElementById("hmm");
var randomNumbers = []
title = document.getElementById("title")

function pickStartSpot(){
    var rndNum = Math.random()*16;
    rndNum = Math.floor(rndNum);
    var startBtn = document.getElementById(rndNum);
    startBtn.innerHTML = 0;
    startBtn.style.backgroundColor = "#03045E";  
  }
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
      first.onclick = thisClicked;
      var img = document.createElement("img")
      img.setAttribute("type","img");
      img.setAttribute("width","150px");
      img.setAttribute("height","150px")
      img.setAttribute("src" , "peter.jpg");
      
      document.getElementById(i).appendChild(img);
  }
  pickStartSpot()
}
var thisClicked = function(){
  checkAbove(this.id)
  checkBelow(this.id)
  checkLeft(this.id)
  checkRight(this.id)
  
}
function checkAbove(thisSquare){
  //thisSquare is going to hold the id of the button the 
  //user pressed.
  if(thisSquare >3){
    //This means we are in rows 2, 3 or 4.
    var squareAbove = document.getElementById(thisSquare - 4);
    var clickedSquare = document.getElementById(thisSquare);
    
    if(squareAbove.innerHTML == 0){
      //the square above is open
      console.log("My algo worked i am really happy.")
      var temp = clickedSquare.innerHTML;
      clickedSquare.innerHTML = "0";
      //this is the colour of the open spot.
      clickedSquare.style.backgroundColor = "#03045E"
      //this is the colour of all my buttons
      squareAbove.style.backgroundColor = "#00B4D8"
      squareAbove.innerHTML = temp;
    }
  }
}
function checkBelow(thisSquare){
  //thisSquare is going to hold the id of the button the 
  //user pressed.
  if(thisSquare < 12){
    //This means we are in rows 2, 3 or 4.
    var squareBelow = document.getElementById(Number(thisSquare) + 4);
    var clickedSquare = document.getElementById(thisSquare);
    
    if(squareBelow.innerHTML == 0){
      //the square above is open
      var temp = clickedSquare.innerHTML;
      clickedSquare.innerHTML = "0";
      //this is the colour of the open spot.
      clickedSquare.style.backgroundColor = "#03045E"
      //this is the colour of all my buttons
      squareBelow.style.backgroundColor = "#00B4D8"
      squareBelow.innerHTML = temp;
    }
  }
}
function checkLeft(thisSquare){
  //thisSquare is going to hold the id of the button the 
  //user pressed.
  if(thisSquare % 4 != 0){
    //This means we are in rows 2, 3 or 4.
    var squareLeft = document.getElementById(Number(thisSquare) -1);
    var clickedSquare = document.getElementById(thisSquare);
    
    if(squareLeft.innerHTML == 0){
      //the square above is open
      var temp = clickedSquare.innerHTML;
      clickedSquare.innerHTML = "0";
      //this is the colour of the open spot.
      clickedSquare.style.backgroundColor = "#03045E"
      //this is the colour of all my buttons
      squareLeft.style.backgroundColor = "#00B4D8"
      squareLeft.innerHTML = temp;
    }
  }
}
function checkRight(thisSquare){
  //thisSquare is going to hold the id of the button the 
  //user pressed.
  console.log(thisSquare)
  console.log((thisSquare+1) % 4 != 0)
  if((thisSquare+1) % 4 != 0){
    //This means we are in rows 2, 3 or 4.
    var squareRight = document.getElementById(Number(thisSquare) + 1);
    var clickedSquare = document.getElementById(thisSquare);
    
    if(squareRight.innerHTML == 0){
      //the square above is open
      var temp = clickedSquare.innerHTML;
      clickedSquare.innerHTML = "0";
      //this is the colour of the open spot.
      clickedSquare.style.backgroundColor = "#03045E"
      //this is the colour of all my buttons
      squareRight.style.backgroundColor = "#00B4D8"
      squareRight.innerHTML = temp;
    }
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



