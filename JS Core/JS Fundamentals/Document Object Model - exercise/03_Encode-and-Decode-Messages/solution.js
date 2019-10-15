function solve() {
	let encodedMessageElement = document.getElementById('exercise').querySelectorAll('textarea')[0];
	let encodeButton = document.getElementById('exercise').querySelectorAll('button')[0];

    let decodeMessageArea = document.getElementById('exercise').querySelectorAll('textarea')[1];
	let decodeButton = document.getElementById('exercise').querySelectorAll('button')[1];

	encodeButton.addEventListener("click", () => {
	    let input = encodedMessageElement.value;
	    let result = "";
        for (let i = 0; i < input.length; i++)
        {
            let charCode = input[i].charCodeAt(0);
            charCode++;

            let newChar = String.fromCharCode(charCode);
            result += newChar;
        }

        encodedMessageElement.value = '';

        let resultText = document.createTextNode(result);

        decodeMessageArea.value = resultText.textContent;
    });

	decodeButton.addEventListener("click", () => {
	    let textValue = decodeMessageArea.value;
	    let result = "";
	    for (let i = 0; i < textValue.length; i++)
        {
            let charCode = textValue[i].charCodeAt(0);
            charCode--;

            let newChar = String.fromCharCode(charCode);
            result += newChar;
        }

        let resultText = document.createTextNode(result);
	    decodeMessageArea.value = resultText.textContent;

    })
}