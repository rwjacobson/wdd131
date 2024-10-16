// getting the button element by the ID name "menu"
const button = document.getElementById("menu");
// function that will hide and display the a tags. 
function toggleMenu() {
    const menuItems = document.querySelector("nav");
    menuItems.classList.toggle("hide");
    console.log("I'm here")
}
// an event listener that will run the toggleMenu function when click.
button.addEventListener("click", toggleMenu);

// to handle resizing of the window for the hiding and undhiding the menu button. 
function handleResize () {
    // grad the window width
    const windowWidth = window.innerWidth;
    // grad the menu ID 
    const menu = document.getElementById('menu');
    // Check to see what size the window is at.
    if (windowWidth > 1000) {
        // removes that class named hide in the menu
        menu.classList.remove("hide");
    } else {
        // add the class hide to the menu tag if don't have one. 
        menu.classList.add("hide");
    }
}
// adding an event listener to watch for resizing
window.addEventListener("resize", handleResize);
// adding an event listener to watch for reloading of the page
handleResize();

const imgs = document.querySelectorAll(".gallery img")
imgs.forEach((img) => {
    img.addEventListener("click", viewHandler)
})

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const img = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const src = img.src;
    const parts = src.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullSrc = `${parts[0]}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
    const viewerHtml = viewerTemplate(fullSrc, img.alt);
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerHtml)
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

