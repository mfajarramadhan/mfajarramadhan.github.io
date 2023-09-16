const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// GSAP
gsap.from('.profile2 img', { duration: 1.2, rotateY: 780 });

// GSAP Text Plugin
gsap.registerPlugin(TextPlugin);
gsap.to('.typing', { duration: 1.7, delay: 1.5, text: 'Junior Web Developer' });
gsap.from('.content h1', { duration: 1.5, x: -50, opacity: 0, delay: .3, ease: 'back' });
gsap.from('nav', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });


// Form to Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbz60Ewyp7POuX-o1UWWXz-cW4693UJx_St0iiLAG7NJmRBEbWlqGKz3ya-PhTxc5anb/exec';
const form = document.forms['muhfajar-contactform']
const btnSubmit = document.querySelector(".submit");
const btnLoading = document.querySelector(".loading");
const myAlert = document.querySelector(".alert");



form.addEventListener('submit', e => {
    e.preventDefault()
    // Klik submit, btnloading muncul, btnSubmit hilang
    btnLoading.classList.toggle("none");
    btnSubmit.classList.toggle("none")
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // btnloading hilang, btnSubmit & alert muncul
            btnLoading.classList.toggle("none");
            btnSubmit.classList.toggle("none")
            myAlert.classList.toggle("none")
            // reset form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
