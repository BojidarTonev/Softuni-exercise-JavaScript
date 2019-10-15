function onLoad(){
    let baseUrl = 'https://baas.kinvey.com/';
    let appKey = 'kid_BJXTsSi-e';
    let kinveyAppSecret = '447b8e7046f048039d95610c1b03939';

    let username = 'guest';
    let password = 'guest';
    let endpoint = 'students';

    let headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json' 
    }

    $.ajax({
        url: baseUrl + 'appdata/' + appKey + '/' + endpoint,
        headers
    }).then((data) => {
        console.log(data);
        for(let item of data.sort((a, b) => a.ID - b.ID)){
            $(`<tr>
            <th>${item.ID}</th>
            <th>${item.FirstName}</th>
            <th>${item.LastName}</th>
            <th>${item.FacultyNumber}</th>
            <th>${item.Grade}</th>
        </tr>`).appendTo('#results')
        }
    });

    $('#krai').on('click', function(e){
        e.preventDefault();

        let id = $('#id').val();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let facultyNumber = $('#facultyNumber').val();
        let grade = $('#grade').val();

        let obj = {
            ID: Number(id),
            FirstName: firstName,
            LastName: lastName,
            FacultyNumber: facultyNumber,
            Grade: Number(grade)
        }

        $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/' + endpoint,
            headers,
            type: 'POST',
            data: JSON.stringify(obj)
        });
    })
}