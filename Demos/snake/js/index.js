// tools

(function () {
    var Tools = {
      getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    };
    window.Tools = Tools;
  })();

  //food
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

  //snake
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
  // game
  (function () {
    var that; // 记录当前游戏对象
    function Game(Map) {
      // options=this.options || {};
      this.food = new Food();
      this.snake = new Snake();
      this.map = Map;
      that = this;
    }

    // 1.渲染到地图
    Game.prototype.start = function () {
      this.food.render(this.map);
      this.snake.render(this.map);

      // 测试move方法
      // this.snake.move();
      // this.snake.render(this.map);
      // this.snake.move();
      // this.snake.render(this.map);
      // this.snake.move();
      // this.snake.render(this.map);

      // 2.开始游戏逻辑
      // 2.1 让蛇移动起来
      runSnake();
      // 2.2 通过键盘控制蛇移动的方向
      bindKey();
      // 2.3 当蛇遇到食物做相应处理

      // 2.4 当蛇遇到边界,游戏结束
    };
    //私有函数
    function runSnake() {
      var timerId = setInterval(() => {
        //   让蛇走一格
        that.snake.move(that.food,that.map);
        that.snake.render(that.map);

        //获取蛇头的坐标
        var maxX = that.map.offsetWidth / that.snake.width;
        var maxY = that.map.offsetHeight / that.snake.height;
        var headX = that.snake.body[0].x;
        var headY = that.snake.body[0].y;
        // 接触边界,游戏结束
        if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
          clearInterval(timerId);
          alert("game over!");
        }
      }, 150);
    }

    function bindKey() {
      document.addEventListener(
        "keydown",
        function (event) {
          // console.log(event.keyCode);
          // 37-左;
          // 38-上;
          // 39-右;
          // 40-下;
          // 等值判断用switch好些
          switch (event.keyCode) {
            case 37:
              that.snake.direction = "left";
              break;
            case 38:
              that.snake.direction = "top";
              break;
            case 39:
              that.snake.direction = "right";
              break;
            case 40:
              that.snake.direction = "bottom";
              break;
          }
        },
        false
      );
    }
    window.Game = Game;
  })();
// main
(function () {
    var map = document.getElementById("map");
    var game = new Game(map);
    game.start();
  })();
