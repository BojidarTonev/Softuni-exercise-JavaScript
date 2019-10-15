function solve() {
    let points = 0;
	let softUniCreateYearInput = document.getElementById('exercise').querySelectorAll('[name="softUniYear"]');
    let nextQuestionButton = document.getElementById('exercise').querySelector('button');

	for (let i = 0; i < softUniCreateYearInput.length; i++)
    {
        let radioButton = softUniCreateYearInput[i];
        radioButton.addEventListener("click", () => {
           if (radioButton.value === "2013")
           {
               points++;
           }

            nextQuestionButton.addEventListener("click", () => {
                let section = document.getElementById('exercise').querySelectorAll('section')[1];
                section.classList.remove('hidden');
            });
        });
    }

	let mostPopularName = document.getElementById('exercise').querySelectorAll('[name="popularName"]');
	let nextQuestionButton2 = document.getElementById('exercise').querySelectorAll('button')[1];

	for (let i = 0; i < mostPopularName.length; i++)
    {
        let radioButton = mostPopularName[i];
        radioButton.addEventListener("click", () => {
           if (radioButton.value === "Pesho")
           {
               points++;
           }

           nextQuestionButton2.addEventListener("click", () => {
               let section = document.getElementById('exercise').querySelectorAll('section')[2];
               section.classList.remove('hidden');
            })
        });
    }

    let founderOfSoftUni = document.getElementById('exercise').querySelectorAll('[name="softUniFounder"]');
	let getResultsButton = document.getElementById('exercise').querySelectorAll('button')[2];

	for (let i = 0; i < founderOfSoftUni.length; i++)
    {
        let radioButton = founderOfSoftUni[i];
        radioButton.addEventListener("click", () => {
            if (radioButton.value === "Nakov")
            {
                points++;
            }
            getResultsButton.addEventListener("click", () => {
                let resultElement = document.getElementById('result');
                let resultDiv = document.createElement('div');
                if (points === 3)
                {
                    resultDiv.textContent = 'You are recognized as top SoftUni fan!';
                }
                else
                {
                    resultDiv.textContent = `You have ${points} right answers`;
                }

                resultElement.appendChild(resultDiv);
            })

        })
    }

}