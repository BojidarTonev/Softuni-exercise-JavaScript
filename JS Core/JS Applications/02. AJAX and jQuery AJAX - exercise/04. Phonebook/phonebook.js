function attachEvents(){
    $('#btnLoad').on('click', function(){
        $.ajax({
            method: 'GET',
            url : 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(data){
                console.log()
            }
        });
    })

    
}