const words = [
    "Mobile Developer",
     "Front-End Developer",
    // "Project Management",
   //"Project Coordinator"
];

const typingElement = document.querySelector('.typing');

function animateText() {
    let index = 0;
    setInterval(() => {
        typingElement.textContent = words[index];
        index = (index + 1) % words.length;
    }, 3000);
}

animateText();