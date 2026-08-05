// uppercase
// lowercase
// trim
// const name = 'alThaf'
// console.log(name.toUpperCase())
// const sliced = name.slice(1)
// console.log("slid",sliced);

// replace
// const us = '299@'
// const replaced = us.replace('@', 'rupee')
// console.log(replaced);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  for(const flight of flights.split('+')){
    const [type, from, to,time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '⚠' : ''} ${type.replaceAll('_', ' ').trim()} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} ${time.replace(':', 'h')}.`.padStart(35)
    console.log(output);
    
  }
