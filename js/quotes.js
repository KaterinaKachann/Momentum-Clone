const quoteDescription = document.querySelector(".quote");
const authorDescription = document.querySelector(".author");

const changeQuotes = document.querySelector(".change-quote");

async function getQuotes() {
  let quotesFile = "./js/quotes.json";
  const res = await fetch(quotesFile);
  const data = await res.json();

  let random = Math.floor(Math.random() * data.length);

  if (btnLangOne.checked) {
    quoteDescription.innerText = `“${data[random].en.text}.”`;
    authorDescription.innerText = data[random].en.author;
  }
  if (btnLangTwo.checked) {
    quoteDescription.innerText = `“${data[random].ru.text}.”`;
    authorDescription.innerText = data[random].ru.author;
  }
}
getQuotes();

changeQuotes.addEventListener("click", getQuotes);
btnLangOne.addEventListener("change", getQuotes);
btnLangTwo.addEventListener("change", getQuotes);
