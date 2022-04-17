
//recursuion
let i = 0;

const setDelay = function(sentence) {
  setTimeout(function() {
    process.stdout.write(sentence[i]);
    i++;
    if (i < sentence.length) {
      setDelay(sentence);
    }
  }, 100);
};

// const setDelay = function(sentence) {
//   for (let i = 0; i <= sentence.length; i++)
//     setTimeout(function() {
//       process.stdout.write(sentence[i]);
//     }, i * 100);
// };

const sentence = "hello there from lighthouse labs";
setDelay(sentence);


