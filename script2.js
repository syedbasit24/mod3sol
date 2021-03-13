(function(){
	var names = ["john", "basit", "Jack", "lord", "Lawn"];
	for(var i=0; i<names.length ; i++){
		var firstLetter = names[i].charAt(0).toLowerCase();
		if(firstLetter=='j'){
			byespeak.bye(names[i]);
		}
		else{
			hellospeak.speak(names[i]);
		}
	}

})()