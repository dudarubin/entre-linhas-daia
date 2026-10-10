# Entre Linhas

Site vitrine da **Entre Linhas**, marca de crochê feito à mão da artesã **Daia Albuquerque**.

🔗 **Site ao vivo:** [dudarubin.github.io/entre-linhas-daia](https://dudarubin.github.io/entre-linhas-daia/)

## Sobre o projeto

O site apresenta as peças da Daia, conta um pouco sobre ela e leva o visitante direto ao contato pelo WhatsApp ou pelo Instagram para fazer encomendas. Como a maioria das clientes chega pelo Instagram, o layout foi pensado para funcionar bem no celular.

Projeto pessoal, feito do zero por mim, sem frameworks, para praticar os fundamentos do front-end.

## Tecnologias

- HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- CSS3: Grid, Flexbox, variáveis CSS e media queries
- JavaScript puro
- Google Fonts: Fraunces (títulos) e Karla (texto)

## Funcionalidades

- Galeria responsiva que passa de 3 para 1 coluna conforme o tamanho da tela
- Layout adaptado para celular, tablet e computador
- Imagens otimizadas em WebP
- Paleta de cores tirada da logo e organizada em variáveis CSS
- Ano do rodapé atualizado automaticamente com JavaScript
- Favicon

## O que aprendi nesse projeto

- **Grid responsivo sem media queries:** com `repeat(auto-fit, minmax(220px, 1fr))`, o próprio navegador decide quantas colunas cabem na tela.
- **Imagens dentro do grid:** toda imagem tem um tamanho natural. Sem `width: 100%`, uma foto de 800px empurra a coluna e estoura o layout.
- **`object-fit: cover`:** faz a foto preencher um espaço quadrado ou redondo sem ficar esticada nem achatada.
- **Os eixos do Flexbox:** `justify-content` alinha no eixo principal e `align-items` no eixo cruzado. Trocar um pelo outro explica por que algo "não centraliza".
- **Herança e seletores:** `text-align` é herdado pelos elementos de dentro, então para centralizar só um título usei um seletor descendente (`#sobre h2`).
- **DOM:** encontrar um elemento com `getElementById` e trocar o texto dele com `textContent`.
- **Otimização de imagens:** redimensionar e converter para WebP deixa o site muito mais leve, o que importa para quem acessa pelo 4G.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/dudarubin/entre-linhas-daia.git
   ```
2. Abra o arquivo `index.html` no navegador.

Não precisa instalar nada.

## Estrutura

```
entre-linhas-daia/
├── index.html      # página única
├── css/style.css   # estilos
├── js/script.js    # ano automático no rodapé
└── assets/         # logo, favicon e fotos das peças
```

## Autora

Feito por **Eduarda Rubin**, estudante de Ciência da Computação na PUCRS.

[GitHub](https://github.com/dudarubin) · [LinkedIn](https://linkedin.com/in/eduardar)
