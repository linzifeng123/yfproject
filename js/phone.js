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

$(document).scroll(function(e){
    var scrollTop=$(e.target).scrollTop();
    if(scrollTop<450){
        $("#main_menu").css("display","none");
    }
    if(scrollTop>450){
        $("#main_menu").css("display","block");
        main_menu.style.position="fixed";
        top_main.style.zIndex="8";
    }
    if(scrollTop>450&&scrollTop<631){//第一层
        $("#main_menu>li:eq(0)").css({"background":"#FE4200","color":"white"});
        $("#main_menu>li:eq(1)").css({"background":"","color":"#FF00BC"});
    }
    if(scrollTop>631&&scrollTop<1021){//第二层
        $("#main_menu>li:eq(0)").css({"background":"","color":"#FE4200"});
        $("#main_menu>li:eq(1)").css({"background":"#FF00BC","color":"white"});
        $("#main_menu>li:eq(2)").css({"background":"","color":"#8E00FF"});
    }
    if(scrollTop>1000&&scrollTop<1201){//第三层
        $("#main_menu>li:eq(1)").css({"background":"","color":"#FF00BC"});
        $("#main_menu>li:eq(2)").css({"background":"#8E00FF","color":"white"});
        $("#main_menu>li:eq(3)").css({"background":"","color":"#000AFF"});
    }
    if(scrollTop>1201&&scrollTop<1701){//第四层
        $("#main_menu>li:eq(2)").css({"background":"","color":"#8E00FF"});
        $("#main_menu>li:eq(3)").css({"background":"#000AFF","color":"white"});
        $("#main_menu>li:eq(4)").css({"background":"","color":"#0095FF"});
    }
    if(scrollTop>1701&&scrollTop<1862){//第五层
        $("#main_menu>li:eq(3)").css({"background":"","color":"#000AFF"});
        $("#main_menu>li:eq(4)").css({"background":"#0095FF","color":"white"});
        $("#main_menu>li:eq(5)").css({"background":"","color":"#00FFA7"});
    }
    if(scrollTop>1862&&scrollTop<2105){//第六层
        $("#main_menu>li:eq(4)").css({"background":"","color":"#0095FF"});
        $("#main_menu>li:eq(5)").css({"background":"#00FFA7","color":"white"});
        $("#main_menu>li:eq(6)").css({"background":"","color":"#00FF12"});
    }
    if(scrollTop>2105&&scrollTop<2321){//第七层
        $("#main_menu>li:eq(5)").css({"background":"","color":"#00FFA7"});
        $("#main_menu>li:eq(6)").css({"background":"#00FF12","color":"white"});
        $("#main_menu>li:eq(7)").css({"background":"","color":"#DDC69C"});
    }
    if(scrollTop>2321&&scrollTop<2521){//第八层
        $("#main_menu>li:eq(6)").css({"background":"","color":"#00FF12"});
        $("#main_menu>li:eq(7)").css({"background":"#DDC69C","color":"white"});
        $("#main_menu>li:eq(8)").css({"background":"","color":"#FF6F00"});
    }
    if(scrollTop>2521&&scrollTop<2761){//第九层
        $("#main_menu>li:eq(7)").css({"background":"","color":"#DDC69C"});
        $("#main_menu>li:eq(8)").css({"background":"#FF6F00","color":"white"});
    }
    if(scrollTop>2801){//恢复第九层
        $("#main_menu>li:eq(8)").css({"background":"","color":"#FF6F00"});
        $("#main_menu").css("display","none");
    }
});
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
        if(this.indexs==0){//热门推荐
            sub_cate_box.innerHTML=`<b>热点关注</b><br>
                                    <a href="#">OPPO</a>&nbsp;<a href="#">zuk edge</a>&nbsp;
									<a href="#">努比亚乐S3</a>&nbsp;<a href="#">优惠券</a>&nbsp;
									<a href="#">iPhone7</a><br>
                                    <b>热门单品</b><br>
									<a href="#">vivo</a>&nbsp;<a href="#">锤子</a>&nbsp;
									<a href="#">乐视</a>&nbsp;<a href="#">金立M6</a>&nbsp;
									<a href="#">360手机</a>&nbsp;<a href="#">一加3T</a><br>
									<b>精选品牌</b><br>
									<a href="#">Apple</a>&nbsp;<a href="#">小米</a>&nbsp;
									<a href="#">华为</a>&nbsp;<a href="#">魅族</a>&nbsp;
									<a href="#">三星</a>&nbsp;<a href="#">联想</a><br>
									<b>经典品牌</b><br>
									<a href="#">vivo</a>&nbsp;<a href="#">诺基亚</a>&nbsp;
									<a href="#">中兴</a>&nbsp;<a href="#">OPPO</a>&nbsp;
									<a href="#">酷派</a>&nbsp;<a href="#">金立</a>`;
        }
        if(this.indexs==1){//手机通讯
            sub_cate_box.innerHTML=`<b>价位段</b><br>
									<a href="#">500以下</a>&nbsp;<a href="#">500-1000</a>&nbsp;
									<a href="#">1000-1800</a>&nbsp;
									<a href="#">1800-2500</a>&nbsp;
									<a href="#">2500-3500</a>&nbsp;
									<a href="#">3500-4500</a>&nbsp;
									<a href="#">4500以上
									<br><b>网络制式</b><br>
									<a href="#">移动4G</a>&nbsp;
									<a href="#">联通4G</a>&nbsp;
									<a href="#">电信4G</a>
									<br><b>系统</b><br>
									<a href="#">Android</a>&nbsp;
									<a href="#">IOS</a>&nbsp;
									<a href="#">微软</a>
									<br><b>屏幕</b><br>
									<a href="#">5.6英寸及以上</a>&nbsp;
									<a href="#">5.1-5.5英寸</a>&nbsp;
									<a href="#">4.6-5.0</a>`;
        }
        if(this.indexs==2){//运营商
            sub_cate_box.innerHTML=`<b>特色推荐</b><br>
									<a href="#">iPhone7</a>&nbsp;
									<a href="#">6S Plus</a>&nbsp;
									<a href="#">千元话费</a>&nbsp;
									<a href="#">10元</a>&nbsp;
									<a href="#">1G送流量</a>&nbsp;
									<a href="#">送现金券</a>
									<br><b>中国移动</b><br>
									<a href="#">旗舰店</a>&nbsp;
									<a href="#">超值套餐</a>&nbsp;
									<a href="#">合约机</a>
									<br><b>中国联通</b><br>
									<a href="#">旗舰店</a>&nbsp;
									<a href="#">选号码</a>&nbsp;
									<a href="#">合约机</a>&nbsp;
									<a href="#">自由组合</a>&nbsp;
									<a href="#">装宽带</a>
									<br><b>中国电信</b><br>
									<a href="#">旗舰店</a>&nbsp;
									<a href="#">选号码</a>&nbsp;
									<a href="#">合约机</a>&nbsp;
									<a href="#">个人定制</a>&nbsp;
									<a href="#">装宽带</a>`;
        }
        if(this.indexs==3){//手机配件
            sub_cate_box.innerHTML=`<b>热点关注</b><br>
									<a href="#">充电宝</a>&nbsp;
									<a href="#">配件选购</a>&nbsp;
									<a href="#">新年定制</a>&nbsp;
									<a href="#">招财配件</a>&nbsp;
									<a href="#">定制款</a>&nbsp;
									<a href="#">二合一线</a>
									<br><b>热门分类</b><br>
									<a href="#">手机壳</a>&nbsp;
									<a href="#">数据线</a>&nbsp;
									<a href="#">手机支架</a>&nbsp;
									<a href="#">钢化膜</a>&nbsp;
									<a href="#">自拍神器</a>&nbsp;
									<a href="#">新年定制</a>
									<br><b>精选品牌</b><br>
									<a href="#">罗马仕</a>&nbsp;
									<a href="#">洛克</a>&nbsp;
									<a href="#">GY</a>&nbsp;
									<a href="#">倍思</a>&nbsp;
									<a href="#">景为</a>&nbsp;
									<a href="#">奢姿</a>
									<br><b>经典品牌</b><br>
									<a href="#">爱国者</a>&nbsp;
									<a href="#">紫米</a>&nbsp;
									<a href="#">倍斯特</a>&nbsp;
									<a href="#">图拉斯</a>&nbsp;
									<a href="#">美壳壳</a>&nbsp;
									<a href="#">闪魔</a>`;
        }
        if(this.indexs==4){//京东通信
            sub_cate_box.innerHTML=`<b>手机靓号</b><br>
									<a href="#">购买号卡</a>&nbsp;
									<a href="#">170靓号</a>
									<br><b>自助服务</b><br>
									<a href="#">余额查询</a>&nbsp;
									<a href="#">账单查询</a>&nbsp;
									<a href="#">号码充值</a>&nbsp;
									<a href="#">账号关联</a>`;
        }

    }
}
$('.bannerul').mouseleave(function(){
    sub_cate_box.style.display="none";
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
