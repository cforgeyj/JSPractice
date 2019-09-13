function change(){
  changeColor();
}
function changeColor(){
  var butt = document.getElementById("butt");
  butt.style.background = "red";
  butt.style.marginLeft = "90%";
  setTimeout(changeBack(), 3000);
}
function changeBack(){
  var butt = document.getElementById("butt");
  butt.style.background = "white";
  butt.style.marginLeft = "0%";
}
