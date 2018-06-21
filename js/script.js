var i=1;
function slideshow() {
	for (var start = 1; start < 100; start++){
		setTimeout(function () {
			document.getElementById("banner").style.backgroundImage = "url(img/b"+i+".png)";
			if(i>=5){
				i=0;
			}
			i++; 
			console.log(i);  
		}, 1000 * start);	
	}
}
window.onload = function() {
  //slideshow
  slideshow();
};