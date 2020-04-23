function yearOfbirth(age){
   return 2020-age;
}
function nameAndYear(name,age){
    year = yearOfbirth(age);
    return "My name is " + name + " " + "and I was born in " +year;
}
let name = "Buchra Atkeh";
let age = 36;
let theNameAndYear =nameAndYear(name,age);
console.log(theNameAndYear);
