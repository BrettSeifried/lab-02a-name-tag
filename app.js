// get the elemnt that hodls the nametag name
const nameElement = document.getElementById('name');
// get the butoon
const updateButton = document.getElementById('update-button');
// the input
const nameInput = document.getElementById('name-input');

// user clicks the button
updateButton.addEventListener('click', () => {
    // get the text in the input
    const name = nameInput.value;
    // update the name element with the text
    nameElement.textContent = name;
});
