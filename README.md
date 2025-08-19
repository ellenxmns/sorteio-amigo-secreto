# 🎁 Projeto Amigo Secreto

Este é o **meu primeiro projeto** desenvolvido com HTML, CSS e JavaScript, como parte do início dos meus estudos em **lógica de programação**. A proposta foi criar uma aplicação simples e interativa que sorteia nomes de forma aleatória, simulando a tradicional brincadeira de **Amigo Secreto**.

Este projeto marca o começo da minha jornada no mundo da programação, e foi uma ótima oportunidade para aplicar conceitos básicos de lógica, manipulação do DOM e interatividade com JavaScript.

---

## 📜 Descrição

O sistema permite que você adicione uma lista de nomes e, ao clicar em um botão, sorteie aleatoriamente um nome dessa lista. O nome sorteado é exibido na tela, e é removido da lista de próximos sorteios para evitar repetições.

Se todos os nomes já foram sorteados, o sistema reinicia automaticamente a lista, permitindo um novo ciclo de sorteios.

---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da interface (arquivo `style.css`).
- **JavaScript**: Lógica do sorteio e manipulação da interface (arquivo `app.js`).

---

## 🚀 Funcionalidades

- ✅ Adicionar nomes à lista.
- ✅ Exibir a lista atual de amigos.
- ✅ Sortear um nome aleatoriamente.
- ✅ Evitar que o mesmo nome seja sorteado mais de uma vez.
- ✅ Reiniciar a lista de sorteio automaticamente após todos serem sorteados.

---

## 📂 Estrutura dos Arquivos

- index.html: Página principal do projeto
- style.css: Estilos da página
- app.js: Lógica de funcionamento (JavaScript)
- assets: Imagens utilizadas na interface (ex: ícones, banner)

---

## 🧠 Como funciona o código?

### JavaScript (`app.js`)

- `amigos`: array que guarda todos os nomes adicionados.
- `amigosNaoSorteados`: array auxiliar para controlar quem ainda não foi sorteado.
- `adicionarAmigo()`: adiciona o nome digitado à lista e atualiza a interface.
- `atualizarLista()`: exibe os nomes adicionados na tela.
- `sortearAmigo()`: sorteia aleatoriamente um nome da lista de não sorteados e exibe no HTML. Se todos já foram sorteados, reinicia a lista.

---

## 💡 Como usar localmente

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Adicione os nomes desejados.
4. Clique em **Sortear amigo** e veja o resultado na tela.

---

## 👨‍💻 Desenvolvedor

Feito com 💙 por **Ellen Ximenes**

<img src="https://github.com/user-attachments/assets/80d0caa6-8e58-4c49-a688-f81b24826897" alt="Foto" width="150" height="200">

Este projeto representa meu primeiro passo no universo da programação. Estou animada para aprender mais e evoluir!

Se quiser acompanhar minha jornada:

- GitHub: [https://github.com/ellenxmns]
- LinkedIn: [https://www.linkedin.com/in/ellen-cristina-ximenes-307993172/]

Obrigada 😊
