import { participantTemplate } from './templates.mjs';
console.log(participantTemplate())
let num = 1;

const newParticipant = () => {
    num++
     const template = participantTemplate(num);
    button.insertAdjacentHTML("beforebegin", template);
}
const button = document.getElementById("add");
button.addEventListener("click", newParticipant); 


const submitForm = (event) => {
    event.preventDefault();
    //Get the adult name from the form
    const form = document.querySelector("form");
    const name = form.elements["adult_name"].value;
    
    const totalFees = () => {
        //the selector below lets us grab any element that has an id that begins with "fee"
        let feeElements = document.querySelectorAll("[id^=fee]");
        console.log(feeElements);
        //querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
        //The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
        //The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
        feeElements = [...feeElements];
        //sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
        //Remember that the text that was entered into the input element will be found in the .value of the element.
        let newNum = 0
        feeElements.forEach((num) => {
            newNum = parseFloat(num.value) + newNum;
        })
       // once you have your total make sure to return it!
        return newNum
    };

    const template = successTemplate(name, totalFees(), num);
    const summary = document.getElementById("summary"); 
    summary.insertAdjacentHTML("afterbegin", template); 

    form.style.display = "none";
}
const button2 = document.querySelector("form");
button2.addEventListener("submit", submitForm);