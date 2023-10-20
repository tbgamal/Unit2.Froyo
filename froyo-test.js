/* 
  Create a system that:
  1. User inputs order;
  2. Input received by console;
  3. Console returns w/ user's order
  
  Definitions:
  a. user's order = array of flavors (list of strings)
  b. flavor = user prompted items

  Output format:
  - quantity of flavor ordered + name of flavor

*/


// create userInput
// definition for user input

const userInputString = prompt(
  "Please enter your selected froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  const order = userInputString.split(",");
  function flavor (str) {
    selectedOrder = order.slice(str - 1, str)
    // order.splice(str, order.length - 1 - str)
    console.log (selectedOrder)
  }

  flavor(2)

  
  /*========= PLACEHOLDER =============== */

  const froyo = {
    flavor: []
  };
  
  // console.log (froyo[key])
  
  // function orders(froyo.flavor){
  //   for (let i = 0 ; i < stringArray.length; i++) {
  //     // let flavorArray =  froyo.flavor + str
  //     if (stringArray [i] in orders){
  //       froyo.flavor [flavorArray[i]] += 1;
  //     } 
  //     else {
  //       froyo.flavor [flavorArray [i]] = 1;
  //     }    
  // }
  // return froyo.flavor
  // }
  
  // console.log (`You have ordered these flavors \n${orders(stringArray)}`)
  
/*========= PLACEHOLDER =============== */

        






      
// for (const key in froyo){
//   if (froyo[key]) {
//     froyo[key]++;
//   }
//   else {
//     froyo[key] = 1;
//   }
// }
  // console.table (froyo)

// const froyo = {
//   flavor: stringArray,
// }

// console.log (froyo)
// I need to make a loop for flavor to become = userInputString

// for (const key in froyo) {
//   return (Object.values(froyo))
// }

// console.log (`you have ordered ${value}`)


// function orders(str){
//   for (let i = 0 ; i > str.length ; i++) {

//   }
  
//   const orderedFroyo = {
//     flavor [i]: stringArray [i]
//   }
//   console.table (orderedFroyo)
// }