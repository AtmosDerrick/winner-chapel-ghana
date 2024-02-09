function handleClick(element) {
  // Remove active class from previously active div
  var activeDiv = document.querySelector("#sectionContainer div.active");
  if (activeDiv !== null) {
    activeDiv.classList.remove("active");
  }

  // Add active class to clicked div
  element.classList.add("active");
}
