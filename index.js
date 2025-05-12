//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Conversion function
function cToF(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Step 2: Convert all temps to Fahrenheit only
const allTempsInFahrenheit = [
  day1TempF, cToF(day2TempC),
  day3TempF, cToF(day4TempC),
  day5TempF, cToF(day6TempC),
  day7TempF, cToF(day8TempC),
  day9TempF, cToF(day10TempC),
  day11TempF, cToF(day12TempC),
  day13TempF, cToF(day14TempC),
  day15TempF, cToF(day16TempC),
  day17TempF, cToF(day18TempC),
  day19TempF, cToF(day20TempC),
  day21TempF, cToF(day22TempC),
  day23TempF, cToF(day24TempC),
  day25TempF, cToF(day26TempC),
  day27TempF, cToF(day28TempC),
  day29TempF, cToF(day30TempC)
];

// Step 3: Calculate totals and averages
const tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((acc, val) => acc + val, 0);
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allTempsInFahrenheit.length;

// Convert each Fahrenheit temp to Celsius for totals
const allTempsInCelsius = allTempsInFahrenheit.map(fToC);
const tot_temperature_in_celsius = allTempsInCelsius.reduce((acc, val) => acc + val, 0);
const avg_temperature_in_celsius = tot_temperature_in_celsius / allTempsInCelsius.length;

// Optional logs
console.log("Total F:", tot_temperature_in_fahrenheit.toFixed(2));
console.log("Average F:", avg_temperature_in_fahrenheit.toFixed(2));
console.log("Total C:", tot_temperature_in_celsius.toFixed(2));
console.log("Average C:", avg_temperature_in_celsius.toFixed(2));

// Step 4: Export for tests
module.exports = {
  tot_temperature_in_fahrenheit,
  avg_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_celsius
};



