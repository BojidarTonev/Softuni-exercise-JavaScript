function solve() {
    return {
        depart,
        arrive
    };   
}

let currentStop = {
    name: 'depot',
    next: 'depot'
}

function depart(){
    request('GET', getURL(currentStop.next), 'json', onDepartSuccess, onDepartError);
    swapButtons();
}

function arrive() {
    $('.info').text(`Arriving at ${currentStop.name}`);
    swapButtons();
}

function request(method, url, data, onSuccess, onError){
    $.ajax({
        method,
        url,
        data,
        success: onSuccess,
        error: onError
    })
}

function getURL(currentId) {
    let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

    return url;
}

function onDepartSuccess(data){
    if(!data){
        onDepartError();
    } else {
        currentStop.name = data.name;
        currentStop.next = data.next;

        $('.info').text(`Next stop ${currentStop.name}`);
    }
}

function onDepartError(){
    $('.info').text(`Error`);

    $('#depart').prop('disabled', true);
    $('#arrive').prop('disabled', true);
}

function swapButtons() {
    let $depart = $('#depart');
    let $arrive = $('#arrive');

    if ($depart.is(":disabled")) {
        $depart.prop('disabled', false);
        $arrive.prop('disabled', true);
    } else {
        $depart.prop('disabled', true);
        $arrive.prop('disabled', false);
    }
}
