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


function Person(){
  this.name="Nicholas2";
  this.sayName2=function(){
    alert(this.name);
  }
}

Object.defineProperty(Person.prototype,"name",{
  enumerable:false
});

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = "Greg";
Object.defineProperty(person1,"sayName2",{
  enumerable:false
});
// alert(person1.name);    //"Greg"——来自实例
// alert(person2.hasOwnProperty("name")); //true
// alert(person2.name);     //"Nicholas"——来自原型

// delete person1.name;
// alert(person1.name);     //"Nicholas"——来自原型

// for(var prop in person1){
//   alert(prop);
// }

var o = {
  toString : function(){
      return "My Object";
  }
};

for (var prop2 in o){
  if (prop2 == "toString"){
      alert("Found toString");    //在 IE 中不会显示
  }
}

var keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys);    //"constructor,name,age,job,sayName"
alert(person1.constructor == Person);