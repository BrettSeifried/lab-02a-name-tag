// get the elemnt that holds the nametag name
const nameElement = document.getElementById('name');
const pronounElement = document.getElementById('pronoun');
const backgroundElement = document.getElementById('colors')
// get the button
const updateButton = document.getElementById('update-button');
// the input
const nameInput = document.getElementById('name-input');
const selectOption = document.getElementById('pronounSelect');
const selectBackground = document.getElementById('backgroundSelect')
console.log('pronoun', selectOption);
// user clicks the button
updateButton.addEventListener('click', () => {
    // get the text in the input
    const name = nameInput.value;
    // update the name element with the text
    nameElement.textContent = name;
});

selectOption.addEventListener('change', (event) => {
    const result = document.getElementById('pronoun');
    // const pronoun = pronounSelect.target.value;
    console.log('pronoun', result);
    result.textContent = event.target.value;
});

const select = document.getElementById('backgroundSelect');
console.log(select);

//selectBackground.addEventListener('change', () => {
    //const value = select.value;
    //selectBackground.style.backgroundElement = value;
    //const result = document.getElementById('colors');
    //result.textContent = event.target.value;
// });

