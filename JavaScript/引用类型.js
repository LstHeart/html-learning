var falseObject = new Boolean(false);
// alert("typeof falseObject :"+ (typeof falseObject));

var num = 10.0049999999999;
// alert(num.toFixed(2));
// alert(num+"二进制表示:"+num.toString(2));    //"1010"

var stringValue = "hello world";
var stringValue2 = "你好,世界";
// alert(stringValue.length);     //"11"
// alert(stringValue2.length);     //"5"


// var stringValue = "hello world";
// alert(stringValue.charAt(1));   //"e"


var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);          //"hello world"
alert(stringValue);      //"hello"