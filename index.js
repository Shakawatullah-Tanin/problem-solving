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
// const marks=willSuccess([50,60,70,40,30,]);
// console.log(marks);


function validProposal(person1,person2){
    if(Math.abs(person1.age-person2.age)>7){
        return false;
    }
    if(person1.gender===person2.gender){
        return false;
    }
    else{
        return true;
    }
}
const people1={name:"alam",age:20,gender:"male"};
const people2={name:"asika",age:14,gender:"female"};
// const people2=["taanon", 20, false];
const person = validProposal(people1,people2);
console.log(person);