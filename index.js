//switch, an alternative to if statements

/*
let day = 'uu' ;

switch(day){
    case 1:
        console.log(`it is Monday`);
        break;
    case 2:
        console.log(`it is Tuesday`);
        break;
    case 3:
        console.log(`it is Wednesday`);
        break;
    case 4:
        console.log(`it is Thursday`);
        break;
    case 5:
        console.log(`it is Friday`);
        break;
    default:
        console.log(`nah bro`)
}
        */


let testscore = 92;
let letterGrade;

switch(true){
    case testscore >= 90:
        letterGrade = "A"
        break;
    case testscore >= 80:
        letterGrade = "B"
        break;
    case testscore >= 70:
        letterGrade = "C"
        break;
    case testscore >= 60:
        letterGrade = "D"
        break;
    default:
        letterGrade = "F"
        break;
}