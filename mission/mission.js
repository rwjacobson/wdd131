//Select the select elemnt with an ID of 'mode'
let select = document.getElementById("mode");
 
// Define the evenht handler function
function changeTheme() {
    const event = mode.value;
    if (event === "dark") {
        const bodyTag = document.querySelector("Body");
        bodyTag.setAttribute("class", "dark");

        const image = document.querySelector("img");
        image.removeAttribute("src");
        image.setAttribute("src", "byui-logo_white.png");
    }
    else {
        const bodyTag = document.querySelector("Body");
        bodyTag.removeAttribute("class");

        const image = document.querySelector("img");
        image.removeAttribute("src");
        image.setAttribute("src", "byui-logo_blue.webp");
    };
};

select.addEventListener("click", changeTheme);