function calculateVAT(price){
    if(price <0 || isNaN(price)){
        return "invalid";
    }
    else{
        let vat= price*7.5/100;
        return vat +' ' +"Taka";
    }
}


function validContact(contact) {
    let number = contact.toString();
    let firsttNumber = number.slice(0, 2)
    if(typeof(contact) !== 'string'){
        return false;
    }
    if (number.length === 11) {
        if (firsttNumber === '01') {
            if (number.includes(' ')) {
                return false;
            }else{
                return true;
            }
        } else {
            return false;

        }
    } else {
        return false;
    }
}


function willSuccess(marks){
    let count =0 ;
    for(let num =0; num<marks.length;num++){
        if (typeof marks[num]!== "number") {
            return "invalid";
        }
        if(marks[num]>50){
            count++;
        }
    }
    if (count<marks.length / 2) {
        return true;
    } else {
        return false;
    }
}
const marks=willSuccess([50,60,70,40,30,]);
console.log(marks);