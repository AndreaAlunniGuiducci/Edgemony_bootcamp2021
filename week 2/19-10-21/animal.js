function esercizioIf (){
  let animal = prompt(`Animale preferito:\n 1. Dog \n 2. Cat \n 3. Goldfish \n 4. Monkey \n 5. Panda`);

  if (animal === `1`){
    console.log(`Chose the Dog`);
  }  
  else if(animal === `2`){
    console.log(`Chose the Cat`);
  } 
  else if (animal === `3`){
    console.log(`Chose the Goldfish`);
  } 
  else if (animal === `4`){
    console.log(`Chose the Monkey`);
  } 
  else if (animal === `5`){
    console.log(`Chose the Panda`);
  } 
  else {
    console.log(`Animal not found`);
  } 
}

function esercizioSwitch(){
  let animal = prompt(`Animale preferito:\n 1. Dog \n 2. Cat \n 3. Goldfish \n 4. Monkey \n 5. Panda`);
  switch(animal){
  case `1`: 
    console.log(`chose the Dog`);
  break;
  case `2`: 
    console.log(`chose the Cat`);
  break;
  case `3`: 
    console.log(`chose the Goldfish`);
  break;
  case `4`: 
    console.log(`chose the Monkey`);
  break;
  case `5`: 
    console.log(`chose the Panda`);
  break;
  default:
    console.log(`Animal not found`);
  }
}

function esercizioTernary(){
  let animal=["Dog", "Cat", "Goldfish", "Monkey", "Panda"];
  let question  = prompt(`Animale preferito:\n 1. Dog \n 2. Cat \n 3. Goldfish \n 4. Monkey \n 5. Panda`) -1;
  let choseAnimal = question in animal ? `Chose the ${animal[question]}` : `Animal not found`;
  console.log(choseAnimal);
}