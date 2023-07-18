const lightMode = {  primary: "#074C4E",
  secondary: "#F86F2D",
  success: "#4ABC86",
  error: "#EA3838",
};

// type Colors = typeof lightMode;

const darkMode: Colors = {
  primary: "#074C4E",
  secondary: "#F86F2D",
  success: "#4ABC86",
  error: "#EA3838",
};

function getTextComponent(text: string, color: keyof typeof lightMode) {
  //mapeamento
}

getTextComponent("asdasd", "secondary");
