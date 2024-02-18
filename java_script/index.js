document.getElementById("demo").innerHTML = (5 + 6)/11;
document.getElementById("demo1").innerHTML = (8 + 6 ) * 12;


 function alpbt ( a , b ) {

if (a > b ) {
    return true;
    
  }
  else {
      return false ;
  }


}
console.log(alpbt(2,1));


function randomInt(min , max){
 return Math.floor(Math.random() * ( max - min + 1 ) + min )


}

console.log(" The random  number between 1 to 6 is" + " " + randomInt(1 , 6) );

const StudentName = ["TOki" , "Hanif", "Hasib" , "Sabbir" , "Sumon" , "Atiq"];

console.log(StudentName.sort());

const Numbers = [ 5, 15 , 25 , 45 , 86 , 96 , 65  ]

console.log(Numbers.sort(function(a , b){
  return a - b
}))

function isLeapyear(year) {
  if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0) ) ){
    console.log(`${year} is a leap year`);
  }
  else{
    console.log(`${year} is not a leap year`);
  }
}

isLeapyear(2024);

const  Vowel = [ "a" , "e" , "i" ,"o" , "u" , "A" , "E" , "I" ,"O" , "U"];

function countVowel (sentense){
     let count = 0;
      let letter = Array.from(sentense);

      letter.forEach(function(value){
           if(Vowel.includes(value)){
             count++;
           }

      })
   return count;
}

console.log(countVowel("I love Bangladesh"));