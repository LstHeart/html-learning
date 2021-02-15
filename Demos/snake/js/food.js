// 自调用函数,避免明明冲突
(function () {
  var position = "absolute";
  var elements = [];

  function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;

    this.width = options.width || 20;
    this.height = options.height || 20;

    this.color = options.color || "green";
  }

  // 渲染
  Food.prototype.render = function (page) {
    // 删除之前创建的食物
    remove();

    //   随机设置X和Y的值
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y =
      Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
    // 动态创建div
    var div = document.createElement("div");
    page.appendChild(div);
    elements.push(div);

    // 设置div样式
    div.style.position = position;
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
  };

  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      // 删除div
      elements[i].parentNode.removeChild(elements[i]);
      // 删除数组中的元素
      elements.splice(i, 1);
    }
  }
  // 让外部访问内部构造函数Food
  window.Food = Food;
})();

// 测试
// var map = document.getElementById("map");
// var food = new Food();
// food.render(map);
