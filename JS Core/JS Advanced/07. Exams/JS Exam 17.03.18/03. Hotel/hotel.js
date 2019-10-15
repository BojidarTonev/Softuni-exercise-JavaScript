class Hotel{
    constructor(name, capacity){
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.countOfRooms = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        }
    }

    get roomsPricing(){
        let obj = {
            single: 50,
            double: 90,
            maisonette: 135
        }

        return obj;
    }

    get servicesPricing(){
        let obj = {
            food: 10,
            drink: 15,
            housekeeping: 25
        }

        return obj;
    }

    rentARoom(clientName, roomType, nights){
        let availableRooms = this.countOfRooms[roomType];
        if(availableRooms <= 0){
            let str = `No ${roomType} rooms available!`;
            for(let key of Object.keys(this.availableRooms)){
                str += ` Available ${key} rooms: ${this.countOfRooms[key]}.`
            }
            return str;
        }

        let book = {
            clientName: clientName,
            roomType: roomType,
            nights: nights,
            roomNumber: this.currentBookingNumber
        };

        this.bookings.push(book);
        this.countOfRooms[roomType]--;
        this.currentBookingNumber++;

        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`
    }

    roomService(currentBookingNumber, serviceType){
        if(this.bookings.filter(x => x.roomNumber == currentBookingNumber).length == 0){
            return `The booking ${currentBookingNumber} is invalid.`
        }
        if(!this.servicesPricing.hasOwnProperty(serviceType)){
            return `We do not offer ${serviceType} service.`;
        }

        let book = this.bookings.find(x => x.roomNumber == currentBookingNumber);
        if(!book.hasOwnProperty('services')){
            book.services = [];
        }
        book.services.push(serviceType);

        return `Mr./Mrs. ${book.clientName}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber){
        if(this.bookings.filter(x => x.roomNumber == currentBookingNumber).length == 0){
            return `The booking ${currentBookingNumber} is invalid.`;
        }
        let book = this.bookings.find(x => x.roomNumber == currentBookingNumber);
        this.countOfRooms[book.roomType]++;
        let price = 0;
        if(book.roomType == 'single'){
            price = this.roomsPricing.single * book.nights;
        } else if (book.roomType == 'double'){
            price = this.roomsPricing.double * book.nights;

        } else {
            price = this.roomsPricing.maisonette * book.nights;
        }

        if(book.hasOwnProperty('services')){
               let serviceMoney = 0;
               for(let service of book[services]){
                    let money = this.servicesPricing[service];
                    serviceMoney += money;
               }
               return `We hope you enjoyed your time here, Mr./Mrs. ${book.clientName}. The total amount of money you have to pay is ${price + serviceMoney} BGN. You have used additional room services, costing ${serviceMoney} BGN.`;

        } else {
            return `We hope you enjoyed your time here, Mr./Mrs. ${book.clientName}. The total amount of money you have to pay is ${price} BGN.`
        }
        
    }

    report(){
        let counter = 0;
        let str = `${this.name.toUpperCase()} DATABASE:\n`;
        str += `--------------------\n`;
        if(this.bookings.length == 0){
            str += `There are currently no bookings.\n`
        } else {
            for(let book of this.bookings){
                counter++;
                str += `bookingNumber - ${book.roomNumber}\n`;
                str += `clientName - ${book.clientName}\n`;
                str += `roomType - ${book.roomType}\n`;
                str += `nights - ${book.nights}\n`;
                if(book.hasOwnProperty('services')){
                    str += `services: ${book.services.join(', ')}`
                }
                if(counter != this.bookings.length){
                    str += `----------\n`;  
                }
            }
        }

        return str;
    }
    
}

function solve(){
    let hotel = new Hotel('HotUni', 10);

    hotel.rentARoom('Peter', 'single', 4);
    hotel.rentARoom('Robert', 'double', 4);
    hotel.rentARoom('Geroge', 'maisonette', 6);
    
    hotel.roomService(3, 'housekeeping');
    hotel.roomService(3, 'drink');
    hotel.roomService(2, 'room');
    
    console.log(hotel.report());
    


}

solve();