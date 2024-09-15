const myButton = document.getElementById("myButton");
const moreSkills = document.getElementById("moreSkills");

myButton.addEventListener('click', () => {
    // Toggle the hidden class
    moreSkills.classList.toggle('hidden');
    
  });
