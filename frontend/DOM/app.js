// getElementById method belongs to the document object
const myHeading = document.getElementsByTagName("h1")[0];
const myButton = document.getElementById("myButton");
const resetHeading = document.getElementById("resetHeading")
const myTextInput = document.getElementById("myTextInput");
const myBackgroundInput = document.getElementById("myBackgroundInput");
const buttonBackground = document.getElementById('buttonBackground')
const listItems = document.querySelectorAll('li');
const nonPurpleItems = document.getElementsByClassName('not-purple');
// li:nth-child is a CSS pseudo class selector
const evens = document.querySelectorAll('li:nth-child(even)');

myHeading.addEventListener('click', function() {
  if (myHeading.style.color === 'red') {
    myHeading.style.color = 'black';
  } else {
    myHeading.style.color = 'red';
  }
});

resetHeading.addEventListener('click', () => {
  myHeading.style.color = 'black';
})

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
})

buttonBackground.addEventListener('click', () => {
  myHeading.style.backgroundColor = myBackgroundInput.value;
})

for (let item = 0; item < listItems.length; item++) {
  listItems[item].style.color = 'purple';
}

for (let item = 0; item < nonPurpleItems.length; item++) {
  nonPurpleItems[item].style.color = 'orange';
}
for (let item = 0; item < evens.length; item++) {
  evens[item].style.backgroundColor = 'lightgray';
}
