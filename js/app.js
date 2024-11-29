import { data } from "./data.js";
console.log(data);

const paragraph = document.querySelector("p");
const firstSection = document.querySelector("section");
const sections = document.querySelectorAll("section");
const secednSection = document.querySelectorAll("section")[1];
const images = firstSection.querySelectorAll("img");
const button = firstSection.querySelector("button");
const div = document.querySelector(".products-wrapper");

const newParagraph = document.createElement("p");
console.log(newParagraph);

// newParagraph.textContent = "I am a new paragraph";
// paragraph.innerText = "I am a new paragraph";
// paragraph.innerHTML = "<strong>I am a new paragraph</strong";

// 1) html ფაილში (ჯავასკრიპტით არა) შევქმნათ
// ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

function handleClick(event) {
  event.stopPropagation();
  // console.log(event.target);
  console.log("button clicked");
}
button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

button.addEventListener("click", (e) => {
  button.remove(button);
});

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ
// ამ:  https://picsum.photos/id/180/2000/1600  ლინკს
// და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).

const img = document.createElement("img");
img.src = "https://picsum.photos/id/180/2000/1600";
document.body.appendChild(img);

// 3. html-ში შექმენით <section id="products-list"></section>
