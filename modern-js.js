/*
function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}

console.log(greet("Chet", "Citu"));


const greetmodern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greetmodern("Chet", "Citu"));

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;          // ดึงค่าออกมาเป็นตัวแปร
const updated = { ...student, year: 3 };    // copy แล้วแก้บางค่า

console.log(student,updated);
const score = [90, 80, 70, 60, 50];
*/

const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
  { route: "NGV-4", passengers: 51, late: false },
];

for (let i = 0; i < buses.length; i++) {
  console.log(`buses ${buses[i].route} passengers ${buses[i].passengers} คน และ ${buses[i].late ? "มาสาย" : "ตรงเวลา"}`);
}
for (const bus of buses) {
  console.log(bus.route, bus.passengers, bus.late);
}

const routes = buses.map((bus) => bus.route);
console.log(routes);

const lateBuses = buses.filter((bus) => bus.late);
const heavyBuses = buses.filter((bus) => bus.passengers > 50);
console.log(lateBuses);
console.log(heavyBuses);

const totalPassengers = buses.reduce(
    (total, bus) => total + bus.passengers, 
    0
);

const totalPassengersOfHeavyBuses = buses.filter((bus) => bus.passengers > 50).reduce(
    (total, bus) => total + bus.passengers,
    0
);

console.log(totalPassengers);


