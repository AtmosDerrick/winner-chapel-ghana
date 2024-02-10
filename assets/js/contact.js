// Get all elements with class "clickShow"
var clickShowElements = document.querySelectorAll(".clickShow");

// Loop through each element and add click event listener
clickShowElements.forEach(function (element) {
  element.addEventListener("click", function () {
    // Hide all showPara elements and reset icon and color for all clickShow elements
    clickShowElements.forEach(function (clickShowElement) {
      clickShowElement.style.color = "inherit"; // Reset color
      clickShowElement.querySelector("i").className = "fa fa-caret-up"; // Reset icon
      var showPara = clickShowElement.nextElementSibling;
      showPara.style.display = "none"; // Hide all showPara elements
    });

    // Toggle the visibility of the corresponding showPara element
    var showPara = element.nextElementSibling;
    if (showPara.style.display === "none" || showPara.style.display === "") {
      showPara.style.display = "block";
      // Change icon and its color upon click
      element.querySelector("i").className = "fa fa-caret-down"; // Change icon
      element.style.color = "red"; // Change color
    } else {
      showPara.style.display = "none";
      // Change icon and its color back to default
      element.querySelector("i").className = "fa fa-caret-up"; // Change icon
      element.style.color = "inherit"; // Change color
    }
  });
});
