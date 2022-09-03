window.addEventListener('load', function(){



    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

 
    // canvas1 settings
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';

    ctx.fillRect(50,50,100,100);

    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(300,300);
    ctx.stroke();


    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas.getContext('2d');

    // canvas2 settings
    ctx2.lineWidth = 10;
    ctx2.strokeStyle = 'red';
    ctx2.strokeRect(10, 10, 100, 100);

    



    /*
    ctx.fillRect(Math.random() * 444,Math.random() * 444,Math.random() * 444,Math.random() * 444);
    ctx.fillRect(50,50,100,400);
    */


});

