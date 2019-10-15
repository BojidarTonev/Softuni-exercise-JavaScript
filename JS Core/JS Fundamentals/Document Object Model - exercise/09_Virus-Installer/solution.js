function solve() {
    let nextButton = document.querySelector('button');
    let cancelButton = document.querySelectorAll('button')[1];

    cancelButton.addEventListener("click", () => {
        let hide = document.getElementById('exercise');
        hide.style.display = 'none';
    });

    nextButton.addEventListener("click", () => {
        let firstStep = document.getElementById('firstStep');
        let content = document.getElementById('content');
        content.style.backgroundImage = 'none';
        firstStep.style.display = 'block';

        let next = document.querySelector('button');
        next.addEventListener("click", () => {
            let agreeButton = document.querySelector('div input');
            if (agreeButton.checked) {
                let secondStep = document.getElementById('secondStep');
                let nextBtn = document.querySelector('button');
                firstStep.style.display = 'none';
                secondStep.style.display = 'block';
                nextBtn.style.display = 'none';
                setTimeout(() => {
                    nextBtn.style.display = 'inline';
                }, 3000);

                nextBtn.addEventListener("click", () => {
                    let thirdStep = document.getElementById('thirdStep');
                    secondStep.style.display = 'none';
                    thirdStep.style.display = 'block';

                    let finishButton = document.querySelectorAll('button')[1];
                    let button = document.querySelector('button');
                    button.style.display = 'none';
                    finishButton.textContent = 'Finish';
                    finishButton.addEventListener("click", () => {
                        let hide = document.getElementById('exercise');
                        hide.style.display = 'none';
                    });
                });
            }
        });

    });
}