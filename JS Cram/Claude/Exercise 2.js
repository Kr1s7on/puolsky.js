function ageGroup(age) {    
    if (age < 20) {
      console.log("Hello yungin!");
    } 
    
    else if (age >= 20 && age < 59) {
      console.log("Wagwan bigman!");
    } 
    
    else {
      console.log("Respekt my oldman!");
    }
}
  

// Test your function
console.log(ageGroup(15));
console.log(ageGroup(25));
console.log(ageGroup(60));
