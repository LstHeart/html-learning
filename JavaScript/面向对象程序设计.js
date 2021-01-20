// var person = {};
// Object.defineProperty(person, "name", {
//   configurable: false,
//   writable: false,
//   value: "Nicholas"
// });
// alert(person.name);
// // 抛出错误
// Object.defineProperty(person, "name", {
//   configurable: true,
//   writable: true
// });
// person.name="lstheart";
// alert(person.name);

// var book = {
//   _year: 2004,
//   edition: 1
// };

// Object.defineProperty(book, "year", {
//   get: function(){
//       return this._year;
//   },
//   set: function(newValue){

//       if (newValue > 2004) {
//           this._year = newValue;
//           this.edition += newValue - 2004;
//       }
//   }
// });

// // book.year = 2005;
// alert(book.edition);  //2
// alert(book.year);  //2

// var book = {};

// Object.defineProperties(book, {
//   _year: {
//     value: 2004,
//   },

//   edition: {
//     value: 1,
//   },

//   year: {
//     get: function () {
//       return this._year;
//     },

//     set: function (newValue) {
//       if (newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//       }
//     },
//   },
// });

// var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
// alert(descriptor.value); //2004
// alert(descriptor.configurable); //false

// 检测this的作用
// function gHello(){
//   var b=new Object();
//   b.name = "git2";

//   b.helloS= function(){
//     var o=new Object();
//     o.name="lstheart";
//     o.sayName=function(){
//       var name="git";
//       alert("name="+name);
//       alert("o-this.name="+this.name);
//     }
//     o.sayName();
//     alert("b-this.name="+this.name);
//   }
//   b.helloS();
// }
// gHello();

// function Person(name, age, job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//       alert(this.name);
//   };
// }

// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Greg", 27, "Doctor");
// var person3 = new function g(){
//   var hello="hello";
// };
// alert(person1 instanceof Person); //true
// alert(person1.sayName instanceof Object); //true
// alert(person1 instanceof Function); //false
// alert(person3 instanceof Function); //false
// alert(person3 instanceof Object); //true

// function Person(){
//   this.name="Nicholas2";
//   this.sayName2=function(){
//     alert(this.name);
//   }
// }

// Object.defineProperty(Person.prototype,"name",{
//   enumerable:false
// });

// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function(){
//     alert(this.name);
// };

// var person1 = new Person();
// var person2 = new Person();

// person1.name = "Greg";
// Object.defineProperty(person1,"sayName2",{
//   enumerable:false
// });
// alert(person1.name);    //"Greg"——来自实例
// alert(person2.hasOwnProperty("name")); //true
// alert(person2.name);     //"Nicholas"——来自原型

// delete person1.name;
// alert(person1.name);     //"Nicholas"——来自原型

// for(var prop in person1){
//   alert(prop);
// }

// var o = {
//   toString : function(){
//       return "My Object";
//   }
// };

// for (var prop2 in o){
//   if (prop2 == "toString"){
//       alert("Found toString");    //在 IE 中不会显示
//   }
// }

// var keys = Object.getOwnPropertyNames(Person.prototype);
// alert(keys);    //"constructor,name,age,job,sayName"
// alert(person1.constructor == Person);

// 原型链
// function SuperType(){
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function(){
//   return this.property;
// };

// function SubType(){
//   this.subproperty = false;
// }

// //继承了 SuperType
// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function (){
//   return this.subproperty;
// };

// var instance = new SubType();
// alert(instance.getSuperValue());      //true
// alert(instance.subproperty);
// alert(instance.hasOwnProperty(subproperty)); // 报错

// 原型链继承借助构造函数
// function SuperType(name) {
//   this.name = name;
// }

// function SubType() {
//   //继承了 SuperType，同时还传递了参数
//   SuperType.call(this, "Nicholas");

//   //实例属性
//   this.age = 29;
// }

// var instance = new SubType();
// alert(instance.name); //"Nicholas";
// alert(instance.age); //29
// alert(instance.hasOwnProperty(age)); //29

// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// var person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"],
// };

// var anotherPerson = object(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");

// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");

// alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"
// alert(anotherPerson.name); //"Shelby,Court,Van,Rob,Barbie"

// function createFunctions() {
//   var result = new Array();

//   for (var i = 0; i < 10; i++) {
//     result[i] = (function (num) {
//       return function () {
//         return num;
//       };
//     })(i);
//   }

//   return result;
// }

// var result = new Array();

//   for (var i = 0; i < 10; i++) {
//     result[i] = function(num){
//       return function(){
//         return num;
//       };
//     }(i);

//   }
//   // alert(result[i]());
//   // var aaa=function(a){
//   //     return a;
//   // }(1);
//    var aaa=function(a){
//       return a;
//   };

//   alert(aaa(1));
// var names = "The Windows";
// function getName(){
//   names = "The Window";

//   var object = {
//       names : "My Object",

//       getNameFunc : function(){
//         //  names="sss2";
//         // var that =this;
//           return function(){
//               // return this.names;
//               // names="sss1";
//               // var that =this;
//               return function(){
//                 return this.names;
//               };
//               // return that.names;
//           };
//       }
//   };

//   alert(object.getNameFunc()()());  //"The Window"（在非严格模式下）
// }
// // getName();

// function outputNumbers(count){
//   for (var i=0; i < count; i++){
//       alert(i);
//   }

//   var i;     //重新声明变量
//   alert(i);   //计数
// }

// function MyObject() {
//   //私有变量和私有函数
//   var privateVariable = 10;

//   function privateFunction() {
//     return false;
//   }

//   //特权方法
//   //能够在构造函数中定义特权方法，是因为特权方法作为闭包有权访问在构造函数中定义的所有变量和函数。
//   this.publicMethod = function () {
//     privateVariable++;
//     return privateFunction();
//   };
// }

// function Person(){
//   this.name="lstheart";
//   this.age=25;
// }
// var person1=new Person();

// (function () {
//   var name = "";

//   Person = function (value) {
//     name = value;
//   };

//   Person.prototype.getName = function () {
//     return name;
//   };

//   Person.prototype.setName = function (value) {
//     name = value;
//   };
// })();

// var person1 = new Person("Nicholas");
// // alert(person1.getName()); //"Nicholas"
// person1.setName("Greg");
// // alert(person1.getName()); //"Greg"

// var person2 = new Person("Michael");
// // alert(person1.getName()); //"Michael"
// // alert(person2.getName()); //"Michael"

// var People = function (usrName) {
//   this.usrName = usrName;
// };
// var people1 = new People("lstheart");

var singleton = (function () {
  //私有变量和私有函数
  var privateVariable = 10;

  function privateFunction() {
    return false;
  }
  //特权/公有方法和属性
  return {
    publicProperty: true,

    publicMethod: function () {
      privateVariable++;
      return privateFunction();
    },
  };
})();

var aaa=new Object();
aaa.ccc=20;
aaa.bbb="hello";
