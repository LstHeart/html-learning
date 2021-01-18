// var person=new Object();
// person.name="Lstheart";
// alert(person.name);

// var name="Lstheart";
// name.age=25;
// alert(name.age); // undefined

// function addTen(num) {
//   num += 10;
//   return num;
// }

// var count = 20;
// var result = addTen(count);
// alert(count); //20
// alert(result); //30=20+10;

// function setName(obj) {
//     obj.name = "Nicholas";
// }
// var person = new Object();
// setName(person);
// alert(person.name);    //"Nicholas"

// function setName(obj) {
//     obj.name = "Nicholas";
//     obj = new Object();
//     obj.name = "Greg"; // 局部对象obj:person
//     alert(obj.name); //  "Greg"
// }

// var person = new Object();
// setName(person);
// alert(person.name);    //"Nicholas"

// alert(person instanceof Object); //true
// alert(person instanceof Array); //false
// alert(person instanceof RegExp); //false
// alert(count instanceof Object); //false

// function buildUrl() {
//   var qs = "?debug=true";

//   with (location) {
//     var url = href + qs;
//   }

//   return url;
// }

// 引用类型
// var colors = ["red", "blue", "green"];
// var numbers = [1, 2, 3];
// colors[2] = "black";
// colors[3] = "brown";
// for (var color in colors) {
//   var i = 1 + parseInt(color);
//   alert("第" + i + "个颜色:" + colors[color]);
// }
// alert(colors.toString());
// alert(numbers.toString());
// alert(colors.valueOf());
// alert(numbers.valueOf());

// var demo={
//   hello : function(){
//     return "hello";
//   },
//   name:"Lstheart"

// };
// alert(demo.hello());

// var colors = new Array(); // 创建一个数组
// var count = colors.push("red", "green"); // 推入两项
// alert(count); //2

// count = colors.push("black"); // 推入另一项
// alert(count); //3

// var item = colors.pop(); // 取得最后一项
// alert(item); //"black"
// alert(colors.length); //2

// var values = [1, 2, 30, 4, 5];
// values.reverse();
// alert(values);

// var numbers = [1,2,3,4,5,4,4,3,2,1];
// alert(numbers.indexOf(4,5));

// var numbers = [1,2,3,4,5,4,3,2,1];
// var filterResult = numbers.filter(function(item, index, array){
//   return (item > 2);
// });
// alert(filterResult);

// var now = new Date();
// alert(now); //Mon Jan 18 2021 21:10:17 GMT+0800 (中国标准时间)

//取得开始时间
// var start = Date.now();

// var now = new Date();
// alert(now.toDateString());
// alert(now.toLocaleTimeString());
// alert(now.toLocaleDateString());
//取得停止时间
// var stop = Date.now();
// var result = stop - start;
// alert("result:"+result);

// alert(sum(10,10));
// function sum(num1, num2){
//     return num1 + num2;
// }

// var sum;
// alert(sum(10,10));
// alert(b);
// // var b="hello";
// var b;
// b="hello";
// alert(b);
// sum = function(num1, num2){
//     return num1 + num2;
// };

// window.color = "red";
// var o = { color: "blue" };

// function sayColor() {
//   alert(this.color);
// }

// sayColor(); //"red"

// o.sayColor = sayColor;
// o.sayColor(); //"blue"
function sum(num1, num2){
  return num1 + num2;
}

function callSum1(num1, num2){
  return sum.apply(this, arguments);        // 传入 arguments 对象
}

function callSum2(num1, num2){
  return sum.apply(this, [20,30]);    // 传入数组
}

alert(callSum1(10,10));   //20
alert(callSum2(10,10));   //50