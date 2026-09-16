
function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}

console.log(greet("Chet", "Citu"));


const greetmodern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greetmodern("Chet", "Citu"));
