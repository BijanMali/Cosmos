function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    const navBtn = document.querySelector('#navBtn');
    navBtn.classList.toggle('show');
}

/////////////-----------------------------------------------

const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

const commands = {
  help: "Available commands: help, about, clear",
  about: "Hacking Terminal v1.0. Created for cosmos development",
  clear: "clear",
  hi: "Hi this is cosmos ai .. tell me how can help you today?",
  hello: "Hi this is cosmos ai .. tell me how can help you today?",
  matrix:'matrix',
  Skillarger : 'Welcome to skillarger 😁'
};

inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const input = inputElement.value.trim();
    handleCommand(input);
    inputElement.value = "";
  }
});

function handleCommand(command) {
  if (command in commands) {
    if (command === "clear") {
      outputElement.innerHTML = "";
    }
    else if(command === "matrix"){
        for(i=0; i<100; i++){
            addOutput("Terminal Fucked");
            Sleep(1000);
            addOutput("Terminal Fucked");
        }
    }
    else {
      addOutput(commands[command]);
    }
  } else {
    addOutput(`Unknown command: ${command}`);
  }
}

function addOutput(text) {
  const newLine = document.createElement("div");
  newLine.textContent = text;
  outputElement.appendChild(newLine);
  outputElement.scrollTop = outputElement.scrollHeight; // Scroll to bottom
}

// Typing effect for initial message
const initialMessage = "Welcome to the Hacking Terminal. Type 'help' for commands.\n";
let i = 0;
function typeEffect() {
  if (i < initialMessage.length) {
    outputElement.innerHTML += initialMessage[i++];
    setTimeout(typeEffect, 50);
  }
}
typeEffect();
