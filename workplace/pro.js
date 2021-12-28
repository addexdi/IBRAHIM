const texts = [
	"is not the learning of facts",
	"the training of the mind to think",
	"not a problem",
	"an opportunity",
	"not preparation for life",
	"a life itself",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    // Reset the count to 0
	if (count === texts.length) {
		count = 0;
	}

	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	document.querySelector(".dynamic-text").textContent = letter;
	if (letter.length === currentText.length) {
		// console.log("count =", count + " " + "index =", index);
		count++;
		index = 0;
        inter
	}

	setTimeout(type, 100);
})();