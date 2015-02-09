function generate() {
	adj_index = Math.floor(Math.random() * adjs.length);
	noun_index = Math.floor(Math.random() * nouns.length);

	document.getElementById("output").innerHTML = adjs[adj_index} + " " + nouns[noun_index];
}
