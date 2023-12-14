//your code here
const inputField = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

let words = 0;
// default 0 words
wordCount.textContent = words;

let prevLength = 0;

inputField.addEventListener("input", (event)=> {

	const text = inputField.value;
	
	// contains at least one word
	if(text.length > prevLength) {

		const last_wtspaceIdx = text.lastIndexOf(' ');

		if (last_wtspaceIdx === -1) {
			// text without whitespace, only 1 word
			words = 1;
		}
		else if (text.slice(-2).startsWith(' ')) {
			// new word is started
			words++;
		}
		else if (text.endsWith(' ')) {
			// whitespace entered , do nothing
		}

	}
	else {
		// length is reduced meaning backspace pressed
		if(text.length === 0) {
			words = 0;
		}
		else if(text.endsWith(' ')) {
			// word removed
			words--;
		}
	}

	prevLength = text.length;
	wordCount.textContent = words;
})