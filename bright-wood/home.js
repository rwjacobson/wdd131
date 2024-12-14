import {harry, percy} from './quotes.mjs';

function loopThroughText(id, textArray, delay, button) {
    let currentIndex = 0;
  
    const intervalId = setInterval(() => {
      // Display the current text
      document.getElementById(id).textContent = textArray[currentIndex];
  
      // Move to the next index (wrap around if at the end)
      currentIndex = (currentIndex + 1) % textArray.length; 
  
    }, delay);
  
    // provide a way to stop the loop
    const stopButton = document.getElementById(button);
    stopButton.addEventListener("click", () => {
      clearInterval(intervalId); 
    });
  }
  const delay = 5000; // 5 seconds
  
  loopThroughText("harryQuotes", harry, delay, "harryButton");
  loopThroughText("percyQuotes", percy, delay, "percyButton");