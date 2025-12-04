let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// console.log(str)

let newStr = "";

for (let i = 0; i <= str.length; i++) {
    while (str[i] == 'o') {
        newStr += str[i];
    }
    console.log(newStr);
}

// for (let char = 0; char < str.length; char++){

// }