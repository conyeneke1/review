// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const randomBtn = document.querySelector('.random-btn');

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const blocker = document.getElementById('blocker');

let currentItem = 0;
let currentSlide = reviews[currentItem];
loadSlide(currentSlide)

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length)
  loadSlide(reviews[currentItem])
})

nextBtn.addEventListener("click", () => {
  setTimeout(() => {
    blocker.classList.add("slide-in")
    if (currentItem === reviews.length - 1)
    {
      currentItem = -1
    }
    currentItem++
    loadSlide(reviews[currentItem])
  }, 100);
  blocker.classList.remove("slide-in")
  blocker.classList.remove("slide-out")
})

prevBtn.addEventListener("click", () => {
  blocker.classList.remove("slide-in")
  setTimeout(() => {
    blocker.classList.add("slide-out")
    if (currentItem == 0)
    {
      currentItem = reviews.length
    }
    currentItem--
    loadSlide(reviews[currentItem])
  })
  blocker.classList.remove("slide-in")
  blocker.classList.remove("slide-out")
})

function loadSlide(currentSlide) {
  img.src = currentSlide.img
  author.textContent = currentSlide.name
  job.textContent = currentSlide.job
  info.textContent = currentSlide.text
}



// window.addEventListener('DOMContentLoaded', function() {
//   let item = reviews[currentItem]
//   img.src = item.img
//   author.value = item
// })