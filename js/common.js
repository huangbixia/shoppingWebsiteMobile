window.onload = function()
{
    //购物车隔行变色
   var oTableShopcar = document.getElementById("shopCart-table");
   var aRows = oTableShopcar.tBodies[0].rows;
   var i = 0;

   for(i=1;i<aRows.length;i++)
   {
    if(i%2){aRows[i].style.background="#f3faf3";}
    else{aRows[i].style.background="white";}

   }
}
/**轮播图的播放速度**/
$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2500
    });
	$('.more').click(function(){
		for(var i=0;i<5;i++)
		$('#store-list').append("<div class='store'><a href='#'><div class='store-top'><div class='store-pic'><img src='images/vegetables.jpg' alt='loading' style='width: 100%;height:100%;'></div><div class='store-introduction'><p style='margin-bottom: 20px;'><span style='font-size: 14px;color: green;font-weight: bold;'>SSS蔬菜行(XX市场)</span></p><p>评分：4.2 | 月售：122份</p><p>起送：￥20 | 配送：0</p></div></div></a><div class='store-bottom'><ul><li><a href='#'><img src='images/kuoyin.png' alt='loading'><span>满50减5元，满30免运费</span></a></ul></div></div>")
	})
});

//检查登录界面手机号、密码受否为空手机合法性
function checkInfo()
{
    var userId = document.getElementById("user-id");
    var pwd = document.getElementById("pwd");

    if(userId.value.length==0)
    {
        alert("手机号码不为空！");
        userId.focus();
        return false;
    }
    if(pwd.value.length==0)
    {
        alert("密码不为空！");
        pwd.focus();
        return false;
    }
    if(userId.value.length!=11)
    {
        alert("请输入11位手机号码！");
        userId.focus();
        return false;
    }
    if(isNaN(userId.value))
    {
        alert("手机不能含有非法字符！");
        userId.focus();
        return false;
    }
}
//检查注册界面表单
function check_phone()
{
   var phoneNum = document.getElementById("registerPhone");
   var phoneSpan = document.getElementById("phoneNum");

   if(phoneNum.value.length<11)
   {
    phoneSpan.innerHTML = "<font color='red'>手机号长度必须为11位</font>";
   }
}