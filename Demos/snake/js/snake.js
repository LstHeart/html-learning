// 自调用函数防止命名冲突
(function () {
  var position = "absolute";
  var elements = [];

  function Snake(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;

    this.direction = options.direction || "right";
    this.body = [
      { x: 3, y: 2, color: "red" },
      { x: 2, y: 2, color: "blue" },
      { x: 1, y: 2, color: "blue" },
    ];
  }

  Snake.prototype.render = function (Map) {
    // 删除之前的蛇
    remove();
    // 把每一个蛇节渲染到地图上
    for (var i = 0, len = this.body.length; i < len; i++) {
      var obj = this.body[i];
      var div = document.createElement("div");
      Map.appendChild(div);

      //记录当前蛇
      elements.push(div);

      div.style.position = position;
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.top = obj.y * this.height + "px";
      div.style.left = obj.x * this.width + "px";
      div.style.backgroundColor = obj.color;
    }
  };

  Snake.prototype.move = function (food, map) {
    // 控制蛇的身体移动
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    // 控制蛇头移动
    // 判断蛇移动的方向
    var head = this.body[0];
    switch (this.direction) {
      case "right":
        head.x += 1;
        break;
      case "left":
        head.x -= 1;
        break;
      case "top":
        head.y -= 1;
        break;
      case "bottom":
        head.y += 1;
        break;
    }
    // 判断蛇头是否和食物的坐标重合
    var headX = head.x * this.width;
    var headY = head.y * this.height;
    if (headX === food.x && headY === food.y) {
      // 让蛇增加一节,随机重新生成食物
      // 获取蛇的最后一节
      var last = this.body[this.body.length - 1];
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color,
      });
      food.render(map);
    }
  };

  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      //删除蛇节div
      elements[i].parentNode.removeChild(elements[i]);
      // 删除数组
      elements.splice(i, 1);
    }
  }

  window.Snake = Snake;
})();

// 测试
// var map = document.getElementById("map");
// var snake = new Snake();
// snake.render(map);
