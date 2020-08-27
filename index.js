var header = document.getElementById("header");
var nav = document.getElementById("nav");
var xiala = document.getElementById('xiala');
nav.onmouseover = function() {
    header.style.height = '430px';
    header.style.transition = 'all 0.7s ease';
}
nav.onmouseout = function() {
    header.style.height = '80px';
    header.style.transition = 'all 0.7s ease';
}
xiala.onmouseover = function() {
    header.style.height = '430px';
    // header.style.transition = 'all 0.1s ease';
}
xiala.onmouseout = function() {
    header.style.height = '80px';
    header.style.transition = 'all 0.7s ease';
}

// 下面是二级下拉菜单内容
console.log(nav.children)
console.log(xiala.children[0].children)
console.log(nav.children[1].children)
for (var i = 1; i < nav.children.length; i++) {
    nav.children[i].index = i;
    nav.children[i].onmouseover = function() {
        nav.children[this.index].children[0].style.color = '#f20d23';
        nav.children[this.index].style.borderBottomColor = '#f20d23';
        xiala.children[0].children[this.index].style.background = "linear-gradient(to bottom,#ccc 20%,#fff 100%)";
    }
    nav.children[i].onmouseout = function() {
        nav.children[this.index].children[0].style.color = '#333333';
        nav.children[this.index].style.borderBottomColor = '#fff';
        xiala.children[0].children[this.index].style.background = '#fff';
    }
    xiala.children[0].children[i].index = i;
    xiala.children[0].children[i].onmouseover = function() {
        nav.children[this.index].children[0].style.color = '#f20d23';
        nav.children[this.index].style.borderBottomColor = '#f20d23';
        xiala.children[0].children[this.index].style.background = "linear-gradient(to bottom,#ccc 20%,#fff 100%)";
    }
    xiala.children[0].children[i].onmouseout = function() {
        nav.children[this.index].children[0].style.color = '#333333';
        nav.children[this.index].style.borderBottomColor = '#fff';
        xiala.children[0].children[this.index].style.background = "#fff";
    }
}
// 下面是第一个nav的鼠标效果
nav.children[0].onmouseover = function() {
    nav.children[0].children[0].style.color = '#f20d23';
    nav.children[0].style.borderBottomColor = '#f20d23';
}
nav.children[0].onmouseout = function() {
    nav.children[0].children[0].style.color = '#333333';
    nav.children[0].style.borderBottomColor = '#fff';
}


xiala.children[0].children[0].onmouseover = function() {
    nav.children[0].children[0].style.color = '#f20d23';
    nav.children[0].style.borderBottomColor = '#f20d23';
}

xiala.children[0].children[0].onmouseout = function() {
    nav.children[0].children[0].style.color = '#333333';
    nav.children[0].style.borderBottomColor = '#fff';
}
/*
// 下面是banner图
var banner = document.getElementById("banner");
var banner_div = document.getElementById("banner-div")
var progress_ul = document.getElementById("progress_ul")
console.log(progress_ul.children[0].children[0].children[0])
var n = 0;
imglist = ['image/banner-1.jpg', 'image/banner-2.jpg', 'image/banner-3.jpg', 'image/banner-4.jpg', 'image/banner-5.jpg']
progress_ul.children[0].children[0].children[0].style.width = '55px';
progress_ul.children[0].children[0].children[0].style.transition = 'all 3s ease';
var t = setInterval(function() {
    n++;
    if (n == imglist.length) {
        n = 0;
    }
    banner.src = imglist[n];
    // console.log(progress_li.children[1].children[0])
    for (var i = 0; i < n; i++) {
        progress_ul.children[i].children[0].children[0].style.width = '0px';
    }
    if (n == 0) {
        progress_ul.children[imglist.length - 1].children[0].children[0].style.width = '0px';
        progress_ul.children[n].children[0].children[0].style.transition = 'all 0s ease';
    }
    progress_ul.children[n].children[0].children[0].style.width = '55px';
    progress_ul.children[n].children[0].children[0].style.transition = 'all 3s ease';

}, 3000);
banner_div.onmouseover = function() {
    clearInterval(t);
    progress_ul.children[n].children[0].children[0].style.width = '55px';
    progress_ul.children[n].children[0].children[0].style.transition = 'all 3s ease';
}
banner_div.onmouseout = function() {
        t = setInterval(function() {
            n++;
            if (n == imglist.length) {
                n = 0;
            }
            banner.src = imglist[n];
            for (var i = 0; i < n; i++) {
                progress_ul.children[i].children[0].children[0].style.width = '0px';
                progress_ul.children[n].children[0].children[0].style.transition = 'all 0s ease';
            }
            if (n == 0) {
                progress_ul.children[imglist.length - 1].children[0].children[0].style.width = '0px';
            }
            progress_ul.children[n].children[0].children[0].style.width = '55px';
            progress_ul.children[n].children[0].children[0].style.transition = 'all 3s ease';

        }, 3000)
    }
    // 下面是banner图上的进度条
var pro = document.getElementsByClassName("pro")
console.log(pro[0].parentElement)
for (var i = 0; i < pro.length; i++) {
    pro[i].parentElement.parentElement.index = i
    pro[i].parentElement.parentElement.onmouseover = function() {
        for (var j = 0; j < pro.length; j++) {
            pro[j].style.width = "0px";
        }
        this.children[0].children[0].style.width = '55px';
        this.children[0].children[0].style.transition = "all 3s ease";
        console.log(this.index);
        banner.src = imglist[this.index];
        n = this.index;
    }
    pro[i].parentElement.parentElement.onmouseout = function() {
        this.children[0].children[0].style.width = '0px';
        this.children[0].children[0].style.transition = "all 0s ease";
        n = this.index;
    }
}
*/
// 新的banner图开始
var banner = document.getElementById("banner");
function my$(id){
    return document.getElementById(id)
}
var progress_ul = document.getElementById("progress_ul");
var banner_div = document.getElementById("banner-div");
console.log(banner_div);
console.log(banner);
var imglist = ['image/banner-1.jpg', 'image/banner-2.jpg', 'image/banner-3.jpg', 'image/banner-4.jpg', 'image/banner-5.jpg'];
var banner_img=function(objc,imgs,n){
    objc.src=imgs[n];
}

var szkd=function(obj,w,transition){
    for(var i=0;i<obj.children.length;i++){
        obj.children[i].children[0].children[0].style.width=w;
        obj.children[i].children[0].children[0].style.transition=transition;
    }
}
var szkd1=function(obj,w,transition,n){
    obj.children[n].children[0].children[0].style.width=w;
    obj.children[n].children[0].children[0].style.transition=transition;
}

var n=0;


function setdingshi(){
        banner_img(banner,imglist,n);
        szkd(progress_ul,"0px","all 0s ease");
        szkd1(progress_ul,"55px","all 3s ease",n);
        n++;
        if(n==5){
            n=0;
        }
}
var banner_setIner=setInterval(setdingshi,3000);
banner_div.onmouseover=function(){
    clearInterval(banner_setIner);
    szkd(progress_ul,"0px","all 0s ease");
    szkd1(progress_ul,"55px","all 3s ease",n);
}
banner_div.onmouseout=function(){
    banner_setIner=setInterval(setdingshi,3000);
}


// 下方进度条鼠标放置切换图片
var jindutiao=function(jdt,img,i,imgslist){
    jdt.onmouseover=function(){
        img.src=imgslist[i];
        n=i;
        szkd(progress_ul,"0px","all 0s ease");
        jdt.children[0].children[0].style.width="55px;";
        jdt.children[0].children[0].style.transition="all 2s";
    }
}
for(var i=0;i<progress_ul.children.length;i++){
    jindutiao(progress_ul.children[i],banner,i,imglist);
}


// banner图结束，下次用类名,函数.
// 下面是body1
var body_bottom = document.getElementsByClassName('bottom');
console.log(body_bottom[5].children[1])
    // 只要5678

var qcleiming = function(a, b) {
    for (var i = 0; i < a.length; i++) {
        a[i].className = b;
    }
}
var fn1 = function(a, b) {
    for (var j = 0; j < body_bottom[a].children.length; j++) {
        body_bottom[i].children[j].onmouseover = function() {
            qcleiming(body_bottom[a].children, "");
            this.className = b;
        }
    }
}
for (var i = 5; i < 9; i++) {
    fn1(i, "bottom_hover")
}

// 第三版块的js

var body3 = document.getElementById('body3')
var border3_ul = document.getElementById("border3-ul");
// console.log(border3_ul.children)
var body3_right = document.getElementsByClassName("right")
console.log(body3_right)
var bgimg = ['image/3f-img1.jpg', 'image/3f-img2.jpg', 'image/3f-img3.jpg', 'image/3f-img4.jpg', 'image/3f-img5.jpg', 'image/3f-img6.jpg', 'image/3f-img7.jpg']
var fn2 = function(a, b, c, d) {
    a.onmouseover = function() {
        body3.style.background = "url(" + bgimg[d] + ") no-repeat 50%";
        qcleiming(border3_ul.children, "")
        a.className = "active"
        qcleiming(body3_right, "right")
        b.className = c
    }
}
for (var i = 0; i < border3_ul.children.length; i++) {
    fn2(border3_ul.children[i], body3_right[i], "right right-active", i)
}

// 鼠标滚轮事件
var footer_fixed=document.getElementById('footer-fixed');
var exit=document.getElementById('exit');

/*IE、Opera注册事件*/
var number=0;
var scrollFunc = function (e) {  
    e = e || window.event;  
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        console.log(e.wheelDelta);
        number+=e.wheelDelta;
        if(number<0){
            if (e.wheelDelta > 0){ //当滑轮向上滚动时  
            //    alert('上滚')
                header.style.height="0px";
                header.style.transition="all 0.3s ease";
                footer_fixed.style.height='98px';
                footer_fixed.style.transition="all 0.3s ease";
            } 
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                //  alert('下滚')
                header.style.height="80px";
                header.style.transition="all 0.3s ease";

                // xima
                footer_fixed.style.height='0px';
                footer_fixed.style.transition="all 0.3s ease";
            }
        }
        else{
            header.style.height="80px";
            header.style.transition="all 1s ease";
            footer_fixed.style.height='0px';
            footer_fixed.style.transition="all 0.3s ease";
        }  
    }
    // } else if (e.detail) {  //Firefox滑轮事件  
    //     if (e.detail> 0) { //当滑轮向下滚动时  
    //        alert('下滚')
    //     }  
    //     if (e.detail< 0) { //当滑轮向上滚动时  
    //         alert('上滚')  
    //     }  
    // } 
} 

    /*IE、Opera注册事件*/
if(document.attachEvent){
    document.attachEvent('onmousewheel',scrollFunc);

}
//Firefox使用addEventListener添加滚轮事件  
// if (document.addEventListener) {//firefox  
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);  
// }  
//Safari与Chrome属于同一类型
window.onmousewheel = document.onmousewheel = scrollFunc; 
//  /*
// event.wheelDelta 滚动方向
// 上：120
// 下：-120
// Firefox：event.detail 滚动方向
// 上：-3
// 下:3

// 下面啊固定

exit.onclick=function(){
    footer_fixed.style.height="0px";
    footer_fixed.style.transition="all 0.7s ease";
}

// 侧边栏上部分旋转
var fix1=document.getElementById('fix1');
var book=document.getElementById('book');
fix1.onmouseover=function(){
    book.style.transform=" rotateZ(360deg)";
}
fix1.onmouseout=function(){
    book.style.transform=" rotateZ(0deg)";
}

// 侧边栏第三部分
var fix3=document.getElementById('fix3');
var ig=document.getElementById('ig');
var txt=document.getElementById('txt')
fix3.onmouseover=function(){
    this.style.backgroundColor="#FF0000";
    txt.style.color="#fff";
    txt.style.transition="all 1s";
    ig.style.transition="all 1s";
    ig.style.background="url(./image/side_ewm_02.png) no-repeat center";
    ig.style.transform="rotateZ(360deg)";
}
fix3.onmouseout=function(){
    ig.style.background="url(./image/side_ewm_01.png) no-repeat center";
    this.style.backgroundColor="#fff";
    txt.style.color="#333";
    ig.style.transition="all 1s";
    ig.style.transform="rotateZ(0deg)";
}
// 中间弹窗
var center_tc=document.getElementById('center_tc');
var close=document.getElementById("close");

var clear=function(m){
    clearInterval(m);
}
var dstc=setInterval(function(){
    center_tc.style.display="block";
    },50000);
var dingshitanchu=function(){
    dstc=setInterval(function(){
    center_tc.style.display="block";
    },50000);
}

close.onclick=function(){
    clear(dstc);
    center_tc.style.display="none";
    dingshitanchu();
}

// 补body5的特效
var body5_imgs=['image/5f-img1.png','image/5f-img2.png','image/5f-img3.png','image/5f-img4.png','image/5f-img5.png','image/5f-img6.png','image/5f-img7.png','image/5f-img8.png','image/5f-img9.png','image/5f-img10.png','image/5f-img11.png','image/5f-img12.png',]
var pictures=document.getElementById('pictures');
console.log(pictures.children);
var body5_img=document.getElementsByClassName("bd5_img")

var body5_rt=document.getElementsByClassName("rt");
console.log(body5_rt);

for(var i=0;i<pictures.children.length;i++){
    pictures.children[i].index=i;
    pictures.children[i].onmouseover=function(){
        qcleiming(body5_img,"bd5_img");
        qcleiming(body5_rt,"rt");
        body5_img[this.index].className="bd5_img bd5_img_hover";
        body5_rt[this.index].className="rt rt_hover";
    }
}

// aixin
