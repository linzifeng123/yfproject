
var preview={
  LIWIDTH:62,//每个li的宽
  $forward:null,//保存前进按钮
  $backward:null,//保存后退按钮
  $ul:null,//保存ul
  $mImg:null,//保存中图片
  $smask:null,//保存superMask
  $mask:null,//保存mask
  $large:null,//保存大图div
  MAXTOP:0,//保存mask可用的最大top
  MAXLEFT:0,//保存mask可用的最大left
  moved:0,//保存已经左移的li个数
  OFFSET:20,//保存ul起始的偏移量
  init(){
    //找到id为preview下的h1下的ul保存在$ul中
    this.$ul=$("#preview>h1>ul");
    //找到$ul的前一个兄弟保存在$forward
    this.$forward=this.$ul.prev();
    //找到$forward的前一个兄弟保存在$backward
    this.$backward=this.$forward.prev();
    //为$forward绑定单击事件
    this.$forward.click(
      {dir:1},e=>this.aClick(e));
           //function(e){this.aClick(e)}.bind(this) 
    this.$backward.click(
      {dir:-1},e=>this.aClick(e));
    //查找id为mImg的元素保存在$mImg中
    this.$mImg=$("#mImg");
    //找到id为largeDiv的元素保存在$large中
    this.$large=$("#largeDiv");
    //为$ul添加鼠标进入事件委托，只允许li下的img响应事件
    this.$ul.on("mouseover","li>img",e=>{
      //获得当前img的src，保存在变量src中
      var src=$(e.target).attr("src");
      //查找src中最后一个.的位置i
      var i=src.lastIndexOf(".");
      //设置$mImg的src为:
        //src选取开头到i的子字符串,拼上-m,再拼上src选择i到结尾的剩余子字符串
      this.$mImg.attr(
        "src",src.slice(0,i)+"-m"+src.slice(i));
      /* this.$large.css("backgroundImage",
        `url(${src.slice(0,i)}-m${src.slice(i)})`
      );*/
    });
    //找到id为superMask的div保存在$smask
    this.$smask=$("#superMask");
    //找到id为mask的div保存在$mask
    this.$mask=$("#mask");
    //计算MAXTOP:$smask的高-$mask的高
    this.MAXTOP=
      parseFloat(this.$smask.css("height"))
      -parseFloat(this.$mask.css("height"));
    //计算MAXLEFT:$smask的宽-$mask的宽
    this.MAXLEFT=
      parseFloat(this.$smask.css("width"))
      -parseFloat(this.$mask.css("width"));
    //为$smask绑定hover
      //切换$mask的显示和隐藏
    this.$smask.hover(()=>{
      this.$mask.toggle();
      this.$large.toggle();
    });
    //为$smask绑定mousemove
    this.$smask.mousemove(e=>{
      //获得鼠标相对于父元素的坐标x,y
      var {offsetX:x,offsetY:y}=e;//解构
      var top=//计算top: y-$mask的高/2
        y-parseFloat(this.$mask.css("height"))/2;
      var left=//计算left: x-$mask的宽/2
        x-parseFloat(this.$mask.css("width"))/2;
      //如果top<0就改回0，否则如果>MAXTOP就改回MAXTOP,否则不变
      top=top<0?0:
          top>this.MAXTOP?this.MAXTOP:
          top;
      //如果left<0就改回0，否则如果>MAXLEFT就改回MAXLEFT，否则不变
      left=left<0?0:
           left>this.MAXLEFT?this.MAXLEFT:
           left;
      //设置$mask的top为top,left为left
      this.$mask.css({top:top,left:left});
      //修改$large的backgroundposition
      this.$large.css("backgroundPosition",
        `${-16/7*left}px ${-16/7*top}px`
      );
    })
  },
  aClick(e){//同时支持两个a的移动
    //如果当前a的class中没有_disabled
    if(!$(e.target).is("[class$='_disabled']")){
      this.moved+=e.data.dir;//将moved+1
      //设置$ul的left在500毫秒内变到-LIWIDTH*moved+OFFSET
      this.$ul.animate({
        left:-this.moved*this.LIWIDTH+this.OFFSET
      },500);
      this.checkA();//检查并修改a的状态
    }
  },
  checkA(){//检查两个a的状态
    //如果$ul的children的size-moved==5
    if(this.$ul.children().size()-this.moved==5){
      //修改forward的class为forward_disabled
      this.$forward.attr(
        "class","forward_disabled");
    }else if(this.moved==0){//否则, 如果moved==0
      //修改backward的class为backward_disabled
      this.$backward.attr(
        "class","backward_disabled");
    }else{//否则
      //修改forward的class为forward, 
      this.$forward.attr("class","forward");
      //修改backward的class为backward
      this.$backward.attr("class","backward");
    }
  }
}
preview.init();