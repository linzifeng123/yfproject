$('.logo').click(function(){
     window.location.href="index.html";
   });




/*注册信息判断*/
reg_uname.onblur = function(){
    if(this.validity.valueMissing){
        //自定义错误消息，优先级高于浏览器预定义的错误消息
        var msg = "用户名不能为空";
        this.setCustomValidity(msg);
    }else {
        //用户输入有效了，必须清除自定义错误，否则仍然无法提交
        this.setCustomValidity('');
    }
}
reg_upwd.onblur = function(){
    if(this.validity.valueMissing){
        //自定义错误消息，优先级高于浏览器预定义的错误消息
        var msg = "用户密码不能为空";
        this.setCustomValidity(msg);
    }else if(this.validity.tooShort){
        var msg = "用户密码不能少于6位";
        this.setCustomValidity(msg);
    }else {
        //用户输入有效了，必须清除自定义错误，否则仍然无法提交
        this.setCustomValidity('');
    }
}
email.onblur = function(){
    if(this.validity.valueMissing){
        //自定义错误消息，优先级高于浏览器预定义的错误消息
        var msg = "用户邮箱不能为空";
        this.setCustomValidity(msg);
    }else {
        //用户输入有效了，必须清除自定义错误，否则仍然无法提交
        this.setCustomValidity('');
    }
}
phonebile.onblur = function(){
    if(this.validity.valueMissing){
        //自定义错误消息，优先级高于浏览器预定义的错误消息
        var msg = "用户联系方式不能为空";
        this.setCustomValidity(msg);
    }else {
        //用户输入有效了，必须清除自定义错误，否则仍然无法提交
        this.setCustomValidity('');
    }
}
/*登录信息判断*/
log_uname.onblur = function(){
    if(this.validity.valueMissing){
        //自定义错误消息，优先级高于浏览器预定义的错误消息
        var msg = "用户名不能为空";
        this.setCustomValidity(msg);
    }else {
        //用户输入有效了，必须清除自定义错误，否则仍然无法提交
        this.setCustomValidity('');

    }
}
log_upwd.onblur = function(){
    if(this.validity.valueMissing){
        //自定义错误消息，优先级高于浏览器预定义的错误消息
        var msg = "密码不能为空";
        this.setCustomValidity(msg);
    }else {
        //用户输入有效了，必须清除自定义错误，否则仍然无法提交
        this.setCustomValidity('');
    }
}

//页面滚动高度时显示搜索栏跟滚
$(document).scroll(function(e){
    var scrollTop=$(e.target).scrollTop();
    if(scrollTop>20) {
        $('#top_main').addClass('topmain');
        $('#logo').addClass('logotop');
        $('#rtop').css('position','fixed');
        $('#rtop').css('display','block');
    }
    else{
        $('#top_main').removeClass('topmain');
        $('#logo').removeClass('logotop');
        $('#rtop').css('position','absolute');
        $('#rtop').css('display','none');

    }

});
var colorstate=[
    {colorlist:560},//1
    {colorlist:820},//2
    {colorlist:1280},//3
    {colorlist:1530},//4
    {colorlist:1980},//5
    {colorlist:2250},//6
    {colorlist:2500},//7
    {colorlist:2750},//8
    {colorlist:2760},//9
    {colorlist:0}//9
]
$('.menuclick').click(function(){
    let index = $(this).index();
    let menuscroll = colorstate[index].colorlist;
    $('html,body').animate({scrollTop:menuscroll},'slow');
    menuState(menuscroll);

    console.log("index",index);
})
$(document).scroll(function(e){
    let scrollTop=$(e.target).scrollTop();
    menuState(scrollTop);
});

//根据高度滚动改变状态
function menuState(scrollTop){
    if(scrollTop<450){
        $("#main_menu").css("display","none");
    }
    if(scrollTop>450){
        $("#main_menu").css("display","block");
        main_menu.style.position="fixed";
        top_main.style.zIndex="8";
    }
    if(scrollTop>450&&scrollTop<731){//第一层
        $("#main_menu>li:eq(0)").css({"background":"#FE4200","color":"white"});
        $("#main_menu>li:eq(1)").css({"background":"","color":"#FF00BC"});
    }
    if(scrollTop>731&&scrollTop<1280){//第二层
        $("#main_menu>li:eq(0)").css({"background":"","color":"#FE4200"});
        $("#main_menu>li:eq(1)").css({"background":"#FF00BC","color":"white"});
        $("#main_menu>li:eq(2)").css({"background":"","color":"#8E00FF"});
    }
    if(scrollTop>1270&&scrollTop<1401){//第三层
        $("#main_menu>li:eq(1)").css({"background":"","color":"#FF00BC"});
        $("#main_menu>li:eq(2)").css({"background":"#8E00FF","color":"white"});
        $("#main_menu>li:eq(3)").css({"background":"","color":"#000AFF"});
    }
    if(scrollTop>1401&&scrollTop<1701){//第四层
        $("#main_menu>li:eq(2)").css({"background":"","color":"#8E00FF"});
        $("#main_menu>li:eq(3)").css({"background":"#000AFF","color":"white"});
        $("#main_menu>li:eq(4)").css({"background":"","color":"#0095FF"});
    }
    if(scrollTop>1701&&scrollTop<1990){//第五层
        $("#main_menu>li:eq(3)").css({"background":"","color":"#000AFF"});
        $("#main_menu>li:eq(4)").css({"background":"#0095FF","color":"white"});
        $("#main_menu>li:eq(5)").css({"background":"","color":"#00FFA7"});
    }
    if(scrollTop>1982&&scrollTop<2260){//第六层
        $("#main_menu>li:eq(4)").css({"background":"","color":"#0095FF"});
        $("#main_menu>li:eq(5)").css({"background":"#00FFA7","color":"white"});
        $("#main_menu>li:eq(6)").css({"background":"","color":"#00FF12"});
    }
    if(scrollTop>2264&&scrollTop<2521){//第七层
        $("#main_menu>li:eq(5)").css({"background":"","color":"#00FFA7"});
        $("#main_menu>li:eq(6)").css({"background":"#00FF12","color":"white"});
        $("#main_menu>li:eq(7)").css({"background":"","color":"#DDC69C"});
    }
    if(scrollTop>2745&&scrollTop<2754){//第八层
        $("#main_menu>li:eq(6)").css({"background":"","color":"#00FF12"});
        $("#main_menu>li:eq(7)").css({"background":"#DDC69C","color":"white"});
        $("#main_menu>li:eq(8)").css({"background":"","color":"#FF6F00"});
    }
    if(scrollTop>2759){//第九层
        $("#main_menu>li:eq(7)").css({"background":"","color":"#DDC69C"});
        $("#main_menu>li:eq(8)").css({"background":"#FF6F00","color":"white"});
    }
    if(scrollTop>2821){//恢复第九层
        $("#main_menu>li:eq(8)").css({"background":"","color":"#FF6F00"});
        /*$("#main_menu").css("display","none");*/
    }
}

//搜索获得焦点触发事件和失去焦点触发事件
$("#txtName").focus(function(){
    $("#txtName").val("");
});
$("#txtName").blur(function(){
    $("#txtName").val("苹果手机");
});

$('#cate_box li').mouseover(function(){
    sub_cate_box.style.display="block";
})

//索引Li
var uobj=document.getElementById("cate_box");
var uli=uobj.getElementsByTagName("li");
for (var i = 0; i <uli.length; i++) {
    var liindex=uli[i].indexs;
    uli[i].indexs = i;
    uli[i].onmouseover=function(){
        sub_cate_box.style.display="block";
        if(this.indexs==0){//手机 数码
            sub_cate_box.innerHTML="<a href='phones.html'>手机</a> 数码";
        }
        if(this.indexs==1){//电脑配件
            sub_cate_box.innerHTML="电脑配件";
        }
        if(this.indexs==2){//家用电器
            sub_cate_box.innerHTML="<div><a href='javascript:;'>大家电"+"</a>"+
            "<p>"+
            "<a href='#'>家电爆品</a>"+
            "<a href='#'>平板电视</a>"+
            "<a href='#'>空调</a>"+
            "<a href='#'>冰箱</a>"+
            "<a href='#'>洗衣机</a>"+
            "<a href='#'>家庭影院</a>"+
            "<a href='#'>DVD</a>"+
            "<a href='#'>迷你音响</a>"+
            "<a href='#'>烟机/灶具</a>"+
            "<a href='#'>热水器</a>"+
            "<a href='#'>消毒柜/洗碗机</a>"+
            "<a href='#'>酒柜/冷柜</a>"+
            "<a href='#'>家电配件</a>"+
            "</p>"+
            "</div>"+
            "<div>"+
            "<a href='#'>生活电器</a>"+
            "<p><a href='#'>取暖电器</a>"+
            "<a href='#'>净化器加湿器</a>"+
            "<a href='#'>扫地机器人</a>"+
            "<a href='#'>吸尘器</a></p>"+
            "</div>"+
            "<div>"+
            "<a href='#'>厨房电器</a>"+
            "<p>"+
            "<a href='#'>电压力锅</a>"+
            "<a href='#'>电饭煲</a>"+
            "<a href='#'>豆浆机</a></p>"+
            "</div>"+
            "<div>"+
            "<a href='#'>五金家电</a>"+
            "<p>"+
            "<a href='#'>电动工具</a>"+
            "<a href='#'>手动工具</a>"+
            "<a href='#'>仪器仪表</a>"+
            "<a href='#'>浴霸/排气扇</a>"+
            "<a href='#'>灯具</a>"+
            "<a href='#'>洁身器</a>"+
            "<a href='#'>LED灯</a>"+
            "<a href='#'>水槽</a>"+
            "<a href='#'>淋浴花洒</a>"+
            "<a href='#'>厨卫五金</a>"+
            "<a href='#'>家具五金</a>"+
            "<a href='#'>门铃</a>"+
            "<a href='#'>电气开关</a>"+
            "<a href='#'>插座</a>"+
            "<a href='#'>电工电料</a>"+
            "<a href='#'>监控安防</a>"+
            "<a href='http://www.baidu.com'>电线/线缆</a></p>"+
            "</div>";
        }
        if(this.indexs==3){//家居 家具 家装
            sub_cate_box.innerHTML="家居 家具 家装";
        }
        if(this.indexs==4){//男装 女装 内衣
            sub_cate_box.innerHTML="男装 女装 内衣";
        }
        if(this.indexs==5){//母婴 玩具 童装
            sub_cate_box.innerHTML="母婴 玩具 童装";
        }
        if(this.indexs==6){//户外 健身 汽车
            sub_cate_box.innerHTML="户外 健身 汽车";
        }
        if(this.indexs==7){//食品 酒类 特产
            sub_cate_box.innerHTML="食品 酒类 特产";
        }
        if(this.indexs==8){//医药 保健品
            sub_cate_box.innerHTML="医药 保健品";
        }
        if(this.indexs==9){//理财 保险
            sub_cate_box.innerHTML="理财 保险";
        }
        if(this.indexs==10){//机票 酒店 旅行
            sub_cate_box.innerHTML="机票 酒店 旅行";
        }
    }
}
$('.bannerul').mouseleave(function() {
    sub_cate_box.style.display = "none";
});

closed.onclick=function(){
    sub_cate_box.style.display="none";
}

window.onload = function(){
    var name = sessionStorage.getItem("uname");
    //console.log(name);
    if( name !=null){
        userLogin.innerHTML="<font style='color:red'>欢迎，</font>"+sessionStorage.getItem("uname")+"&nbsp;<font style='color:red'>回来！</font> <a onclick='btnCan()'>退出</a>";
        zhao.style.display="none";
        logModalDialog.style.display="none";
        registerModalDialog.style.display="none";
    }
}

/*点击登录弹出遮罩和登录框*/
p_loging.onclick=function(e){
    e.preventDefault();
    zhao.style.display="block";
    logModalDialog.style.display="block";
}
log_closebtn.onclick=function(e){
    e.preventDefault();
    zhao.style.display="none";
    logModalDialog.style.display="none";
    registerModalDialog.style.display="none";
}
/*点击注册弹出遮罩和注册框*/
free_register.onclick=function(e){
    e.preventDefault();
    zhao.style.display="block";
    registerModalDialog.style.display="block";
}
register_closebtn.onclick=function(e){
    e.preventDefault();
    zhao.style.display="none";
    logModalDialog.style.display="none";
    registerModalDialog.style.display="none";
}


//登录
btnLogin.onsubmit = function(){
    var unames = log_uname.value;
    var upwds = log_upwd.value;
    sessionStorage["uname"] = unames;
    sessionStorage["upwd"]=upwds;
    userLogin.innerHTML="<font style='color:red'>欢迎，</font>"+sessionStorage.getItem("uname")+"&nbsp;<font style='color:red'>回来！</font><a  onclick='btnCan()'> 退出</a>";
    zhao.style.display="none";
    logModalDialog.style.display="none";
    registerModalDialog.style.display="none";
}
function btnCan(){
    sessionStorage.removeItem("uname");
    sessionStorage.removeItem("upwd");
    location.href='index.html';
}
