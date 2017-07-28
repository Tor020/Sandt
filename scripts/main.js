document.body.addEventListener('click', function (e) {
  
    let atarget = e.target;
    console.log(atarget);
    });

    let ms = document.querySelector('.mystuff');
    let b = document.body;
    ///////////////////
    let dMaek = document.createElement('div');
    let textnm = document.createTextNode('Maeked');
    ///////////////////
    dMaek.appendChild(textnm);
    dMaek.className = 'brewn';
    ///////////////////
    // ms.appendChild(dMaek);
    // ms.appendChild(dMaek);
    // ms.appendChild(dMaek);

///////////////////
let canvas = document.getElementById('c');


let can = {

  clean:function (){
    c.clearRect(0,0,canvas.width,canvas.height);
},
   ytho:function(idk){
  return Math.floor((Math.random() * idk) + 1);

},
  mouse:function(e){
    document.addEventListener('mousemove', 
    function (e) {
    let mx = e.clientX;
    let my = e.clientY;
      return;
     });
  },
  draw: function () {
    let canvas = document.getElementById('c');
      c = canvas.getContext('2d');
      w = canvas.width = window.innerWidth;-25;
      h = canvas.height = window.innerHeight-25;
      const centX = w / 2;
      const centY = h / 2;
      let posX = can.ytho(1820);
      let posY = can.ytho(1000);

     document.addEventListener('mousemove', function (e) {
       mouseX  = e.clientX;
       mouseY = e.clientY;
     });

    setInterval(function () {

        let check = can.ytho(10);
        (check <5) ? posX++ : posX--;
        (check <5) ? posY++ : posY--;

    
      can.clean(); 
      c.fillStyle = 'white';
      ///

      let circ1 = mouseX-50;
      let circ2 = mouseX+50;
      let circ3 = mouseY+50;
      let circ4 = mouseY-50;
      c.beginPath();
      c.arc(circ1, mouseY, 6, 0, Math.PI * 2, true);
      c.fill();
      ///
      c.beginPath();
      c.arc(circ2, mouseY, 6, 0, Math.PI * 2, true);
      c.fill();
      ///
      c.beginPath();
      c.arc(mouseX, circ3, 6, 0, Math.PI * 2, true);
      c.fill();
      ///
      c.beginPath();
      c.arc(mouseX, circ4, 6, 0, Math.PI * 2, true);
      c.fill();

      for(circ1)
    //  posX += velocX;
    //  posY += velocY;

      }
    , 1000/60)
  }
};

can.draw();

