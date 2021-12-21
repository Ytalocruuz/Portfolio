
//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir. <br><br> 1 ano de experiência";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML. <br><br> 1 ano de experiência";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. <br><br> 1 ano de experiência";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe. <br><br> 2 meses de experiência";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Sass (o pré-processador) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass. <br><br> 9 meses de experiência";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. <br><br> 4 meses de experiência";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React. <br><br> 4 meses de experiência";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript. <br><br> 4 meses de experiência";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `*passe o mouse no card para ler*`;
  });
}
