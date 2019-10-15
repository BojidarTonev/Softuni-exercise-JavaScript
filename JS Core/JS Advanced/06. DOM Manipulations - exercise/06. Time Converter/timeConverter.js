function attachEventsListeners() {
    let $buttons = $('input[type="button"]');
    for(let button of $buttons){

        button.addEventListener('click', function(){
            if(button.id == 'daysBtn'){
                let value = $('#days').val();
                fromDays(value);

            } else if(button.id == 'hoursBtn'){
                let value = $('#hours').val();
                fromHours(value);

            } else if (button.id == 'minutesBtn'){
                let value = $('#minutes').val();
                fromMinutes(value);
                
            } else {
                let value = $('#seconds').val();
                fromSeconds(value);

            }
        });
            
    }

    function fromDays(value){
        let hours = +value * 24;
        let minutes = +hours * 60;
        let seconds = +minutes * 60;

        $('#hours').val(hours);
        $('#minutes').val(minutes);
        $('#seconds').val(seconds);
    }

    function fromHours(value){
        let days = +value / 24;
        let minutes = +value * 60;
        let seconds = +minutes * 60;

        $('#days').val(days);
        $('#minutes').val(minutes);
        $('#seconds').val(seconds);
    }

    function fromMinutes(value){
        let hours = +value / 60;
        let days = +hours * 24;
        let seconds = +value * 60;

        $('#days').val(days);
        $('#hours').val(hours);
        $('#seconds').val(seconds);
    }

    function fromSeconds(value){
        let minutes = +value / 60;
        let hours = +minutes / 60;
        let days = +hours / 24;

        $('#days').val(days);
        $('#hours').val(hours);
        $('#minutes').val(minutes);
    }
}
  