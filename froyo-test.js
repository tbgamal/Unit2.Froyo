// create userInput
const userInputString = prompt(
  "Please enter your selected froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  const stringArray = userInputString.split(",");

  const froyo = {
    flavor: []
  };

  // console.log (froyo[key])
  
  function orders(froyo.flavor){
    for (let i = 0 ; i < stringArray.length; i++) {
      // let flavorArray =  froyo.flavor + str
      if (stringArray [i] in orders){
        froyo.flavor [flavorArray[i]] += 1;
      } 
      else {
        froyo.flavor [flavorArray [i]] = 1;
      }    
  }

        
      
// for (const key in froyo){
//   if (froyo[key]) {
//     froyo[key]++;
//   }
//   else {
//     froyo[key] = 1;
//   }
// }
    return froyo.flavor
  }

  console.log (`You have ordered these flavors \n${orders(stringArray)}`)
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