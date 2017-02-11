(function(){
	function nombrar(name) {
		return name;
	}

	function saludar(name) {
		console.info(name, ', welcome to hangar pilot!');
	}

	saludar(nombrar('Fokker'));
})();