function solve() {
  
  let obj = {};
    for(let i = 0;i < input.length; i++){
        if(i % 2 == 0){
            if(!obj.hasOwnProperty(input[i])){
                let key = input[i];
                obj[key] = 0;
            }
        } else{
          obj[input[i -1]] += Number(input[i]);

        }
    }

    console.log(JSON.stringify(obj));
}