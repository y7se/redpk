/*设计图为750 计算参数为100*/
    function changefontsize() {
      var _this = this;
      var html = document.getElementsByTagName('html')[0];
      var screenWitdh = _this.innerWidth > 750 ? 750 : _this.innerWidth;
      html.style.fontSize = screenWitdh * 100 / 750 + "px";
    }
    changefontsize();
    window.onresize = changefontsize;
    document.body.addEventListener('touchstart', function () {});