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

$('.menuclick').click(function(){
    let index = $(this).index()+1;
    var mao = $("#scroll" + index); //获得锚点
    if (mao.length > 0) {//判断对象是否存在
        var pos = mao.offset().top;
        var poshigh = mao.height();
        $("html,body").animate({ scrollTop: pos-200 }, 2000);
    }


    let menuclick = $('.menuclick');
    for(let i=0;i<menuclick.length;i++){
        let sibcolor = $('.menuclick:eq('+i+')').attr('alt');
        $('.menuclick:eq('+i+')').css({"background":"","color":sibcolor});
    }

    let selfcolor = $(this).attr('alt');
    $(this).css({"background":selfcolor,"color":"#fff"});

});
$('#rptop').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 2000);
})

$(document).scroll(function(e){
    let scrollTop=$(e.target).scrollTop();
    let scroll1 = $("#scroll1").offset().top;
    console.log(scrollTop)
    if(scrollTop > scroll1-250) {
        $('#top_main').addClass('topmain');
        $('#logo').addClass('logotop');
        $('#main_menu').css('display','block');

    }
    else{
        $('#top_main').removeClass('topmain');
        $('#logo').removeClass('logotop');
        $('#main_menu').css('display','none');

    }
    menuState();
});
let selfcolor = $('.menuclick:eq(0)').attr('alt');
$('.menuclick:eq(0)').css({"background":selfcolor,"color":"#fff"});
//根据高度滚动改变状态
function menuState(){
    let menuclick = $('.menuclick');
    $('.prolist').mouseover(function () {
        for(let i=0;i<menuclick.length;i++){
            let sibcolor = $('.menuclick:eq('+i+')').attr('alt');
            $('.menuclick:eq('+i+')').css({"background":"","color":sibcolor});
        }
        let index = $(this).index()-2;
        console.log(index);
        let selfcolor = $('.menuclick:eq('+index+')').attr('alt');
        $('.menuclick:eq('+index+')').css({"background":selfcolor,"color":"#fff"});
    })
    $('.prolist').mouseenter(function () {
        for(let i=0;i<menuclick.length;i++){
            let sibcolor = $('.menuclick:eq('+i+')').attr('alt');
            $('.menuclick:eq('+i+')').css({"background":"","color":sibcolor});
        }
        let index = $(this).index()-2;
        let selfcolor = $('.menuclick:eq('+index+')').attr('alt');
        $('.menuclick:eq('+index+')').css({"background":selfcolor,"color":"#fff"});
    })

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
