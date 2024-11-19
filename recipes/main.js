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
    return `<div id="recipeInfo">
            <img id="potato" src="${recipe.image}" alt="roasted-potatoes">
            <div id="sideInfo">
                <div id="tags">
                    <p>${recipe.tags[0]}</p> 
                    <p>${recipe.tags[1]}</p>
                    <p>${recipe.tags[2]}</p>
                </div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                <p id="description">${recipe.recipeInstructions}</p>
            </div>
        </div>`
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    const html = tags.array.forEach(element => {
        pass
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

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}