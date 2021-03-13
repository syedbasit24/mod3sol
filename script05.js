(function(window){
	var byespeak = {};
	var speakword = "bye";
	byespeak.bye = function(names){
		console.log(speakword + ""+ names);
	};
	window.byespeak = byespeak;

})(window);