function generate() {
	var noundes_index = Math.floor(Math.random() * noundescriptors.length);
	var noun_index = Math.floor(Math.random() * nouns.length);
	
	document.getElementById("output").innerHTML = noundescriptors[noundes_index] + " " + nouns[noun_index];
}
