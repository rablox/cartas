const baraja = ["1D", "1C", "2C", "3C", "4C", "5C"];
baraja.push("6C", "7C", "8C");
baraja.unshift("0C");
baraja.pop();
baraja.shift();

baraja.forEach((element, index) => {
  if (element.includes("D")) {
    console.log(`${index + 1} ${element}`);
  }
});

const palos = ["C", "D", "P", "R"];
const barajaCompleta = [];

for (let i = 0; i < palos.length; i++) {
  for (let j = 1; j < 14; j++) {
    barajaCompleta.push(`${j}${palos[i]}`);
  }
}

console.log(barajaCompleta);

const cartasASacar = parseInt(prompt("¿Cuántas cartas quieres sacar?"));
if (cartasASacar > barajaCompleta.length) {
  console.log("No hay suficientes cartas en la baraja.");
} else {
  // Barajar la baraja
  for (let i = barajaCompleta.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [barajaCompleta[i], barajaCompleta[j]] = [barajaCompleta[j], barajaCompleta[i]];
  }

  const cartasSacadas = [];

  for (let i = 0; i < cartasASacar; i++) {
    const carta = barajaCompleta.pop();
    cartasSacadas.push(carta);
  }

  const cuentas = {
    C: 0,
    D: 0,
    P: 0,
    R: 0,
  };

  cartasSacadas.forEach((carta) => {
    const palo = carta.charAt(carta.length - 1);
    cuentas[palo]++;
  });

  console.log(`Cartas sacadas: ${cartasSacadas.join(", ")}`);
  console.log(`Cuentas:`);
  for (const palo in cuentas) {
    console.log(`${palo}: ${cuentas[palo]}`);
  }
}
