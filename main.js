const hamburger = document.querySelector(".hamburger");
const listamenu = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listamenu.classList.toggle("active");
});

const question = document.querySelectorAll(".cardquestion .question");

function activeAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});


const radios = document.querySelectorAll('input[type="radio"]');

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('click', () => {
    if (this.checked) {
      for (let j = 0; j < radios.length; j++) {
        if (radios[j] !== this) {
          radios[j].checked = false;
        }
      }
    }
  });
}