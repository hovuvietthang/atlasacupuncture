var kinhphe = document.getElementById("duongkinh");
var ctx = kinhphe.getContext ("2d");
// Lấy tọa độ của thẻ circle đầu tiên
var x1 = document.getElementById("lu-01-001").getAttribute("cx");
var y1 = document.getElementById("lu-01-001").getAttribute("cy");

// Lấy tọa độ của thẻ circle thứ hai
var x2 = document.getElementById("lu-02-002").getAttribute("cx");
var y2 = document.getElementById("lu-02-002").getAttribute("cy");

// Thiết lập màu vẽ đường thẳng
ctx.strokeStyle = "green";

// Bắt đầu vẽ đường thẳng
ctx.beginPath();

// Di chuyển tới điểm đầu tiên
ctx.moveTo(x1, y1);

// Vẽ đường thẳng đến điểm thứ hai
ctx.lineTo(x2, y2);

// Kết thúc vẽ đường thẳng
ctx.stroke();