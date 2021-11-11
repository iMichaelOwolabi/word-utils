const characterCounter = (text) => {
  return text.length;
}

const wordCounter = (text) => {
  return text.split(" ").length;
}

const caseConverter = (text, toCase) => {
  switch (toCase) {
    case 'lower':
      return text.toLowerCase();
    
    case 'upper':
      return text.toUpperCase();
  }
}

const display = () => {
  document.getElementById('test').innerHTML = "document.getElementById('char-count').innerText"
}

const showNumberOfWords = () => {
  document.getElementById('word-count').innerHTML = document.getElementById("char-count").textContent;
}

const charCountText = document.getElementById('char-count');
const wordCountText = document.getElementById('word-count');
const clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', display);
charCountText.onkeyup = () => {
  const text = charCountText.value;
  document.getElementById('word-count').innerHTML = wordCounter(text);
}