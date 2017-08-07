const canvas = document.getElementById('c');

let c = canvas.getContext('2d');
let w = canvas.width = window.innerWidth - 20;
let h = canvas.height = window.innerHeight - 20;


window.onload = function () {

  let circlesArr = [];

  for (let i = 0; i < 50; i++) {

    let iniX = Math.floor(Math.random() * (w - 92) + 60);
    let iniY = Math.floor(Math.random() * (h - 92) + 60);
    let iniVX = Math.ceil((Math.random() - 0.5) * 15);
    let iniVY = Math.ceil((Math.random() - 0.5) * 15);
    let radius = 15;
    let id = [i];
    circlesArr.push(new Circle(iniX, iniY, iniVX, iniVY, radius, id));
  }
console.log(circlesArr);
  
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, w, h);
    for (let i = 0; i < circlesArr.length ; i++){
      circlesArr[i].update();
    }
  }
  animate();
}

function Circle(x, y, vx, vy, radius, id, minSize, sizeLimit) {

  
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = randradi(25);
  this.id = id;
  this.sizeLimit = this.radius + 5;
  this.minSize = this.radius;
  this.color = colorArray[rand()];
  this.draw = function () {

    c.beginPath();
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);

    c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }
  //Gets the initial random position
      this.update = function () {


        //Velocity added to x and y
        this.x += this.vx;
        this.y += this.vy;

        //Walls
        this.y > h - this.radius || this.y < this.radius ? this.vy = -this.vy : this.vy;
        this.x > w - this.radius || this.x < this.radius ? this.vx = -this.vx : this.vx;

        //When the mouse is with 50 pixels of any circle, it will execute
    if (
      mouse.x - this.x < 100 &&
      mouse.x - this.x > -100 &&
      mouse.y - this.y < 100 &&
      mouse.y - this.y > -100 &&
      this.radius < this.sizeLimit)
    {
      this.radius ++;
    } else if (this.radius -10 > this.sizeLimit) {
      console.log('wat')
      this.radius --;
    }

    this.draw();
  }
}

let mouse = {
  x: undefined,
  y: undefined
}

var colorArray = [
  '#62C370',
  '#9AD1D4',
  '#C2F9BB',
  '#D64550',
  '#20063B', 
];
window.addEventListener('mousemove', function (e) 
  {
    mouse.x = event.x
    mouse.y = event.y
  
  });

  function rand() {
    return Math.floor(Math.random() * colorArray.length); 
  }
  function randradi(a) {
    return Math.floor((Math.random() * a) + 10); 
  }
