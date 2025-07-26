// Slide show ảnh trong phần "Our Story"
const images = [
  './Image/anh45.jpg',
  './Image/anh2.jpg',
  './Image/anh17.jpg',
  './Image/anh51.jpg',
  './Image/anh3.jpg'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

setInterval(() => {
  slideshow.classList.add('fade-out');

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
    slideshow.classList.remove('fade-out');
  }, 1000);
}, 4000);

// Chuyển đổi menu "Food" và "Drinks"
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function (e) {
  if (e.target.classList.contains("menu-button")) {
    const targetId = e.target.getAttribute("data-title");

    menuTitle.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    document.querySelectorAll(".menu-item-content").forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(targetId).classList.add("active");
  }
});

// Feeback

const feedbackList = document.getElementById("feedback-list");

feedbacks.forEach(feedback => {
  const card = document.createElement("div");
  card.classList.add("feedback-card");

  card.innerHTML = `
    <img src="${feedback.image}" alt="Customer">
    <p>${feedback.text}</p>
  `;

  feedbackList.appendChild(card);
});

