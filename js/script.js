document.addEventListener("DOMContentLoaded", () => {
  const phraseOutput = document.querySelector(".phrase-output"),
  phrases = [
  "carving pumpkins",
  "hanging decorations",
  "filling goody bags",
  "preparing costume",
  "calibrating spook-o-meter",
  "contacting spirits",
  "raising undead"
  ],
  phraseDelay = 1700,
  displayPhrases = () => {
    let delay = 0;
    phrases.forEach(phrase => {
      setTimeout(() => phraseOutput.textContent = phrase, delay);
      delay += phraseDelay;
    });
  };

  displayPhrases();

  setInterval(displayPhrases, (phrases.length * phraseDelay));
});