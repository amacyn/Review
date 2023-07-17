const reviews = [
  {
    id: 1,
    name: "Maarachi Ethan",
    job: "Web developer",
    img: "../images/puppy eye.jpeg",
    text: "a businesswoman, philanthropist, writer, billionaire heiress, and the richest woman in the world, with an estimated net worth of US$87.4 billion as of March 2022, according to Forbes.[1] She is the only child, heiress of Liliane Bettencourt and granddaughter of L'Oréal founder Eugène Schueller. Her mother died in September 2017, after which her fortune tripled with her investments through her family holding company, Tethys Invest, and the high valuation of L'Oréal shares on the stock exchange.",
  },
  {
    id: 2,
    name: "Sylvia Ben",
    job: "Web designer", 
    img: "../images/person-1.jpeg",
    text: "an American singer, songwriter, and actress. An influential contemporary popular music artist, and often regarded as a pop icon, she is noted for her four-octave vocal range and whistle register, which have garnered her critical acclaim. Grande has received numerous accolades throughout her career, including two Grammy Awards, one Brit Award, one Bambi Award, two Billboard Music Awards, three American Music Awards, nine MTV Video Music Awards, and 30 Guinness World Records.",
  },
  {
    id: 3,
    name: "Akudo Devi",
    job: "Intern",
    img: "../images/unicorn copy.jpeg",
    text: "is an American beauty YouTuber and makeup artist. While working as a local makeup artist in his hometown of Bethlehem, New York, Charles started a YouTube channel, where he began uploading makeup tutorials. In 2016, he became the first male brand ambassador for CoverGirl after a tweet featuring his makeup went viral online.",
  },
  {
    id: 4,
    name: "Promise Rosy",
    job: "Boss",
    img: "../images/fury.jpeg",
    text: "  is the world's fastest-growing online personal trainer. Honest, unapologetic and outspoken, yet erudite, authentic and endlessly passionate about exposing the toxic myths within diet culture, and committed to helping people to reach their goals and make positive change for good. ",
  },
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
