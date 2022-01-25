Splitting()


function updateText(e) {
  multiplierWidth = e.offsetX / window.innerWidth;
  multiplierHeight = e.offsetY / window.innerHeight;
  randomWeight =  multiplierWidth * (200 - 35) + 35;
  randomWidth =  multiplierHeight * (200 - 100) + 100;
  myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
}

window.addEventListener("mousemove", updateText)
