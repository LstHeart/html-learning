// var EventUtil = {
//   addHandler: function (element, type, handler) {
//     if (element.addEventListener) {
//       element.addEventListener(type, handler, false);
//     } else if (element.attachEvent) {
//       element.attachEvent("on" + type, handler);
//     } else {
//       element["on" + type] = handler;
//     }
//   },
//   getEvent: function (event) {
//     return event ? event : window.event;
//   },

//   getTarget: function (event) {
//     return event.target || event.srcElement;
//   },

//   preventDefault: function (event) {
//     if (event.preventDefault) {
//       event.preventDefault();
//     } else {
//       event.returnValue = false;
//     }
//   },
//   removeHandler: function (element, type, handler) {
//     if (element.removeEventListener) {
//       element.removeEventListener(type, handler, false);
//     } else if (element.detachEvent) {
//       element.detachEvent("on" + type, handler);
//     } else {
//       element["on" + type] = null;
//     }
//   },
//   stopPropagation: function (event) {
//     if (event.stopPropagation) {
//       event.stopPropagation();
//     } else {
//       event.cancelBubble = true;
//     }
//   },
// }; // var isSupported = document.implementation.hasFeature("HTMLEvents", "2.0");

// var isSupportedUIEvent = document.implementation.hasFeature("UIEvent", "3.0");
// var isSupportedMouseEvent = document.implementation.hasFeature(
//   "MouseEvent",
//   "3.0"
// );
// console.log("isSupportedUIEvent:" + isSupportedUIEvent);
// console.log("isSupportedMouseEvent:" + isSupportedMouseEvent);
// var btn = document.getElementById("myBtn");
// var link = document.getElementById("myLink");
// // btn.onclick = function () {
// //   console.log(this.id);
// // };
// // btn.addEventListener("click", function () {
// //     console.log(this.id)
// // },false);
// // btn.addEventListener("click", function (event) {
// //     console.log(event)
// // },true);

// var handle = function (event) {
//   switch (event.type) {
//     case "click":
//       //   console.log("click");
//       console.log(event.eventPhase);
//       break;
//     case "mouseover":
//       event.target.style.backgroundColor = "red";
//       break;
//     case "mouseout":
//       event.target.style.backgroundColor = "";
//       break;
//   }
// };

// btn.onclick = handle;
// // document.body.onclick = function(){
// //     console.log("body clicked!")
// // };
// // document.addEventListener("click", function (){
// //     console.log("body clicked!")
// // },false)
// btn.onmouseover = handle;
// btn.onmouseout = handle;
// link.onclick = function (event) {
//   //   event.preventDefault();
// };

// var textBox = document.getElementById("myText");
// textBox.addEventListener(
//   "textInput",
//   function (event) {
//     console.log(event.data);
//     // console.log(event.inputMethod);
//   },
//   false
// );

// var myDiv = document.getElementById("myDiv");
// myDiv.addEventListener(
//   "contextmenu",
//   function (event) {
//     event.preventDefault();
//     var menu = document.getElementById("myMenu");
//     menu.style.left = event.clientX + "px";
//     menu.style.top = event.clientY + "px";
//     menu.style.visibility = "visible";
//   },
//   false
// );

// document.addEventListener(
//   "click",
//   function (event) {
//     document.getElementById("myMenu").style.visibility = "hidden";
//   },
//   false
// );

// window.addEventListener(
//   "beforeunload",
//   function (event) {
//     var message = "go to google";
//     return message;
//   },
//   false
// );

// //创建事件对象
// var events = document.createEvent("MouseEvents");
// //初始化事件对象
// events.initMouseEvent(
//   "click",
//   true,
//   true,
//   document.defaultView,
//   0,
//   0,
//   0,
//   0,
//   0,
//   false,
//   false,
//   false,
//   false,
//   0,
//   null
// );
// btn.dispatchEvent(events);

var myForm = document.getElementById("myForm");
// var filed=myForm.elements["mySubmit"];
// myForm.addEventListener(
//   "submit",
//   function (event) {
//     // alert("mySubmit:"+mySubmit);
//     var mySubmit= event.target.elements["mySubmit"]
//     mySubmit.type = "reset";
//   },
//   false
// );
window.addEventListener(
  "load",
  function (event) {
    document.forms[0].elements[0].focus();
  },
  false
);
// myForm.addEventListener("submit",function(event) {
//     var mySubmit=event.elements["mySubmit"];
//     mySubmit.disabled=true;
//     console.log(mySubmit);
// },false);
// mySubmit.disabled=true;
// setTimeout(function(){
//     alert("mySubmit.disabled_current:"+mySubmit.disabled);
// },3000)
//避免多次提交表单
// EventUtil.addHandler(myForm, "submit", function(event){
//     event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);

//     //取得提交按钮
//     var mySubmit = target.elements["mySubmit"];

//     //禁用它
//     mySubmit.disabled = true;
// });
// var mySubmit = document.getElementById("mySubmit");
// mySubmit.onSubmit=function(){
//     mySubmit.disabled = true;
// };