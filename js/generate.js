function generate() {
	noundes_index = Math.floor(Math.random() * noundescriptors.length);
	noun_index = Math.floor(Math.random() * nouns.length);
	
	document.getElementById("output").innerHTML = noundescriptors[noundes_index] + " " + nouns[noun_index];
}
