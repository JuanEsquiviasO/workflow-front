(function(){
	function nombrar(name) {
		return name;
	}

	function saludar(name) {
		console.info(name, ', welcome to hangar of SDF-1, good luck pilot!!');
	}

	saludar(nombrar('Fokker'));
})();