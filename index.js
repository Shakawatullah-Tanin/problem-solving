function calculateVAT(price) {
    if (price < 0 || isNaN(price) || typeof (price) != 'number') {
        return "invalid";
    }
    else {
        let vat = price * 7.5 / 100;
        return vat + ' ' + "Taka";
    }
}


function validContact(contact) {
    let number = contact.toString();
    let firsttNumber = number.slice(0, 2)
    if (typeof (contact) !== 'string') {
        return false;
    }
    else if (number.length === 11) {
        if (firsttNumber === '01') {
            if (number.includes(' ')) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;

        }
    } else {
        return false;
    }
}


function willSuccess(marks) {
    let count = 0;
    for (let num = 0; num < marks.length; num++) {
        if (typeof marks[num] !== "number") {
            return "invalid";
        }
        else if (marks[num] >= 50) {
            count++;
        }
    }
    if (count > marks.length / 2) {
        return true;
    } else {
        return false;
    }
}



function validProposal(person1, person2) {
    if (typeof (person1) != "object" || typeof (person2) != "object") {
        return "invalid";
    }
    else if (Math.abs(person1.age - person2.age) > 7) {
        return false;
    }
    else if (person1.gender === person2.gender) {
        return false;
    }
    else {
        return true;
    }
}


function calculateSleepTime(times) {
    if (!Array.isArray) {
        return "invalid"
    }
    else {
        let totalSecond = 0;
        for (let i = 0; i < times.length; i++) {
            if (typeof (times[i]) == "number") {
                totalSecond = totalSecond + times[i]
            }
            else {
                return "invalid";
            }
        }
        let hour = Math.floor(totalSecond / 3600);
        totalSecond %= 3600;
        let minute = Math.floor(totalSecond / 60);
        let second = totalSecond % 60;
        let sleep={hour,minute,second}
        return sleep;
    }
}
