const projectsData = [
  {
    number: "01",
    name: "Team Agency Portfolio",
    topic: "DOM & Layout",
    desc: "Data-driven landing page with dark/light theme toggle, team profiles and project showcase.",
    link: "",
    developer: "Avishkar Chavan"
  },
  {
    number: "02",
    name: "Interactive Quiz App",
    topic: "State & Logic",
    desc: "Multiple-choice quiz with score tracking, question state management and instant feedback.",
    link: "https://avishkar-05.github.io/Quiz-App/",
    developer: "Avishkar Chavan" 
  },
  {
    number: "03",
    name: "Expense Tracker",
    topic: "CRUD & localStorage",
    desc: "Log income & expenses with full CRUD, computed totals using reduce/filter, data persists.",
    link: "#",
    developer: "Aditya Dolhare" 
  },
  {
    number: "04",
    name: "Live News Feed",
    topic: "Async API Integration",
    desc: "News aggregator with async/await, loading states, error handling and category filters.",
    link: "https://avishkar-05.github.io/news-app/",
    developer: "Avishkar Chavan" 
  },
  {
    number: "05",
    name: "GitHub Explorer",
    topic: "Multi-Endpoint APIs",
    desc: "Search any GitHub username to view profile, repos, stats and language breakdown chart.",
    link: "#",
    developer: "Abhay Kale" 
  },
  {
    number: "06",
    name: "Kanban Task Board",
    topic: "Drag & Drop & State",
    desc: "Trello-style board with drag-and-drop, card CRUD, and full localStorage persistence.",
    link: "#",
    developer: "Shrestha Arya" 
  }
]

// ================= TEAM MEMBERS =================

const members = [

{
    name: "Avishkar Chavan",
    role: "Frontend Developer",
    image: "images/IMG_2158_Avishkar.JPG",
    github: "https://github.com/"
},

{
    name: "Aditya Dolhare",
    role: "FullStack Developer",
    image: "images/%20Image_Aditya.jpeg",
    github: "https://github.com/"
},

{
    name: "Abhay Kale",
    role: "Backend Developer",
    image: "images/%20Image_Abhay.jpeg",
    github: "https://github.com/"
},

{
    name: "Shrestha Arya",
    role: "UI/UX Designer",
    image: "images/IMG_2161_Shrestha.JPG",
    github: "https://github.com/"
}

];

const team = document.getElementById("teamContainer");

members.forEach(member => {

team.innerHTML += `

<div class="card hidden">

<img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'">

<h2>${member.name}</h2>

<p>${member.role}</p>

<a href="${member.github}" target="_blank" rel="noopener noreferrer">
GitHub
</a>

</div>

`;

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️";

}

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML="☀️";

}

else{

localStorage.setItem("theme","light");

themeBtn.innerHTML="🌙";

}

};
function renderProjectCards() {
 
  const projectsGrid = document.getElementById('projectsGrid')
 
  const cardsHTML = projectsData.map(function(project) {
    return `
      <div class="project-card">
        <p class="project-number">${project.number}</p>
        <div class="project-bar"></div>
        <p class="project-name">${project.name}</p>
        <p class="project-topic">${project.topic}</p>
        <p class="project-desc">${project.desc}</p>
        <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
          View project →
        </a>
           <p class="project-developer">👤 Developer : ${project.developer}</p>
      </div>
    `
  }).join('')
 
  projectsGrid.innerHTML = cardsHTML
}

// ================= CONTACT FORM =================

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let message=document.getElementById("message").value;

let error=document.getElementById("error");

if(name=="" || email=="" || message==""){

error.style.color="red";

error.innerHTML="Please fill all fields.";

return;

}

error.style.color="green";

error.innerHTML="Message Sent Successfully!";

form.reset();

});


// ================= SCROLL ANIMATION =================

const hidden=document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

hidden.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.classList.add("show");

}

});

});


// ================= BACK TO TOP =================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

document.addEventListener('DOMContentLoaded', function() {
 
      // Build team section from data
  renderProjectCards()   // Build projects section from data
       // Highlight nav link on scroll
})
