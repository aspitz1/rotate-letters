// create arrow functon
const animate_marquee = () => {
  // declare variable as element id marquee in HTML
  let element = document.getElementById('marquee');
  // declare first div text, will store data
  let textNodeOne = element.childNodes[1].childNodes[0];
  // declare second div text, will store data
  let textNodeTwo = element.childNodes[3].childNodes[0];
  // declare variables that are what the text will display in HTML
  let textOne = textNodeOne.data;
  let textTwo = textNodeTwo.data;
// marquee animation using method that will run function every 100 millsecond creating the illusion of movement
setInterval(function(){
  // assign variable to move index 0 of the string to last position in string using concatention
  textOne = textOne.substring(1, textOne.length) + textOne[0]; // side note: text.length = 27
  // assign value to the text displayed in HTML
  textNodeOne.data = textOne;
}, 100);
setInterval(function(){
  // assign variable to move index 27 of string to index 0
  textTwo = textTwo[textTwo.length - 1] + textTwo.substring(0, textTwo.length - 1);
  // assign value to the text displayed in HTML
  textNodeTwo.data = textTwo;
}, 100);
}
window.addEventListener('load', (event) => {
  animate_marquee();
})
