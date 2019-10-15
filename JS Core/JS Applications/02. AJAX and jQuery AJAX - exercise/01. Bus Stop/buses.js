function getInfo() {
        let busId = $('#stopId').val();
        $('#buses').empty();
        let url = `https://judgetests.firebaseio.com/businfo/${busId}.json`;
    
        $.ajax({
            method: 'GET',
            url,
            data: 'json',
            success: function(data){
                $('#stopName').text(data.name);
                for(let key in data.buses){
                    let $element = $('<li>').text(`Bus ${key} arrives in ${data.buses[key]} minutes`);
                    $('#buses').append($element);
                }
            },
            error: function(){
                $('#stopName').text('Error');
            }
        });
}