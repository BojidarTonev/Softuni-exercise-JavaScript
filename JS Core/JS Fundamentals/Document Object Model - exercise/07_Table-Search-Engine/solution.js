function solve() {
    let data = document.getElementById('exercise').querySelectorAll('tr');
    let inputButton = document.getElementById('searchBtn');

    inputButton.addEventListener("click", () => {
        let inputValue = document.getElementById('searchField').value;
        for (let i = 2; i < data.length; i++) {
            let elements = data[i].querySelectorAll('td');
            for (let i = 0; i < elements.length; i++)
            {
                let element = elements[i].textContent;
                if (element.toLowerCase().includes(inputValue.toLowerCase()) && inputValue !== '')
                {

                    elements[0].parentNode.classList.add('select');
                    break;
                }
                else
                {
                    for (let element of elements)
                    {
                        element.style.backgroundColor = "white";
                    }
                }
            }

        }

        document.getElementById('searchField').value = '';
    });

}