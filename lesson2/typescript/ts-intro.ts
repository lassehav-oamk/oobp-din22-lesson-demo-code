let cityObject = {
  name: "London",
  population: 1000000,
  isCapital: true
}

function printCityPopulation(city) {
  console.log(city.name +
  " has a population of "
  + city.population);    
}

interface City {
  name: string;
  population: number;
  isCapital: boolean;
}


let cityTsObject: City = {
  name: "London",
  population: 1000000,
  isCapital: true
}

function printCityPopulationTs(city: City) {
  console.log(city.name +
  " has a population of "
  + city.population);    
}


