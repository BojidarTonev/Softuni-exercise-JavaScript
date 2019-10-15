function attachEvents() {
    let username = 'pesho';
    let password = 'p';
    let kinveyAppId = 'kid_S1Ah4w5dN';

    let loadBtnElement = $('.load');
    let addBtnElement = $('.add');

    loadBtnElement.on('click', function () {
        let url = `https://baas.kinvey.com/appdata/${kinveyAppId}/biggestCatches`;

        $.ajax({
            url,
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            success: listCatches
        });
    })

    addBtnElement.on('click', function () {
        let angler = $('#addForm .angler').val();
        let weight = $('#addForm .weight').val();
        let species = $('#addForm .species').val();
        let location = $('#addForm .location').val();
        let bait = $('#addForm .bait').val();
        let captureTime = $('#addForm .captureTime').val();

        let data = {
            'angler': angler,
            'weight': weight,
            'species': species,
            'location': location,
            'bait': bait,
            'captureTime': captureTime
        }

        let url = `https://baas.kinvey.com/appdata/${kinveyAppId}/biggestCatches`;
        $.ajax({
            type: 'POST',
            url,
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            contentType: 'application/json',
            data: JSON.stringify(data),
        });
    })



    function listCatches(data) {
        $('#catches').empty();
        for (let item of data) {
            let itemId = item._id;

            $(`
           <div class="catch" data-id="${item._id}">
            <label>Angler</label>
            <input type="text" class="angler" value="${item.angler}">
            <label>Weight</label>
            <input type="number" class="weight" value="${item.weight}">
            <label>Species</label>
            <input type="text" class="species" value="${item.species}">
            <label>Location</label>
            <input type="text" class="location" value="${item.location}">
            <label>Bait</label>
            <input type="text" class="bait" value="${item.bait}">
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${item.captureTime}">
            <button class="update">Update</button>
            <button class="delete">Delete</button>
        </div>`).appendTo('#catches');
        
            $(`[data-id="${item._id}"] .update`).click(function(){
                updateRequest(itemId);
            });

            $(`[data-id="${item._id}"] .delete`).click(function(){
                deleteRequest(itemId);
            });
        }

    }

    function updateRequest(id) {
        let data = {
            'angler': $(`[data-id="${id}"] .angler`).val(),
            'weight': $(`[data-id="${id}"] .weight`).val(),
            'species': $(`[data-id="${id}"] .species`).val(),
            'location': $(`[data-id="${id}"] .location`).val(),
            'bait': $(`[data-id="${id}"] .bait`).val(),
            'captureTime': $(`[data-id="${id}"] .captureTime`).val()
        };
        
        let url = `https://baas.kinvey.com/appdata/${kinveyAppId}/biggestCatches/${id}`;
        $.ajax({
            type: 'PUT',
            url,
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
    }

    function deleteRequest(id) {

    }
}