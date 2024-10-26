//random password generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '#$*@-';

    let allowedchars = '';
    let password = '';

    allowedchars += includeLowercase? lowercase: '';
    allowedchars += includeUppercase? uppercase: '';
    allowedchars += includeNumbers? nums: '';
    allowedchars += includeSymbols? symbols: '';

    if(length <= 0){
        return `password length must be at least 1`
    }
    if(allowedchars === 0){
        return `at least 1 set of characters need to be selected`
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex]
    }




    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols)

console.log(`Generated Password: ${password}`)
