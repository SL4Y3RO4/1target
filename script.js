        let tg;
        let x; 
        let y; 
        let z;
        let s;
        let time;
        let sec;
        let score;
        let p = 0;
        let load;

   
        function tp_target() {

        tg = document.getElementById('hitbox2');

        x = (Math.random() * 530) + 1;
        y = (Math.random() * 530) + 1;
        z = (Math.random() * 530) + 1;

        tg.style.left = x + "px";
        tg.style.top = y + "px";
        tg.style.right = z + "px";

        let audio = new Audio();
        audio.src = "count.ogg";
        audio.play();

        }

        window.onload = function(){

        let tg2 = document.getElementById('hitbox2');

        let x2 = (Math.random() * 530) + 1;
        let y2 = (Math.random() * 530) + 1;
        let z2 = (Math.random() * 530) + 1;

        tg2.style.left = x2 + "px";
        tg2.style.top = y2 + "px";
        tg2.style.right = z2 + "px";

        }

        let sec1 = document.getElementById('sec');
        let score1 = document.getElementById('score');
        let btn = document.getElementById('btns');

        function start() {

        sec1.style.display = "none";
        score1.style.display = "none";
        btn.style.display = "none";
      
        s = 20;
        let time = setInterval(function() {

        sec = document.getElementById('sec').innerHTML = "seconds: " + s;
        s--;

        if(s == 0) {

        sec1.style.display = "block";
        score1.style.display = "block";
        sec1.innerHTML = "Game Over";
        clearInterval(time);
        target.remove();


        }

        }, 400);

        }

        function point() {

        score = document.getElementById('score').innerHTML = "p: " + p;
        p++;

        }

       function decay() {

       let decay = s++;
       let score1 = document.getElementById('sec').innerHTML = "seconds: " + decay;
       decay++;

        }

        let u = document.addEventListener('keydown', (event) => { 
            
        if(event.key == 'r') {

         let Score = score;
         let Sec = sec;


        sec1.style.display = "block";
        score1.style.display = "block";

        }

        });
