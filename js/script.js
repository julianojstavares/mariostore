var i=1;
function slideshow() {
	for (var start = 1; start < 100000000; start++){
		setTimeout(function () {
			document.getElementById("banner").style.backgroundImage = "url(img/b"+i+".png)";
			i++;			
			if(i>5){
				i=1;
			}
			console.log(i);  
		}, 2000 * start);	
	}
}
slideshow();