
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
    const username = document.getElementById('username').value;

  // Generate the unique URL
    const uniqueURL = `${window.location.origin}/resume-page/api/resume?username=${username}`;
    shareLink.href = uniqueURL;
    shareLink.textContent = uniqueURL;
});
downloadButton.addEventListener('click', () => {
    const resumeContent = document.getElementById('resumeDiv');
  
    html2pdf().from(resumeContent).set({
      filename: 'resume.pdf',
      jsPDF: { orientation: 'portrait' },
      html2canvas: { scale: 2 },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }).save();
  });
