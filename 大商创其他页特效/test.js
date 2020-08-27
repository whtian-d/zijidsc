var box=document.getElementById("box");
var img=document.getElementsByClassName('img');
console.log(img);
console.log(box.children)
var qcleiming=function(a,b){
    for(var i=0;i<a.length;i++){
        a[i].className=b;
    }
}
var info_1=document.getElementsByClassName("info-1");
var info_2=document.getElementsByClassName("info-2");
for(var i=0;i<box.children.length;i++){
    box.children[i].index=i;
    box.children[i].onmouseover=function(){
        qcleiming(box.children,"box1 box2");
        this.className=" box1 box3 box2";
        qcleiming(img,"img");
        this.getElementsByClassName("img")[0].className+=" imghover";
        qcleiming(info_1,"info-1");
        this.getElementsByClassName('info-1')[0].className+=" info-1-h";
        qcleiming(info_2,"info-2");
        this.getElementsByClassName('info-2')[0].className+=" info-2-h";
    }
}