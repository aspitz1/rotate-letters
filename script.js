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
  // create array of textOne
  let aryOne = textOne.split('');
  // use methods to move last character to 0 index
  aryOne.unshift(aryOne.pop());
  // set textOne using method to transform aryOne into string
  textOne = aryOne.join('');
  // set textNodeOne.data to be textOne
  textNodeOne.data = textOne;
}, 100);
setInterval(function(){
  // for loop that makes textTwo into an array then uses above stated methods to create the marquee animation
  for(let i = 0; i <= textTwo.length; i++){
    let aryTwo = textTwo.split('');
    aryTwo.unshift(aryTwo.pop());
    textTwo = aryTwo.join('');
    textNodeTwo.data = textTwo;
  }
// each setIntrval runs every 100 millseconds
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
