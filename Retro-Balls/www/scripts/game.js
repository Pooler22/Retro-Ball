var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var imgData = ctx.createImageData(screen.width, screen.height);
var i;
for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 0] = 102;
    imgData.data[i + 1] = 153;
    imgData.data[i + 2] = 255;
    imgData.data[i + 3] = 255;
}
ctx.putImageData(imgData, 0, 0);

ctx.strokeStyle = "#FFF";
ctx.stroke();
alert("Width of imgData is: " + imgData.width);
