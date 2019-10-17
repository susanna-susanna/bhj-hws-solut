const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById(`dead`);
const lost = document.getElementById(`lost`);

for (let i = 1; i <= 9; i++) {  
  getHole(i).onclick = function() {
    if (this.className.includes('hole_has-mole')) {
      lost.textContent++;
      if (lost.textContent == 5) {
        alert('You lose');
        dead.textContent = 0;
        lost.textContent = 0;
      }
      return;
       
    } else {
      dead.textContent++;
      if (dead.textContent == 10) {
        alert('You win');
        dead.textContent = 0;
        lost.textContent = 0;
      }
      return;
    }
  }
} 
