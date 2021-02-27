import printMe from "./print.js";

var app = {
  template: `
    <div class="app">
      <p class='begin'>我是一个入口组件</p>
      <button @click="logShow">按钮</button>
    </div>
  `,
  methods: {
    logShow() {
      printMe();
    },
  },
};

export var num1 = 2; //作为一整个对象的key导出

// 声明再导出
var num2 = 3;
export { num2 };
export function add(x, y) {
  return console.log(x + y);
}
export default app;
