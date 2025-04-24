const folder = document.querySelector('.folder-wrapper');
const projectsFolder = document.querySelector('.projects-folder');
const project02Folder = document.querySelector('.project02-folder');
const resumeFile = document.querySelector('.resume-file');
const aboutWindow = document.getElementById('aboutWindow');
const photoWindow = document.getElementById('photoWindow');
const projectVideoWindow = document.getElementById('projectVideoWindow');
const projectDescWindow = document.getElementById('projectDescWindow');
const project02DescWindow = document.getElementById('project02DescWindow');
const project02GitHubWindow = document.getElementById('project02GitHubWindow');
const closeAbout = document.getElementById('closeAbout');
const closePhoto = document.getElementById('closePhoto');
const closeProjectVideo = document.getElementById('closeProjectVideo');
const closeProjectDesc = document.getElementById('closeProjectDesc');
const closeProject02Desc = document.getElementById('closeProject02Desc');
const closeProject02GitHub = document.getElementById('closeProject02GitHub');
const overlay = document.getElementById('overlay');

// Function to check if any window is open
function isAnyWindowOpen() {
  return aboutWindow.style.display === 'block' || 
         photoWindow.style.display === 'block' ||
         projectVideoWindow.style.display === 'block' ||
         projectDescWindow.style.display === 'block' ||
         project02DescWindow.style.display === 'block' ||
         project02GitHubWindow.style.display === 'block';
}

// Function to update overlay visibility
function updateOverlay() {
  if (isAnyWindowOpen()) {
    overlay.classList.add('visible');
  } else {
    overlay.classList.remove('visible');
  }
}

// Original click handlers
folder.addEventListener('click', () => {
  folder.classList.add('clicked');
  aboutWindow.style.display = 'block';
  photoWindow.style.display = 'block';
  updateOverlay();
});

projectsFolder.addEventListener('click', () => {
  projectsFolder.classList.add('clicked');
  projectVideoWindow.style.display = 'block';
  projectDescWindow.style.display = 'block';
  updateOverlay();
});

project02Folder.addEventListener('click', () => {
  project02Folder.classList.add('clicked');
  project02DescWindow.style.display = 'block';
  project02GitHubWindow.style.display = 'block';
  updateOverlay();
});

closeAbout.addEventListener('click', () => {
  aboutWindow.style.display = 'none';
  folder.classList.remove('clicked');
  updateOverlay();
});

closePhoto.addEventListener('click', () => {
  photoWindow.style.display = 'none';
  folder.classList.remove('clicked');
  updateOverlay();
});

closeProjectVideo.addEventListener('click', () => {
  projectVideoWindow.style.display = 'none';
  projectsFolder.classList.remove('clicked');
  updateOverlay();
});

closeProjectDesc.addEventListener('click', () => {
  projectDescWindow.style.display = 'none';
  projectsFolder.classList.remove('clicked');
  updateOverlay();
});

closeProject02Desc.addEventListener('click', () => {
  project02DescWindow.style.display = 'none';
  project02Folder.classList.remove('clicked');
  updateOverlay();
});

closeProject02GitHub.addEventListener('click', () => {
  project02GitHubWindow.style.display = 'none';
  project02Folder.classList.remove('clicked');
  updateOverlay();
});

// Resume file click handler
resumeFile.addEventListener('click', () => {
  resumeFile.classList.add('clicked');
  window.open('resume/resume.pdf', '_blank');
  setTimeout(() => {
    resumeFile.classList.remove('clicked');
  }, 300);
});
