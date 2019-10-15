function solve(){
    let inputElementValue = document.getElementById('input');
    let sentences = inputElementValue.textContent.split('.');

    let articlesElement = document.getElementById('output');
    let sentence = "";

    for (let i = 1; i < sentences.length + 1; i++)
    {
        sentence += sentences[i - 1].concat('.');
       if (i % 3 === 0 || i === sentences.length)
       {
           let paragraph = document.createElement('p');
           paragraph.textContent = sentence;
           articlesElement.appendChild(paragraph)
           sentence = '';
       }
    }

}