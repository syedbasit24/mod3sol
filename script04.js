(function(window){
	var hellospeak = {};
	var speakword = "hello";
	hellospeak.speak = function(names){
		console.log(speakword + "" +names);
	};
	window.hellospeak = hellospeak;
})(window);