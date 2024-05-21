
let spiritClicked = false;
let wraithClicked = false;
let phantomClicked = false;
let poltergeistClicked = false;
let bansheeClicked = false;
let jinnClicked = false;
let mareClicked = false;
let revenantClicked = false;
let shadeClicked = false;
let demonClicked = false;
let yureiClicked = false;
let oniClicked = false;
let yokaiClicked = false;
let hantuClicked = false;
let goryoClicked = false;
let mylingClicked = false;
let onryoClicked = false;
let twinsClicked =false;
let raijuClicked = false;
let mimicClicked = false;
let moroiClicked = false;
let deogenClicked = false;
let thayeClicked = false;
let obakeClicked = false;

// reset //

function resetFunctions() {
    const ghostButtons = document.querySelectorAll('.ghost-evidence-arrangement');
    ghostButtons.forEach(button => {
        button.style.color = 'white';
    });

spiritClicked = false;
wraithClicked = false;
phantomClicked = false;
poltergeistClicked = false;
bansheeClicked = false;
jinnClicked = false;
mareClicked = false;
revenantClicked = false;
shadeClicked = false;
demonClicked = false;
yureiClicked = false;
oniClicked = false;
yokaiClicked = false;
hantuClicked = false;
goryoClicked = false;
mylingClicked = false;
onryoClicked = false;
twinsClicked =false;
raijuClicked = false;
mimicClicked = false;
moroiClicked = false;
deogenClicked = false;
thayeClicked = false;
obakeClicked= false;
}

// EMF FUNC // 
function toggleEmf5() { 

  const poltergeistButton = document.getElementById('poltergeist-evidence-button');
  const phantomButton = document.getElementById('phantom-evidence-button');
  const bansheeButton = document.getElementById('banshee-evidence-button');
  const mareButton = document.getElementById('mare-evidence-button');
  const revenantButton = document.getElementById
  ('revenant-evidence-button');
  const demonButton = document.getElementById
  ('demon-evidence-button');
  const yureiButton = document.getElementById
  ('yurei-evidence-button');
  const yokaiButton = document.getElementById
  ('yokai-evidence-button');
  const hantuButton = document.getElementById
  ('hantu-evidence-button');
  const onryoButton = document.getElementById
  ('onryo-evidence-button');
  const mimicButton = document.getElementById
  ('mimic-evidence-button');
  const moroiButton = document.getElementById
  ('moroi-evidence-button');
  const deogenButton = document.getElementById
  ('deogen-evidence-button');
  const thayeButton = document.getElementById
  ('thaye-evidence-button');
  
  

  
  if (!poltergeistClicked) {
      poltergeistButton.style.color = 'red';
      poltergeistClicked = true;
  }
  if (!phantomClicked) {
      phantomButton.style.color = 'red';
      phantomClicked = true;
  }
  if (!bansheeClicked) {
      bansheeButton.style.color = 'red';
      bansheeClicked = true;
  }
  if (!mareClicked) {
      mareButton.style.color = 'red';
      mareClicked = true;
  }

  if (!revenantClicked) {
    revenantButton.style.color = 'red';
    revenantClicked = true;
}

if (!demonClicked) {
  demonButton.style.color = 'red';
  demonClicked = true;
}

if (!yureiClicked) {
  yureiButton.style.color = 'red';
  yureiClicked = true;
}

if (!yokaiClicked) {
  yokaiButton.style.color = 'red';
  yokaiClicked = true;
}

if (!hantuClicked) {
  hantuButton.style.color = 'red';
  hantuClicked = true;
}

if (!onryoClicked) {
  onryoButton.style.color = 'red';
  onryoClicked = true;
}

if (!mimicClicked) {
  mimicButton.style.color = 'red';
  mimicClicked = true;
}

if (!moroiClicked) {
  moroiButton.style.color = 'red';
  moroiClicked = true;
}

if (!deogenClicked) {
  deogenButton.style.color = 'red';
  deogenClicked = true;
}

if (!thayeClicked) {
  thayeButton.style.color = 'red';
  thayeClicked = true;
}
}

// DOTS //

function toggleDots() {
  const spiritButton = document.getElementById('spirit-evidence-button'); 
  const poltergeistButton = document.getElementById('poltergeist-evidence-button');
  const jinnButton = document.getElementById
  ('jinn-evidence-button');
  const mareButton = document.getElementById
  ('mare-evidence-button');
  const revenantButton = document.getElementById
  ('revenant-evidence-button');
  const shadeButton = document.getElementById
  ('shade-evidence-button');
  const demonButton = document.getElementById
  ('demon-evidence-button');
  const hantuButton = document.getElementById
  ('hantu-evidence-button');
  const mylingButton = document.getElementById
  ('myling-evidence-button');
  const onryoButton = document.getElementById
  ('onryo-evidence-button');
  const twinsButton = document.getElementById
  ('twins-evidence-button');
  const obakeButton = document.getElementById
  ('obake-evidence-button');
  const mimicButton = document.getElementById
  ('mimic-evidence-button');
  const moroiButton = document.getElementById
  ('moroi-evidence-button');
    
    
  if (!spiritClicked) {
      spiritButton.style.color = 'red';
      spiritClicked = true;
  }

  if (!jinnClicked) {
    jinnButton.style.color = 'red';
    jinnClicked = true;
}

  if (!poltergeistClicked) {
        poltergeistButton.style.color = 'red';
        poltergeistClicked = true;
    }

    if (!mareClicked) {
      mareButton.style.color = 'red';
      mareClicked = true;
  }

  if (!revenantClicked) {
    revenantButton.style.color = 'red';
    revenantClicked = true;
}

if (!shadeClicked) {
  shadeButton.style.color = 'red';
  shadeClicked = true;
}

if (!demonClicked) {
  demonButton.style.color = 'red';
  demonClicked = true;
}

if (!hantuClicked) {
  hantuButton.style.color = 'red';
  hantuClicked = true;
}

if (!mylingClicked) {
  mylingButton.style.color = 'red';
  mylingClicked = true;
}

if (!onryoClicked) {
  onryoButton.style.color = 'red';
  onryoClicked = true;
}


if (!twinsClicked) {
  twinsButton.style.color = 'red';
  twinsClicked = true;
}


if (!mimicClicked) {
  mimicButton.style.color = 'red';
  mimicClicked = true;
}

if (!obakeClicked) {
  obakeButton.style.color = 'red';
  obakeClicked = true;
}


if (!moroiClicked) {
  moroiButton.style.color = 'red';
  moroiClicked = true;
}

}

//  UV //

function toggleUv() {

  const spiritButton = document.getElementById('spirit-evidence-button'); 
  const wraithButton = document.getElementById
  ('wraith-evidence-button');
  const mareButton = document.getElementById
  ('mare-evidence-button');
  const revenantButton = document.getElementById
  ('revenant-evidence-button');
  const shadeButton = document.getElementById
  ('shade-evidence-button');
  const yureiButton = document.getElementById
  ('yurei-evidence-button');
  const oniButton = document.getElementById
  ('oni-evidence-button');
  const onryoButton = document.getElementById
  ('onryo-evidence-button');
  const twinsButton = document.getElementById
  ('twins-evidence-button');
  const raijuButton = document.getElementById
  ('raiju-evidence-button');
  const moroiButton = document.getElementById
  ('moroi-evidence-button');
  const deogenButton = document.getElementById
  ('deogen-evidence-button');
  const thayeButton =document.getElementById
  ('thaye-evidence-button');
  
  if (!spiritClicked) {
    
    spiritButton.style.color = 'red';
    spiritClicked = true;
  }

  if (!wraithClicked) {
    
    wraithButton.style.color = 'red';
    wraithClicked = true;
  }

  if (!mareClicked) {
    
    mareButton.style.color = 'red';
    mareClicked = true;
  }

  if (!revenantClicked) {
    
    revenantButton.style.color = 'red';
    revenantClicked = true;
  }

  if (!shadeClicked) {
    
    shadeButton.style.color = 'red';
    shadeClicked = true;
  }

  if (!yureiClicked) {
    
    yureiButton.style.color = 'red';
    yureiClicked = true;
  }

  if (!oniClicked) {
    
    oniButton.style.color = 'red';
    oniClicked = true;
  }

  if (!onryoClicked) {
    
    onryoButton.style.color = 'red';
    onryoClicked = true;
  }

  if (!twinsClicked) {
    
    twinsButton.style.color = 'red';
    twinsClicked = true;
  }

  if (!raijuClicked) {
    
    raijuButton.style.color = 'red';
    raijuClicked = true;
  }

  if (!moroiClicked) {
    
    moroiButton.style.color = 'red';
    moroiClicked = true;
  }

  if (!deogenClicked) {
    
    deogenButton.style.color = 'red';
    deogenClicked = true;
  }

  if (!thayeClicked) {
    
    thayeButton.style.color = 'red';
    thayeClicked = true;
  }
}

