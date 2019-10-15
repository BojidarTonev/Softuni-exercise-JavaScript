function attachEvents2(){
    const kinveyId = 'kid_BJkFnd7KN';
    const username = 'bojidar';
    const password = 'parola';
    const endPoint = 'wilWildWestPlayers';

    const baseUrl = 'https://baas.kinvey.com/';
    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json' 
    };

    $('#addPlayer').on('click', addPlayer);


    loadPlayers();
    async function loadPlayers(id){
        try {
            await $.ajax({
                url: `${baseUrl}appdata/${kinveyId}/${endPoint}`,
                headers
            }).then((data) => {
                $('#players').empty();
                for(let player of data){
                    let div = $(`
                     <div class="player" data-id="${player._id}">
                         <div class="row">
                             <label>Name:</label>
                                <label class="name">${player.name}</label>
                          </div>
                            <div class="row">
                              <label>Money:</label>
                             <label class="money">${player.money}</label>
                         </div>
                         <div class="row">
                            <label>Bullets:</label>
                            <label class="bullets">${player.bullets}</label>
                         </div>
                     </div>
                    `);
                    let playBtn = $('<button class="play">Play</button>');
                    let deleteBtn = $('<button class="delete">Delete </button>');

                    playBtn.on('click', selectPlayer)

                    div.append(playBtn);
                    div.append(deleteBtn);
                    $('#players').append(div);

                }
                
                $('#save').css('display', 'block');
                $('#reload').css('display', 'block');
                $('#canvas').css('display', 'block');

                if (id) {
                    selectedPlayer = allPlayers.filter(player => player._id == id)[0];
                } else {
                    selectedPlayer = allPlayers[0];
                }
                
                playerId = selectedPlayer._id;
                loadCanvas(selectedPlayer);
            })
        } catch (error) {
        }
    }

    async function addPlayer(){
        loadPlayers();
        let playerName = $('#addName').val();
        try {
            await $.ajax({
                url: `${baseUrl}appdata/${kinveyId}/${endPoint}`,
                type: 'POST',
                headers,
                data: JSON.stringify({
                    name: playerName,
                    bullets: 6,
                    money: 500
                })
            })
        } catch (error) {
            console.log(error);
        }

        $('#addName').val('');
    }

    async function selectPlayer(){

    }

}