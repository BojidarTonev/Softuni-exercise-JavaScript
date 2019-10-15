function attachEvents(){
    let kinveyId = 'kid_BJ_Ke8hZg';
    let username = 'guest';
    let password = 'pass';

    let baseUrl = 'https://baas.kinvey.com/';

    let headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json' 
    }
    let headerAuth = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`
    }

    $('#getVenues').on('click', function(){
        $('#venue-info').empty();
        let venue = $('#venueDate').val();

        $.ajax({
            url: baseUrl + 'rpc/' + kinveyId + `/custom/calendar?query=${venue}`,
            headers,
            type: 'POST',
        }).then((data) => {
            handleIds(data);
        });

    });

    async function handleIds(data){
        for(let id of data){
            $.ajax({
                url: `${baseUrl}appdata/${kinveyId}/venues/${id}`,
                headers
            }).done((data) => {
                handleData(data);
            })
        }
    }

    function handleData(venue){
        $(`<div class="venue" id="${venue._id}">
            <span class="venue-name"><input class="info" type="button" id="${venue._id}" value="More info">${venue.name}</span>
            <div class="venue-details" style="display: none;">
              <table>
                <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
                <tr>
                  <td class="venue-price">${venue.price} lv</td>
                  <td><select class="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select></td>
                  <td><input class="purchase" type="button" value="Purchase"></td>
                </tr>
              </table>
              <span class="head">Venue description:</span>
              <p class="description">${venue.description}</p>
              <p class="description">Starting time: ${venue.startingHour}</p>
            </div>
          </div>
        `).appendTo('#venue-info');

        $(`#${venue._id} .info`).on('click', function(){
            $(`#${venue._id} .venue-details`).toggle();
        })

        $(`#${venue._id} .purchase`).on('click', function(){
            let quantity = $(`#${venue._id} .quantity`).val();
            let totalPrice = venue.price * quantity;


            $(`#venue-info`).html(`
            <span class="head">Confirm purchase</span>
             <div class="purchase-info">
                <span>${venue.name}</span>
                <span>${quantity} x ${venue.price}</span>
                <span>Total: ${totalPrice} lv</span>
                <input type="button" value="Confirm" id="finalButton">
             </div>
            `)

            $(`#finalButton`).on('click', function(){
                $.ajax({
                    type: 'POST',
                    url: `${baseUrl}rpc/${kinveyId}/custom/purchase?venue=${venue._id}&qty=${quantity}`,
                    headers: headerAuth
                }).then((data) => {
                    $('#venue-info').html(data.html);
                });
            })
        })
        
    }

    function hadleError(data){
        
    }
    
}