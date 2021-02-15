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

// 测试
// var map = document.getElementById("map");
// var game = new Game(map);
// game.start();
