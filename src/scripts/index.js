// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";

/* 
Instructions:
Look at the form on HTML. In the index.js file and create a post request on submit.
Requirements:
Use fetch to post data on fake server https://my-json-server.typicode.com/typicode/demo/posts
Use async await syntax.
When resolving your promise, print the raw JSON to the console.
Alert the user once they have submitted the form.
*/


// \/ All of your javascript should go here \/


// 1. Study the HTML file
// 2. Get elements from HTML -> the full FORM and all the INPUTS using DOM

const form = document.getElementById('submit-form');
const formInput = document.querySelectorAll('input');

// 3. Create a asynchronic function called submitData(), use async syntax that will contain:
async function submitData() {

    // 4. A variable 'inputs' containing an empty array
    const inputs = [];

    // 5. Pusch values and id's from all inputs inside of empty array
    // hint 1: use .forEach() method on vsriable 'formInput'
    // hint 2: use .push() method on an empty array 'inputs'
    formInput.forEach(input => {
        inputs.push(`${input.id}: ${input.value}`);
    });

    // 6. Create a variable 'jsonData', that will contain a JSON stringified 'inputs' array
    const jsonData = JSON.stringify(inputs)

    // 7. Create variable called 'settings', that will be an object (compatible with a JSON format)
    const settings = {
        method: 'POST',
        body: jsonData
    }

    // 8. Create a variable called 'URL' that will contain an URL of our fake server
    const URL = `https://my-json-server.typicode.com/typie/demo/posts`;

    // 9. Create a variable called 'fetchResponse', that will contain await and fetch (using 'URL' and 'settings' as an arguments)
    const fetchResponse = await fetch(URL, settings);

    // 10. Create variable called 'data', that will contain raw JSON format data recieved from 'fetchResponse'
    const data = await fetchResponse.json();

    // 11. Print raw JSON data in console 
    console.log(data);

    // 12. Print stringified 'inputs' array
    console.log(jsonData)

    // 13. return data
    return data
}

// 14. Add event listener on form (it is connected with a 'submit' button with action: submit)
// hint: use preventDefault on event, to prevent browsers auto-refresh
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // 15. Call function submitData(), then create an alert with a message `Thank you for submiting your details. USER ID: ----`. Use data.id as an User ID.
    submitData().then(data => alert(`Thank you for submiting your details.
    USER ID: ${data.id}`))
})

// Thank you fro your attention and cooperation,
// CONGRATULATIONS!!! This is the end of the task :)