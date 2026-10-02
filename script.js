const starterProjects = [
  {id:1,title:"A Little Weather App",description:"A simple weather dashboard that makes checking the forecast feel a little nicer.",tag:"Web",tech:["HTML","CSS","JavaScript"],author:"Riya Sharma",initials:"RS",date:"2 days ago",icon:"☀️",demo:"",github:"",likes:12,comments:["Love the clean layout!"]},
  {id:2,title:"Study Buddy AI",description:"A study helper concept that turns big topics into smaller, easier revision notes.",tag:"AI",tech:["JavaScript","AI concept"],author:"Aarav Mehta",initials:"AM",date:"3 days ago",icon:"✦",demo:"",github:"",likes:18,comments:["This would be useful for exam prep."]},
  {id:3,title:"Pocket Habit Tracker",description:"A tiny mobile-first habit tracker for building routines one day at a time.",tag:"Mobile",tech:["HTML","CSS","LocalStorage"],author:"Maya Patel",initials:"MP",date:"4 days ago",icon:"☑",demo:"",github:"",likes:9,comments:[]},
  {id:4,title:"Personal Portfolio v1",description:"My first portfolio site, featuring selected work, a short intro, and contact details.",tag:"Web",tech:["HTML","CSS"],author:"Dev Verma",initials:"DV",date:"5 days ago",icon:"⌘",demo:"",github:"",likes:15,comments:["Great first portfolio. Keep going!"]},
  {id:5,title:"Moodboard Maker",description:"A small design playground to collect colors, shapes, and inspiration in one place.",tag:"Design",tech:["CSS","UI Design"],author:"Ananya Rao",initials:"AR",date:"1 week ago",icon:"▧",demo:"",github:"",likes:7,comments:[]},
  {id:6,title:"Smart Recipe Finder",description:"A friendly recipe idea page that helps you decide what to cook with what you have.",tag:"AI",tech:["JavaScript","UI Design"],author:"Kabir Joshi",initials:"KJ",date:"1 week ago",icon:"✳",demo:"",github:"",likes:21,comments:["Nice idea! Add a filter for ingredients."]}
];
const storageKey = "buildspace-projects-v1";
const likedKey = "buildspace-liked-projects-v1";
let projects = loadProjects();
let activeTag = "All";
let likedProjects = new Set(JSON.parse(localStorage.getItem(likedKey) || "[]"));

function loadProjects() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : starterProjects;
  } catch (error) {
    return starterProjects;
  }
}
function saveProjects() { localStorage.setItem(storageKey, JSON.stringify(projects)); }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character]));
}
function safeLink(value) {
  try { const url = new URL(value); return ["http:","https:"].includes(url.protocol) ? url.href : ""; }
  catch { return ""; }
}
function renderProjects() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const filtered = projects.filter(project => {
    const matchesTag = activeTag === "All" || project.tag === activeTag;
    const searchable = [project.title, project.description, project.tag, ...(project.tech || []), project.author].join(" ").toLowerCase();
    return matchesTag && searchable.includes(query);
  });
  const grid = document.getElementById("project-grid");
  grid.innerHTML = filtered.map(project => {
    const liked = likedProjects.has(project.id);
    const visualClass = ({Web:"web",AI:"ai",Mobile:"mobile",Design:"design"})[project.tag] || "web";
    const links = [];
    if (safeLink(project.demo)) links.push(`<a href="${escapeHTML(safeLink(project.demo))}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`);
    if (safeLink(project.github)) links.push(`<a href="${escapeHTML(safeLink(project.github))}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`);
    return `<article class="project-card">
      <div class="project-visual visual-${visualClass}"><span class="visual-icon">${escapeHTML(project.icon || "✳")}</span><div class="visual-window"></div></div>
      <div class="card-content">
        <div class="card-meta"><span class="tag">${escapeHTML(project.tag)}</span><span class="date">${escapeHTML(project.date || "Just now")}</span></div>
        <h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p>
        <div class="tech-tags">${(project.tech || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="card-footer"><div class="author"><span class="author-avatar">${escapeHTML(project.initials || "Y")}</span>${escapeHTML(project.author || "You")}</div>
          <div class="card-actions"><button class="like-button ${liked ? "liked" : ""}" data-like="${project.id}" aria-label="Like ${escapeHTML(project.title)}">${liked ? "♥" : "♡"} ${project.likes || 0}</button><button class="comment-button" data-comment="${project.id}">☰ ${(project.comments || []).length}</button></div>
        </div>
        ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
        <div class="comment-area" id="comments-${project.id}"><div class="comment-list">${(project.comments || []).map(comment => `<div class="comment-item">${escapeHTML(comment)}</div>`).join("")}</div>
          <form class="comment-form" data-comment-form="${project.id}"><input name="comment" maxlength="160" placeholder="Leave a helpful note..." aria-label="Write a comment" required><button type="submit">Send</button></form>
        </div>
      </div></article>`;
  }).join("");
  document.getElementById("empty-state").hidden = filtered.length > 0;
  document.getElementById("project-count").textContent = String(projects.length).padStart(2, "0");
}
document.getElementById("search-input").addEventListener("input", renderProjects);
document.getElementById("filter-buttons").addEventListener("click", event => {
  const button = event.target.closest("button[data-tag]");
  if (!button) return;
  activeTag = button.dataset.tag;
  document.querySelectorAll(".filter").forEach(filter => filter.classList.toggle("active", filter === button));
  renderProjects();
});
document.getElementById("project-grid").addEventListener("click", event => {
  const likeButton = event.target.closest("[data-like]");
  if (likeButton) {
    const id = Number(likeButton.dataset.like);
    const project = projects.find(item => item.id === id);
    if (!project) return;
    if (likedProjects.has(id)) {
      likedProjects.delete(id);
      project.likes = Math.max(0, (project.likes || 0) - 1);
    } else {
      likedProjects.add(id);
      project.likes = (project.likes || 0) + 1;
    }
    localStorage.setItem(likedKey, JSON.stringify([...likedProjects]));
    saveProjects();
    renderProjects();
    return;
  }
  const commentButton = event.target.closest("[data-comment]");
  if (commentButton) {
    const area = document.getElementById(`comments-${commentButton.dataset.comment}`);
    if (area) area.classList.toggle("open");
  }
});
document.getElementById("project-grid").addEventListener("submit", event => {
  const form = event.target.closest("[data-comment-form]");
  if (!form) return;
  event.preventDefault();
  const input = form.elements.comment;
  const comment = input.value.trim();
  if (!comment) return;
  const project = projects.find(item => item.id === Number(form.dataset.commentForm));
  if (!project) return;
  project.comments = project.comments || [];
  project.comments.push(comment);
  saveProjects();
  renderProjects();
  document.getElementById(`comments-${project.id}`)?.classList.add("open");
});
document.getElementById("project-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const title = form.title.value.trim();
  const description = form.description.value.trim();
  const tag = form.tags.value;
  const demo = safeLink(form.demo.value.trim());
  const github = safeLink(form.github.value.trim());
  if (!title || !description || !tag) return;
  if ((form.demo.value.trim() && !demo) || (form.github.value.trim() && !github)) {
    document.getElementById("form-message").textContent = "Please enter valid links starting with https://";
    return;
  }
  const project = {
    id: Date.now(), title, description, tag, demo, github,
    tech: ["HTML", "CSS", "JavaScript"], author: "You", initials: "YO",
    date: "Just now", icon: ({Web:"⌘",AI:"✦",Mobile:"☑",Design:"▧"})[tag] || "✳",
    likes: 0, comments: []
  };
  projects.unshift(project);
  saveProjects();
  form.reset();
  activeTag = "All";
  document.querySelectorAll(".filter").forEach(button => button.classList.toggle("active", button.dataset.tag === "All"));
  document.getElementById("search-input").value = "";
  document.getElementById("form-message").textContent = "Your project is on the board. Nice work!";
  renderProjects();
  document.getElementById("projects").scrollIntoView({behavior:"smooth"});
});
renderProjects();
