const myHeading = document.getElementById("myHeading");

myHeading.addEventListener('click', function() {
  if (myHeading.style.color === 'red') {
    myHeading.style.color = 'black';
  } else {
    myHeading.style.color = 'red';
  }
});
