const quoteDescription = document.querySelector(".quote");
const authorDescription = document.querySelector(".author");

const changeQuotes = document.querySelector(".change-quote")


async function getQuotes() {
  let quotesFile = "./js/quotes.json";
  const res = await fetch(quotesFile);
  const data = await res.json();
  let random = Math.floor(Math.random() * data.length);

  let valueLang = changeLang.value;
  if (valueLang == "en") {
    quoteDescription.innerText  = `“${data[random].en.text}.”`;
    authorDescription.innerText = data[random].en.author;
    return;
  }
  if (valueLang === "ru") {
    quoteDescription.innerText  = `“${data[random].ru.text}.”`;
    authorDescription.innerText = data[random].ru.author;
    return;
  }
}
getQuotes();

changeQuotes.addEventListener('click', getQuotes)
changeLang.addEventListener("change", getQuotes);