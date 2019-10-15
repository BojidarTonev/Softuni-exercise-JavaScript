function solve() {
    let textArea = document.querySelector('textarea');
    let trucksArea = document.querySelectorAll('fieldset legend')[4];
    let backUpTiresArea = document.querySelectorAll('fieldset legend')[3];

    let trucks = [];
    let backupTires = [];

    let addTruckButton = document.querySelectorAll('button')[0];
    let addTiresButton = document.querySelectorAll('button')[1];
    let goToWorkButton = document.querySelectorAll('button')[2];
    let endShiftButton = document.querySelectorAll('button')[3];

    addTruckButton.addEventListener('click', () => {
        let plateNumber = document.querySelector('#newTruckPlateNumber').value;
        let tiresCondition = document.querySelector('#newTruckTiresCondition').value;

        let truck = {
            plateNumber: plateNumber,
            tiresCondition: tiresCondition.split(' '),
            travelledDistance: 0
        }

        if(trucks.filter(x => x.plateNumber == plateNumber).length == 0){
            trucks.push(truck);
            let divElement = document.createElement('div');
            divElement.classList.add('truck');
            divElement.textContent = truck.plateNumber;

            trucksArea.appendChild(divElement);
        }

        document.querySelector('#newTruckPlateNumber').value = '';
        document.querySelector('#newTruckTiresCondition').value = '';
    });

    addTiresButton.addEventListener('click', () => {
        let input = document.querySelector('#newTiresCondition').value.split(' ');
        let divElement = document.createElement('div');
        divElement.classList.add('tireSet');
        divElement.textContent = input.join(' ');
        backUpTiresArea.appendChild(divElement);
        backupTires.push(input);

        document.querySelector('#newTiresCondition').value = '';
    });

    goToWorkButton.addEventListener('click', () => {
        let plateNumber = document.querySelector('#workPlateNumber').value;
        let distance = document.querySelector('#distance').value;
        let qualityReduce = distance / 1000;

        if(trucks.filter(x => x.plateNumber == plateNumber).length != 0){
            let truck = trucks.find(x => x.plateNumber == plateNumber);
            //ne moim da izkarami do tam
            if(truck.tiresCondition.filter(x => x - qualityReduce > 0) < truck.tiresCondition.length){
                if(backupTires.length > 0){
                    truck.tiresCondition = backupTires[0];
                    backupTires.splice(0, 1);
                    let displayTires = document.querySelectorAll('.tireSet').textContent.split(' ');

                    if(!truck.tiresCondition.filter(x => x - qualityReduce > 0) < truck.tiresCondition.length){
                        truck.tiresCondition.map(x => x - qualityReduce);
                        truck.travelledDistance += +distance;
                    }
                }
            } else {
                truck.tiresCondition.map(x => x - qualityReduce);
                truck.travelledDistance += +distance;
            }
        }

        document.querySelector('#workPlateNumber').value = '';
        document.querySelector('#distance').value = '';
    });

    endShiftButton.addEventListener('click', () => {
        for(let i = 0;i < trucks.length; i++){
            let truck = trucks[i];
            textArea.value += `Truck ${truck.plateNumber} has traveled ${truck.travelledDistance}.\n`;
        }

        textArea.value += `You have ${backupTires.length} sets of tires left.\n`;
    });

}