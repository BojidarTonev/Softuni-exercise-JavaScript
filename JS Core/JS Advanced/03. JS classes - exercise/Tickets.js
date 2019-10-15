function solve(inputArr, orderInput){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for(let i = 0; i < inputArr.length; i++){
        let tokens = inputArr[i].split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    return tickets = tickets.sort((a, b) => {
        if(a[orderInput] < b[orderInput]){
            return -1;
        } else if(a[orderInput] > b[orderInput]){
            return 1;
        }

        return 0;
    });
    
}