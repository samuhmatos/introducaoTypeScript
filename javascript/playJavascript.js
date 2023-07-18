// Tipagem dinamica
function flipCoin() {
  return Math.random() < 0.5 ? "cara" : "coroa";
}
const result = flipCoin();

if (result === "caara") {
  console.log("Você ganhou!");
} else {
  console.log("Você perdeu!");
}
