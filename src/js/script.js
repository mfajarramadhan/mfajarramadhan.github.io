// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  // isi variabel fixedNav diambil dari jarak posisi header terhadap top nya
  // jarak saat ini 0, maka isi dari fixedNav adalah 0

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
  // window.scrollY = jarak scroll dengan sumbu Y yang sedang dilakukan
  // jika semakin digeser/scroll, maka jaraknya terus bertambah
  // cara bacanya: jika jarak scroll lebih besar dengan jarak fixedNav(0), maka tambahkan class navbar-fixed
  // namun jika sudah berada di paling atas (else), maka buang kelas navbar-fixed
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// CLose navbar ketika di klik diluar hamburger menu & navbar
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Modal Box Experience
const overlay = document.querySelector("#overlay");
const modalBox = document.querySelector("#modal-box");
const modalBox2 = document.querySelector("#modal-box2");
const modalBox3 = document.querySelector("#modal-box3");
const modalBox4 = document.querySelector("#modal-box4");
const modalBox5 = document.querySelector("#modal-box5");
const modalBox6 = document.querySelector("#modal-box6");
const modalBox7 = document.querySelector("#modal-box7");
const modalOpenBtn = document.querySelector("#modal-open-btn");
const modalOpenBtn2 = document.querySelector("#modal-open-btn2");
const modalOpenBtn3 = document.querySelector("#modal-open-btn3");
const modalOpenBtn4 = document.querySelector("#modal-open-btn4");
const modalOpenBtn5 = document.querySelector("#modal-open-btn5");
const modalOpenBtn6 = document.querySelector("#modal-open-btn6");
const modalOpenBtn7 = document.querySelector("#modal-open-btn7");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const modalCloseBtn2 = document.querySelector("#modal-close-btn2");
const modalCloseBtn3 = document.querySelector("#modal-close-btn3");
const modalCloseBtn4 = document.querySelector("#modal-close-btn4");
const modalCloseBtn5 = document.querySelector("#modal-close-btn5");
const modalCloseBtn6 = document.querySelector("#modal-close-btn6");
const modalCloseBtn7 = document.querySelector("#modal-close-btn7");

// Open Modal & Modal Container 1
modalOpenBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.remove("hidden");
  modalBox2.classList.add("hidden");
  modalBox3.classList.add("hidden");
  modalBox4.classList.add("hidden");
  modalBox5.classList.add("hidden");
  modalBox6.classList.add("hidden");
  modalBox7.classList.add("hidden");
});

// Open Modal & Modal Container 2
modalOpenBtn2.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.add("hidden");
  modalBox2.classList.remove("hidden");
  modalBox3.classList.add("hidden");
  modalBox4.classList.add("hidden");
  modalBox5.classList.add("hidden");
  modalBox6.classList.add("hidden");
  modalBox7.classList.add("hidden");
});

// Open Modal & Modal Container 3
modalOpenBtn3.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.add("hidden");
  modalBox2.classList.add("hidden");
  modalBox3.classList.remove("hidden");
  modalBox4.classList.add("hidden");
  modalBox5.classList.add("hidden");
  modalBox6.classList.add("hidden");
  modalBox7.classList.add("hidden");
});

// Open Modal & Modal Container 4
modalOpenBtn4.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.add("hidden");
  modalBox2.classList.add("hidden");
  modalBox3.classList.add("hidden");
  modalBox4.classList.remove("hidden");
  modalBox5.classList.add("hidden");
  modalBox6.classList.add("hidden");
  modalBox7.classList.add("hidden");
});

// Open Modal & Modal Container 5
modalOpenBtn5.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.add("hidden");
  modalBox2.classList.add("hidden");
  modalBox3.classList.add("hidden");
  modalBox4.classList.add("hidden");
  modalBox5.classList.remove("hidden");
  modalBox6.classList.add("hidden");
  modalBox7.classList.add("hidden");
});

// Open Modal & Modal Container 6
modalOpenBtn6.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.add("hidden");
  modalBox2.classList.add("hidden");
  modalBox3.classList.add("hidden");
  modalBox4.classList.add("hidden");
  modalBox5.classList.add("hidden");
  modalBox6.classList.remove("hidden");
  modalBox7.classList.add("hidden");
});

// Open Modal & Modal Container 7
modalOpenBtn7.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modalBox.classList.add("hidden");
  modalBox2.classList.add("hidden");
  modalBox3.classList.add("hidden");
  modalBox4.classList.add("hidden");
  modalBox5.classList.add("hidden");
  modalBox6.classList.add("hidden");
  modalBox7.classList.remove("hidden");
});

// Close Modal
modalCloseBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal2
modalCloseBtn2.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal3
modalCloseBtn3.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal4
modalCloseBtn4.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal5
modalCloseBtn5.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal6
modalCloseBtn6.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal7
modalCloseBtn7.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Close Modal ketika di klik diluar modal content
window.addEventListener("click", function (e) {
  if (e.target == overlay) {
    overlay.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  // darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Atur posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// MuhFajar Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwn0aZH45KjwbT3gMDhhkS40nWnHTmQSf_kr66M_fB-3bgVS83K4Bpu2Efcg3bIx-ee/exec";
const form = document.forms["muhfajar-form"];
const btnLoading = document.getElementById("btn-loading");
const btnSubmit = document.getElementById("btn-submit");
const responseAlert = document.getElementById("alert");
const btnCloseAlert = document.getElementById("btn-close-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Button submit di klik
  // Tampilkan button loading, Not Allowed button submit
  btnLoading.classList.toggle("hidden");
  btnSubmit.classList.toggle("cursor-not-allowed");
  btnSubmit.classList.remove("cursor-pointer");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan button loading, Not Allowed button submit
      btnLoading.classList.toggle("hidden");
      btnSubmit.classList.toggle("cursor-not-allowed");
      btnSubmit.classList.add("cursor-pointer");
      // Tampilkan alert
      responseAlert.classList.toggle("hidden");
      responseAlert.classList.toggle("flex");
      // Reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Close Alert
btnCloseAlert.addEventListener("click", function () {
  responseAlert.classList.add("hidden");
  responseAlert.classList.remove("flex");
  btnLoading.classList.add("hidden");
});
