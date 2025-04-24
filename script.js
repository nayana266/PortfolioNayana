const folder = document.querySelector('.folder-wrapper');
const projectsFolder = document.querySelector('.projects-folder');
const aboutWindow = document.getElementById('aboutWindow');
const photoWindow = document.getElementById('photoWindow');
const projectVideoWindow = document.getElementById('projectVideoWindow');
const projectDescWindow = document.getElementById('projectDescWindow');
const closeAbout = document.getElementById('closeAbout');
const closePhoto = document.getElementById('closePhoto');
const closeProjectVideo = document.getElementById('closeProjectVideo');
const closeProjectDesc = document.getElementById('closeProjectDesc');
const overlay = document.getElementById('overlay');

// Function to check if any window is open
function isAnyWindowOpen() {
  return aboutWindow.style.display === 'block' || 
         photoWindow.style.display === 'block' ||
         projectVideoWindow.style.display === 'block' ||
         projectDescWindow.style.display === 'block';
}

// Function to update overlay visibility
function updateOverlay() {
  if (isAnyWindowOpen()) {
    overlay.classList.add('visible');
  } else {
    overlay.classList.remove('visible');
  }
}

// Make folders draggable
function makeDraggable(element) {
  let isDragging = false;
  let currentX = 0;
  let currentY = 0;
  let initialX = 0;
  let initialY = 0;
  let xOffset = 0;
  let yOffset = 0;
  let animationFrame;

  element.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);
  document.addEventListener('mouseleave', dragEnd);

  function dragStart(e) {
    if (e.target === element || e.target.parentNode === element) {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      isDragging = true;
      element.classList.add('dragging');
      
      // Cancel any ongoing animation
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    }
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      
      // Use requestAnimationFrame for smoother animation
      animationFrame = requestAnimationFrame(() => {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, element);
      });
    }
  }

  function dragEnd(e) {
    if (isDragging) {
      isDragging = false;
      element.classList.remove('dragging');
      
      // Smooth transition back to normal state
      element.style.transition = 'transform 0.1s ease-out';
      setTimeout(() => {
        element.style.transition = '';
      }, 100);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }
}

// Make both folders draggable
makeDraggable(folder);
makeDraggable(projectsFolder);

// Original click handlers
folder.addEventListener('click', (e) => {
  // Only open windows if we're not dragging
  if (!folder.classList.contains('dragging')) {
    folder.classList.add('clicked');
    aboutWindow.style.display = 'block';
    photoWindow.style.display = 'block';
    updateOverlay();
  }
});

projectsFolder.addEventListener('click', (e) => {
  // Only open windows if we're not dragging
  if (!projectsFolder.classList.contains('dragging')) {
    projectsFolder.classList.add('clicked');
    projectVideoWindow.style.display = 'block';
    projectDescWindow.style.display = 'block';
    updateOverlay();
  }
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
