var autoActive = document.querySelector("#abt");
autoActive.classList.add("active");

function handleClick(element) {
  // Remove active class from previously active div
  var activeDiv = document.querySelector("#sectionContainer div.active");
  if (activeDiv !== null) {
    activeDiv.classList.remove("active");
  }

  // Add active class to clicked div
  element.classList.add("active");
}

function showSection(sectionId, element) {
  // Hide all divs except the one that was clicked
  var divs = document.querySelectorAll("#sectionContainer div");
  divs.forEach((div) => {
    if (div !== element) {
      div.classList.remove("active");
    }
  });

  // Add 'active' class to the clicked div
  element.classList.add("active");

  // Show or hide the appropriate section
  var sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
