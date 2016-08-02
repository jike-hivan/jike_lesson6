// 打开窗口读取localStorage
var myBody = document.getElementById('body');
var theme = localStorage.theme;
myBody.className = theme;
console.log(myBody.className);


// 定义函数
function colorClick(color) {
  var val = color.childNodes[0].title;
  myBody.className = val;
  localStorage.theme=val;
  console.log(localStorage.theme);
}



