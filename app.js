const finalExcuse = document.getElementById("excuse");

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function numRandom(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

window.onload = function() {
  finalExcuse.innerHTML = `${numRandom(who)} ${numRandom(action)} ${numRandom(
    what
  )} ${numRandom(when)}`;
};

/*btn.addEventListener("click", () => {
  finalExcuse.innerHTML = `${numRandom(who)} ${numRandom(action)} ${numRandom(what)} ${numRandom(when)}`;
});*/

// return `${who} ${action} ${what} ${when}`;
