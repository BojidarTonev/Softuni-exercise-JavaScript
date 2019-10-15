function attachEvents(){
    let submitBtn = $('#submit');
    let location = '';
    let getUrl = `https://judgetests.firebaseio.com/locations.json`;

    submitBtn.on('click', function(){
        location = $('#location').val();

        $.ajax({
            url: getUrl,
            success: handleSuccess,
            error: handleError
        })
    });

   
    function handleSuccess(data){
        try{
            let countryCode = data.find(x => x.name == location).code;
            let url = `https://judgetests.firebaseio.com/forecast/today/${countryCode}.json`;
            let upcomingUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${countryCode}.json`

            $.ajax({
                url,
                success: handleCodeSuccess
            })

            $.ajax({
                url: upcomingUrl,
                success: handleUpcomingCodeSuccess
            });
        } catch(e){
            handleError();
        }
    }

    function handleCodeSuccess(data){
        $('#forecast').show();
        let symbol = getSymbol(data.forecast.condition);
        let spanElement = $('<span>').addClass('condition symbol').text(symbol);

        let secondSpan = $('<span>').addClass('condition');
        let spanData1 = $('<span>').addClass('forecast-data').text(data.name);
        let spanData2 = $('<span>').addClass('forecast-data').text(`${data.forecast.low}°/${data.forecast.high}°`);
        let spanData3 = $('<span>').addClass('forecast-data').text(data.forecast.condition);

        secondSpan.append(spanData1);
        secondSpan.append(spanData2);
        secondSpan.append(spanData3);

        $('#current').append(spanElement);
        $('#current').append(secondSpan);
    }

    function handleUpcomingCodeSuccess(data){
        let firstDaySpan = $('<span>').addClass('upcoming');

        let firstDaySymbol = getSymbol(data.forecast[0].condition);
        let firstDayTemperature = getCondition(0, data);
        let firstDayTempText = data.forecast[0].condition;
        createSpans(firstDaySymbol, firstDayTemperature, firstDayTempText, firstDaySpan);

        let secondDaySpan = $('<span>').addClass('upcoming');;

        let secondDaySymbol = getSymbol(data.forecast[1].condition);
        let secondDayTemperature = getCondition(1, data);
        let secondDayTempText = data.forecast[1].condition;
        createSpans(secondDaySymbol, secondDayTemperature, secondDayTempText, secondDaySpan);

        let thirdDaySpan = $('<span>').addClass('upcoming');

        let thirdDaySymbol = getSymbol(data.forecast[2].condition);
        let thirdDayTemperature = getCondition(2, data);
        let thirdDayTempText = data.forecast[2].condition;

        createSpans(thirdDaySymbol, thirdDayTemperature, thirdDayTempText, thirdDaySpan);
    }

    function handleError(){
        $('#forecast').text('Error');
        $('#forecast').show();
    }

    function getSymbol(input){
        console.log(input);
        if(input == 'Sunny'){
            return '☀';
        } else if (input == 'Partly sunny'){
            return '⛅';
        }else if (input == 'Overcast'){
            return '☁';
        }else{
            return '☂';
        }
    }

    function getCondition(number, data){
        return `${data.forecast[number].low}°/${data.forecast[number].high}°`;
    }

    function createSpans(symbol, temperature, temperatureText, parentSpan){
        let symbolSpan = $('<span>').addClass('symbol').text(symbol);
        let temperatureSpan = $('<span>').addClass('forecast-data').text(temperature);
        let temperatureTextSpan = $('<span>').addClass('forecast-data').text(temperatureText);

        parentSpan.append(symbolSpan);
        parentSpan.append(temperatureSpan);
        parentSpan.append(temperatureTextSpan);

        $('#upcoming').append(parentSpan);
    }
}