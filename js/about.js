var uls=document.getElementsByTagName("ul");
var divs=document.getElementsByClassName("about");
var dls=document.getElementsByTagName("dl")[3];

// console.log(dls.innerHTML);
        
for(var i=0;i<uls.length;i++){
    uls[i].onclick=function(){
        // console.log(1);
        for(var i=0;i<divs.length;i++){
            divs[i].className="content-center about-new-content-center main about_gslc_content about";
        }
        var i=this.getAttribute("name")
        divs[i].className="active content-center about-new-content-center main about_gslc_content about";
        
        dls.innerHTML=this.firstElementChild.lastElementChild.innerHTML;
        console.log(dls.innerHTML);
    }
}