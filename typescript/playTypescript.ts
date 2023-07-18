// Tipagem estática
function flipCoin() {
  return Math.random() < 0.5 ? "cara" : "coroa";
}
const result = flipCoin();

if (result === "cara") {
  console.log("Você ganhou!");
} else {
  console.log("Você perdeu!");
}
