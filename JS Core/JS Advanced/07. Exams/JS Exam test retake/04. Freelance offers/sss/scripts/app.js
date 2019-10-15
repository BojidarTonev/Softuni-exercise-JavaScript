function attachEvents(){
    $('#create-offers').hide();
    $('#loginBtn').on('click', login);
    $('#create-offer-Btn').on('click', createOffer);

    function login(e){
        e.preventDefault();

        let username = $('#username').val();
        if(username.length >= 4 && username.length <= 10){
            $('#create-offers').show();
            $('#username').addClass('border-0 bg-light').val(`Hello, ${username}!`);
            $('#loginBtn').text('Logout');

            $('#loginBtn').off('click', login);
            $('#loginBtn').on('click', logout);
            $('#username').attr('disabled', true);
            $('#notification').text('');
            addAllArchiveBtns($('#username').val().split(', ')[1].slice(0, -1));

        } else {
            displayError('Username', 4, 10);
        }
    }

    function createOffer(e){
        e.preventDefault();

        let offerNameElement = $('#offerName');
        let companyNameElement = $('#company');
        let descriptionElement = $('#description');

        if(offerNameElement.val().length < 4 || offerNameElement.val().length > 10){
            displayError('Offer name', 4, 10);
        }
        else if(companyNameElement.val().length < 2 || companyNameElement.val().length > 10){
            displayError('Company name', 2, 10);
        }
        else if(descriptionElement.val().length < 20 || descriptionElement.val().length > 120){
            displayError('Description', 20, 120);
        } else {
            createoffer(offerNameElement.val(), companyNameElement.val(), descriptionElement.val(), $('#username').val().split(', ')[1].slice(0, -1));

            offerNameElement.val('');
            companyNameElement.val('');
            descriptionElement.val('');
            $('#notification').text('');
        }
    }

    function logout(e){
        e.preventDefault();

        $('#loginBtn').text('Login');
        $('#username').val('');
        $('#username').removeClass('border-0 bg-light');
        $('#username').attr('placeholder', 'Username');
        $('#username').attr('disabled', false);
        $('#notification').text('');
        $('#create-offers').hide();

        $('#loginBtn').off('click', logout);
        $('#loginBtn').on('click', login);

        removeAllArchiveBtns();
    }

    function displayError(name, firstDelimeter, secondDelimeter){
        $('#notification').text(`${name} should be at least ${firstDelimeter} characters long and ${secondDelimeter} characters maximum`);
    }

    function createoffer(offerName, companyName, description, username){
        $(`<div class="col-3" data-id="${username}">
                <div class="card text-white bg-dark mb-3 pb-3" style="max-width: 18rem;">
                    <div class="card-header">${offerName}</div>
                    <div class="card-body">
                        <h5 class="card-title">${companyName}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                    <button class="btn btn-danger">Archive</button>
                </div>
            </div>`).appendTo('#offers-container');

        $(``)

        $(`[data-id="${username}"] button`).on('click', function(){
            let parent = this.parentNode.parentNode;
            parent.parentNode.removeChild(parent);
            
        });
    }

    function removeAllArchiveBtns(){
        $(`#offers-container .col-3 button`).hide();
    }

    function addAllArchiveBtns(username){
        $(`[data-id="${username}"] button`).show();
    }
    
}

