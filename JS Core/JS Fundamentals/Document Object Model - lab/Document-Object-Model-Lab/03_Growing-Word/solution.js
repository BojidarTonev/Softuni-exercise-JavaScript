function solve() {
    let clicks = 1;
    let totalClicks = 0;
    let greetingWord = document.getElementById('main').querySelector('p');

    let button = document.getElementById('main').querySelector('button');

    button.addEventListener("click", () => {
        totalClicks++;
        if (clicks === 1)
        {
            greetingWord.style.fontSize = `${totalClicks * 2}px`;
            greetingWord.style.color = "blue";
            clicks++;
        } else if (clicks === 2)
        {
            greetingWord.style.fontSize = `${totalClicks * 2}px`;
            greetingWord.style.color = "green";
            clicks++;
        } else if (clicks === 3)
        {
            greetingWord.style.fontSize = `${totalClicks * 2}px`;
            greetingWord.style.color = "red";
            clicks = 1;
        }

        console.log(greetingWord.style.fontSize);
        console.log(greetingWord.style.color);
    });
}