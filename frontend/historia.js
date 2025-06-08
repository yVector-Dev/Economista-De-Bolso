const moedas = [
  {
    codigo: "USD",
    nome: "Dólar Americano",
    bandeira: "https://flagcdn.com/us.svg",
    historia: "Criado em 1792, tornou-se a moeda de reserva mundial após a Segunda Guerra Mundial."
  },
  {
    codigo: "BRL",
    nome: "Real Brasileiro",
    bandeira: "https://flagcdn.com/br.svg",
    historia: "Introduzido em 1994 no Plano Real, substituindo o cruzeiro real para conter a hiperinflação."
  },
  {
    codigo: "EUR",
    nome: "Euro",
    bandeira: "https://flagcdn.com/eu.svg",
    historia: "Criado em 1999 como moeda eletrônica e em circulação física desde 2002 na União Europeia."
  },
  {
    codigo: "GBP",
    nome: "Libra Esterlina",
    bandeira: "https://flagcdn.com/gb.svg",
    historia: "Moeda mais antiga ainda em circulação, datada do século VIII no Reino Unido."
  },
  {
    codigo: "JPY",
    nome: "Iene Japonês",
    bandeira: "https://flagcdn.com/jp.svg",
    historia: "Introduzido em 1871 na modernização do Japão, substituindo moedas do período feudal."
  },
  {
    codigo: "CNY",
    nome: "Yuan Chinês",
    bandeira: "https://flagcdn.com/cn.svg",
    historia: "Modernizado em 1948, possui raízes desde a dinastia Tang na China antiga."
  },
  {
    codigo: "INR",
    nome: "Rupia Indiana",
    bandeira: "https://flagcdn.com/in.svg",
    historia: "Uma das moedas mais antigas do mundo, com origem no século VI a.C."
  },
  {
    codigo: "AUD",
    nome: "Dólar Australiano",
    bandeira: "https://flagcdn.com/au.svg",
    historia: "Adotado em 1966, substituindo a libra australiana."
  },
  {
    codigo: "CAD",
    nome: "Dólar Canadense",
    bandeira: "https://flagcdn.com/ca.svg",
    historia: "Em uso desde 1858, conhecido como 'loonie' pelo pássaro na moeda de 1 dólar."
  },
  {
    codigo: "ZAR",
    nome: "Rand Sul-Africano",
    bandeira: "https://flagcdn.com/za.svg",
    historia: "Criado em 1961, quando a África do Sul tornou-se uma república."
  }
];

const container = document.querySelector('.grid');

moedas.forEach(moeda => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${moeda.bandeira}" alt="Bandeira de ${moeda.nome}">
    <h3>${moeda.nome} (${moeda.codigo})</h3>
    <p>${moeda.historia}</p>
  `;
  container.appendChild(card);
});
