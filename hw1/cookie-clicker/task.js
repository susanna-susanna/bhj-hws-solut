let cookieCount = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

function changeSize() {
  cookieCount.textContent++;
  if (cookieCount.textContent % 2 == 1) {  
     cookie.width = 250;
   } else {
     cookie.width = 200;
   }  
}
 cookie.onclick = changeSize;