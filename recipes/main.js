import recipes from './resipes.mjs';

const randomNum = (num) => {
    return Math.floor(Math.random()*num);
}

const randomRecipe = (list) => {
    const listLength = list.length;
    const num = randomNum(listLength)
    return list[num]
}

const recipeTemplate = (recipe) => {
    return `<img id="potato" src="${recipe.image}" alt="roasted-potatoes">
            <div id="sideInfo">
                <div id="tags">
                    <p>${tagsTemplate(recipe.tags)}</p>
                </div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                    ${ratingTemplate(recipe.rating)}
                </span>
                <p id="description">${recipe.recipeInstructions}</p>
            </div>`
}

function tagsTemplate(tags) {

    const elementTags = document.getElementById("tags");
	// loop through the tags list and transform the strings to HTML
    const html = tags.forEach(item => {
        const listItem = document.createElement("p");
        listItem.textContent = item;
        elementTags.appendChild(listItem);
      });
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
		// else output an empty star
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const info = document.getElementById("recipeInfo");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipe = randomRecipe(recipes);
	// Set the HTML strings as the innerHTML of our output element.
    info.innerHTML = recipeTemplate(recipe);
}

function init() {
  // get a random recipe
  const recipe = randomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();