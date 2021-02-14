var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    awesome: false,
    isOK: true,
  },
});

var app2 = new Vue({
  el: "#app2",
  data: {
    items: [{ message: "Bar" }, { message: "Foo" }],
    awesome: false,
    isOK: true,
    counter: 0,
    name: 'Vue.js',
    message:"",
  },

  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
});
