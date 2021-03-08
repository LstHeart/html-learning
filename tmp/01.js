const regex = /^((A)?)((\1?)pple)|(B)?((\2?)anana)|(Empty)/gm;
const str = `Angle
Apple
Banana
Best
Empty`;
let m;

while ((m = regex.exec(str)) !== null) {
  // 必须这样才能在零宽(位置)匹配时避免死循环
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }

  // 可以通过变量`m`获取结果
  m.forEach((match, groupIndex) => {
    console.log(`Found match, group ${groupIndex}: ${match}`);
  });
}
