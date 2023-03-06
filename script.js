title = document.getElementById("title")
function makeButtons(){
  title.innerHTML = "Give it a sec, we have to do some work first"

  for(i =0 ; i< 15 ; i++){
      var btn = document.createElement("button");
      btn.setAttribute("type","button");
      btn.setAttribute("id" , i);
      theGrid.appendChild(btn);
      var first = document.getElementById(i);
      first.innerHTML = i;   
  }
 
  
}
