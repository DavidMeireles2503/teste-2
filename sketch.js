function setup() {
  createCanvas(600, 600);// largura e altura da tela
  background(250); // representa a cor branca
}

function draw() { // desenho
  background(255); // representa a cor branca
 
  // Desenhar o centro da flor
  fill('#FFFFFF'); // Vermelho
  ellipse(200, 200, 100, 100); // Centro da flor (x,y, largura, altura)
 
  // Des#00D9F8s pétalas
  fill('#F1749F'); // Verde
  ellipse(200, 100, 100, 160); // Pétala superior
  ellipse(200, 300, 100, 160); // Pétala inferior
  ellipse(100, 200, 160, 100); // Pétala esquerda
  ellipse(300, 200, 160, 100); // Pétala direita
 
  // Desenhar o cauleor
  rect (190, 320, 20, 200); //Caule da flor (x, y, largura, altura)
}