var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var color="black";
var radius="";
var line_width="";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
     color=document.getElementById("color").value;
     line_width=document.getElementById("width").value;
     radius=document.getElementById("radius").value;
     mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_x=e.clientX-canvas.offsetLeft;
    var current_position_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        console.log("Current position of X AND Y coordinates=");
        console.log("X= " +current_position_x+", Y= "+current_position_y);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.arc=(current_position_x, current_position_y, radius,0,2*Math.PI);
        ctx.stroke();

    }
}
