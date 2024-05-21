/* MAIN PAGE CODE */

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

function goToSpiritGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-spirit-ghost.html";
}

function goToWraithGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-wraith-ghost.html";
}

function goToPhantomGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-phantom-ghost.html";
}

function goToPoltergeistGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-poltergeist-ghost.html";
}

function goToBansheeGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-banshee-ghost.html";
}

function goToJinnGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-jinn-ghost.html";
}

function goToMareGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-mare-ghost.html";
}

function goToRevenantGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-revenant-ghost.html";
}

function goToShadeGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-shade-ghost.html";
}

function goToDemonGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-demon-ghost.html";
}

function goToYureiGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-yurei-ghost.html";
}

function goToOniGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-oni-ghost.html";
}

function goToYokaiGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-yokai-ghost.html";
}

function goToHantuGhost() {
  window.location.href = "../phasmo-ghosts/phasmo-hantu-ghost.html";
}

function goToGoryoGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-goryo-ghost.html";
}

function goToMylingGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-myling-ghost.html";
}

function goToOnryoGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-onryo-ghost.html";
}

function goToTwinsGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-twins-ghost.html";
}

function goToRaijuGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-raiju-ghost.html";
}

function goToObakeGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-obake-ghost.html";
}

function goToMimicGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-mimic-ghost.html";
}

function goToMoroiGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-moroi-ghost.html";
}

function goToThayeGhost() {
  window.location.href= "../phasmo-ghosts/phasmo-thaye-ghost.html";
}

function goToDeogenGhost() {
  window.location.href="../phasmo-ghosts/phasmo-deogen-ghost.html";
}
