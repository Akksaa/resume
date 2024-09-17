var form = document.getElementById("resumeForm");
var resumeDiv = document.getElementById("resume");

var nameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");

var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeSkills = document.getElementById("resumeSkills");
var resumeExperience = document.getElementById("resumeExperience");

const shareLink = document.getElementById('shareLink');
const downloadButton = document.getElementById('downloadResume');

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var education = educationInput.value;
    var skills = skillsInput.value;
    var experience = experienceInput.value;
    
   document.getElementById("nameText").textContent = name;
   document.getElementById("emailText").textContent = email;
   document.getElementById("phoneText").textContent = phone;
   document.getElementById("resumeEducation").textContent = education;
   document.getElementById("resumeSkills").textContent = skills;
   document.getElementById("resumeExperience").textContent = experience;
    
    resumeDiv.classList.remove("hidden");
    const resumeHTML = resumeDiv.innerHTML;
    const username = document.getElementById('username').value;

    downloadButton.addEventListener("click", () => {
      window.print();
    });
    shareLink.addEventListener("click", async() =>{
      try{
        const ShareLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, "_")}_resume.html`;

        await navigator.clipboard.writeText(ShareLink);
        alert("Resume URL Copied to Clipboard!");
      } catch(err){
        console.error("Failed to copy Link:", err);
        alert("Failed to copy link. Please Try Again!");
      }
    })
  

    
});




