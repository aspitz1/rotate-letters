// create arrow functon
const animate_marquee = () => {
  // select element with id marquee in HTML
  let element = document.getElementById('marquee');
  // select first div text
  let textNodeOne = element.childNodes[1].childNodes[0];
  // select second div text
  let textNodeTwo = element.childNodes[3].childNodes[0];
  // store text data in variable?? ask for more explination
  let textOne = textNodeOne.data;
  let textTwo = textNodeTwo.data;
// textOne marquee animation
setInterval(function(){
  // take positon 1-27 and add positon 0 to end
  textOne = textOne.substring(1, textOne.length) + textOne[0]; // side note: text.length = 27
  textNodeOne.data = textOne;
}, 100);
setInterval(function(){
  // take position 0-26 and add position
  textTwo = textTwo[textTwo.length - 1] + textTwo.substring(0, textTwo.length - 1);
  textNodeTwo.data = textTwo;
}, 100);
}
window.addEventListener('load', (event) => {
  animate_marquee();
})
// const marquee = () => {
//   let str = "rolling rolling rolling ";
//   let ary = str.split('')
//
//   for (var i=0; i < ary.length; i++){
//     ary.unshift(ary.pop());
//     console.log(ary.join(''));
//     document.getElementById('marquee').innerText = ary.join('');
//     setTimeout(marquee, 500);
//   }
// }
// window.addEventListener('load', marquee);
