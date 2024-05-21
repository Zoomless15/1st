function goToMainPage() {
  window.location.href = "../phasmo-project/1-phasmo-project.html";

  const button = document.querySelector('.backToMainPage');
  button.addEventListener('mousemove', (e) => {
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Return to Main Page';
    tooltip.classList.add('tooltip');
    tooltip.style.top = `${e.clientY + 10}px`;
    tooltip.style.left = `${e.clientX + 10}px`;
    document.body.appendChild(tooltip);
    setTimeout(() => tooltip.remove(), 2000);
  });
}

function goToGhostPage() {
  window.location.href = "../phasmo-project/1-2-ghosts.html";
}

function goToGhostSpeed() {
  window.location.href ="../phasmo-project/1-2-ghosts-speed.html";
}

function goToGhostAbility() {
  window.location.href ="../phasmo-project/1-2-ghosts-ability.html";
}

function goToGhostHint() {
  window.location.href = "../phasmo-project/1-2-ghosts-hint.html";
}

function goToGhostExclude() {
  window.location.href = "../phasmo-project/1-2-ghosts-exclude.html";
}

function colorWords(wordsAndColors) {
  const textElements = document.querySelectorAll(".ability-text");

  textElements.forEach(textElement => {
      let text = textElement.textContent;
      wordsAndColors.forEach(([word, color]) => {
          const regex = new RegExp(`\\b${word}\\b`, 'gi');
          text = text.replace(regex, `<span class="highlight-ghost-name" style="color: ${color}">${word}</span>`);
      });
      textElement.innerHTML = text;
  });
}

colorWords
([["Banshee", "blue"], 
["Demon", "green"],
["Deogen", "gold"],
["Goryo", "darkblue"], 
["Jinn", "darkgreen"],
["Hantu", "lightblue"],
["Mare", "purple"],
["Mimic", "brown"],
["Moroi", "darkred"],
["Myling", "white"],
["Obake", "lightblue"],
["Oni", "darkred"],
["Onryo", "purple"],
["Phantom", "white"],
["Poltergeist", "gray"],
["Raiju", "darkblue"],
["Revenant", "red"],
["Shade", "darkgray"],
["Spirit", "white"],
["Thaye", "purple"],
["The Twins", "blue"],
["Wraith", "white"],
["Yokai", "green"],
["Yurei", "white"]
]);