
function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		disX=ev.pageX-obj.offsetLeft;
		disY=ev.pageY.Object.offsetTop;
		document.onmousemove=function(ev){
			obj.styl.left=ev.clientX-disX;
			obj.styl.top=ev.clientY-disY;
		}
	}
}
