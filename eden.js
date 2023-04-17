let inputField = document.querySelector('#phone');
inputField.addEventListener('keyup', (event) => {
  if (inputField.key === 'Backspace') {
    if (inputField.value.length === 5 || inputField.value.length === 9)
    event.preventDefault();
    inputField.value = inputField.value.slice(0, -1);
        if (inputField.value.length == 4)
          inputField.value = inputField.value + " ";
        if (inputField.value.length == 8)
          inputField.value = inputField.value + " ";
}});
// inputField.addEventListener('keydown',(event) => {
  