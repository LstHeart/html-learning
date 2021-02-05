var originTitle=document.title;
document.title="DOM学习";

var myDiv2=document.getElementsByTagName("input");

document.write("<strong>" + (new Date()).toString() + "</strong>");
document.write("<br/>are you ok?");


// var div3 = document.createElement("div");

// div3.setUserData("name", "Nicholas", function(operation, key, value, src, dest){
//     if (operation == 1){
//         dest.setUserData(key, value, function(){});   }
//     });

// var newDiv = div.cloneNode(true);
// alert(newDiv.getUserData("name"));

// var myDiv = document.getElementById("myDiv");
// myDiv.style.backgroundColor = "red";
// myDiv.style.border = "solid";
// // alert(myDiv.style.cssText);
// for (var i=0, len=myDiv.style.length; i < len; i++){
//     alert(myDiv.style[i]); //或者 myDiv.style.item(i)
// }