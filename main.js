// // 1 Potion rødbede tarter

//  // her gemmer vi værdierne i en variable. Vi bruger let fordi tallet godt kan ændre sig.

// // 150 g rødbede
// let rodbede = 150;
// // 2,25 spsk eddike
//   let eddike = 2.25;
// // 0,75 spsk dijonsennep
//   let dijonsennep = 0.75;
// // 0,75 spsk olie
//   let olie = 0.75;
// // 1.5 spsk sukker
//   let sukker = 1.5;
// // Salat
//   let salt = 'salt';
// // Brønkase
//   let bronkase = 'Brønkase';


// // her henter vi værdien af vores dropdown med hvor mange portioner man vælger.
// let selectValue = document.querySelector('.select');

// // Nu skal vi lave logikken.

// // når man vælger antal portioner skal den finde ud af værdien af den valgte dropdown. 

// // her laver vi en funktion med en eventlistener der lytter efter ændringer "change" på dropdown. dvs når værdien ændrer sig skal den eksekvere noget kode. 

// selectValue.addEventListener('change', function() {
//   // når værdien er valgt skal vi skrive hvad den så skal gøre herinde.
  
// // her henter vi html elementerne som vi skal bruge.

// // henter klassen value-1
// const rodbedeValue = document.querySelector('.value-1');
// // henter klassen value-2
// const eddikeValue = document.querySelector('.value-2');
// // henter klassen value-3
// const dijonsennepValue = document.querySelector('.value-3');
// // henter klassen value-4
// const olieValue = document.querySelector('.value-4');
// // henter klassen value-5
// const sukkerValue = document.querySelector('.value-5');
  
  
//   /* hvis man vælger 1 portion skal der vises mængden af 1 portion og ikke lægges noget sammen.
// */
//  if(selectValue.value == 1) {
//    rodbedeValue.textContent = rodbede;
//    eddikeValue.textContent = eddike;
//    dijonsennepValue.textContent = dijonsennep;
//    olieValue.textContent = dijonsennep;
//    olieValue.textContent = olie;
//    sukkerValue.textContent = sukker;
//  /*
// Hvis man vælger 2 portioner skal ingrediensernes mængde ganges med 2 og vises. 
// */
//  } else if(selectValue.value == 2) {
//    rodbedeValue.textContent = rodbede * 2;
//    eddikeValue.textContent = eddike * 2;
//    dijonsennepValue.textContent = dijonsennep * 2;
//    olieValue.textContent = dijonsennep * 2;
//    olieValue.textContent = olie * 2;
//    sukkerValue.textContent = sukker * 2;
//  /*
// Hvis man vælger 3 portioner skal ingrediensernes mængde ganges med 2 og vises. 
// */
//  } else if(selectValue.value == 3) {
//     rodbedeValue.textContent = rodbede * 3;
//    eddikeValue.textContent = eddike * 3;
//    dijonsennepValue.textContent = dijonsennep * 3;
//    olieValue.textContent = dijonsennep * 3;
//    olieValue.textContent = olie * 3;
//    sukkerValue.textContent = sukker * 3;
//  /*
// Hvis man vælger 4 portioner skal ingrediensernes mængde ganges med 2 og vises. 
// */
//  } else if(selectValue.value == 4) {
//     rodbedeValue.textContent = rodbede * 5;
//    eddikeValue.textContent = eddike * 5;
//    dijonsennepValue.textContent = dijonsennep * 5;
//    olieValue.textContent = dijonsennep * 5;
//    olieValue.textContent = olie * 5;
//    sukkerValue.textContent = sukker * 5;
//  }
  
// }) // her slutter vores funktion

let values = document.getElementsByClassName('value')

let selectValue = document.querySelector('.select');

selectValue.addEventListener('change', function() {
  for(let i=0; i<values.length; i++){
    if(values[i].innerText){
      values[i].innerText = values[i].dataset.recipe * selectValue.value
    }
  }
})
