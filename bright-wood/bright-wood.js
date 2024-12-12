import quotes from './quotes';

let select = document.getElementById("theme");

const changeTheme = () => {
    const selectedTheme = select.value;
  
    // Find the theme object in the quotes array
    const themeObj = quotes.find(theme => theme.theme === selectedTheme);
  
    // If the theme object is found, call the replaceContent function
    if (themeObj) {
      replaceContent(themeObj);
    }
  };

const replaceContent = (list) => {
    const quote1 = document.querySelector(".quote1");
    const quote2 = document.querySelector(".quote2");
    const quote3 = document.querySelector(".quote3");
    const quote4 = document.querySelector(".quote4")
    const quote5 = document.querySelector("quote5");

    quote1.textContent = list.quote1
    quote2.textContent = list.quote2
    quote3.textContent = list.quote3
    quote4.textContent = list.quote4
    quote5.textContent = list.quote5

    console.log("it worked");
}