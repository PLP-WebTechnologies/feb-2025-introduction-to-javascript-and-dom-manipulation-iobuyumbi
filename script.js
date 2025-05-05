// Changing text content dynamically
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("text").textContent = "The text has been changed!";
    document.getElementById("explanation").innerHTML =
      "<p>The text content has been updated to 'The text has been changed!'</p>";
  });

// Modifying CSS styles via JavaScript
document
  .getElementById("changeStyleButton")
  .addEventListener("click", function () {
    const text = document.getElementById("text");
    text.style.color = "blue";
    text.style.fontSize = "20px";
    document.getElementById("explanation").innerHTML =
      "<p>The style of the text has been changed to blue and font size to 20px.</p>";
  });

// Adding a new element to the <main> section
document
  .getElementById("addElementButton")
  .addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new dynamically added element!";
    const main = document.querySelector("main");
    main.appendChild(newElement);
    document.getElementById("explanation").innerHTML =
      "<p>A new paragraph has been added inside the main section.</p>";
  });
