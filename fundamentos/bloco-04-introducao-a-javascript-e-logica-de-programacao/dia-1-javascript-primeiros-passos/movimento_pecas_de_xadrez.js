let peca;
peca = peca.toLowerCase();

switch (peca) {
  case "peao":
    console.log("Uma casa para a frente.");
    break;

  case "torre":
    console.log("Quantas casas quiser, apenas na horizontal e na vertical.");
    break;

  case "bispo":
    console.log("Quantas casas quiser, nas diagonais.");
    break;

  case "cavalo":
    console.log("Em L (duas casas para um lado, e uma perpendicular).");
    break;

  case "rainha":
    console.log("Quantas casas quiser, para qualquer direção.");
    break;

  case "rei":
    console.log("Uma casa para qualquer.");
    break;

  default:
    console.log("Insira uma peça válida")
  }
