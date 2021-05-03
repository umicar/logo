canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.rect(150,140,400,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="pink";
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Orange";
ctx.lineWidth=5;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidth=5;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth=5;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

function cleararea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }