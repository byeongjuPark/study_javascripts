function name(parameter1, parameter2, parameter3) {
  //todo
}

//Arrow Function
let Functions = (Element) => {
  //todo
};
let cars = ["venz", "volvo"];

cars.forEach((car) => {
  console.log(car);
});

function printRestParams(...args) {
  let restParam = (arg) => {
    console.log(`arg : ${arg}`);
  };

  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, 5, 6, 7);
}
