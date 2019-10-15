function solve() {
    let submitButton = document.querySelector('form button');
    let searchButton = document.querySelectorAll('button')[1];

    let usernameElement = document.querySelector('.user-info input[placeholder="username"]');
    let passwordElement = document.querySelector('.user-info input[placeholder="password"]');
    let emailElement = document.querySelector('.user-info input[placeholder="email"]');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let tableElement = document.querySelector('tbody');

        let userName = usernameElement.value;
        usernameElement.value = '';
        passwordElement.value = '';
        let email = emailElement.value;
        emailElement.value = '';

        let checkBoxValues = [];
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        for(let item of checkboxes){
            item.checked = false;
            checkBoxValues.push(item.value);
        }

        let tableRowElement = document.createElement('tr');

        let userData = document.createElement('td');
        userData.textContent = userName;
        tableRowElement.appendChild(userData);

        let emailData = document.createElement('td');
        emailData.textContent = email;
        tableRowElement.appendChild(emailData);

        let topicsData = document.createElement('td');
        topicsData.textContent = checkBoxValues.join(' ');
        tableRowElement.appendChild(topicsData);

        tableElement.appendChild(tableRowElement);
    });

    searchButton.addEventListener('click', () => {
        let tableRows = document.querySelectorAll('tr');
        let inputElement = document.querySelector('input[placeholder="Search..."]');
        let input = inputElement.value;
        inputElement.value = '';

        for(let i = 1; i < tableRows.length; i++){
            let tableData = tableRows[i].querySelectorAll('td');
            for(let el = 0; el < tableData.length; el++){
                if(tableData[el].textContent.includes(input)){
                    tableRows[i].style.visibility = 'visible';
                    break;
                } else {
                    tableRows[i].style.visibility = 'hidden';
                }
            }
            
        }
        
    });


}