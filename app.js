window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window__scroll', window.scrollY > 0)
})

// show/hind faq


const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');


        if (icon.className === 'uil uil-plus-circle') {
            icon.className = 'uil uil-minus-circle'
        }
        else {
            icon.className = 'uil uil-plus-circle'
        }
    })
})



// nav menu


const navMenu = document.querySelector('.nav__menu');
const openBtn = document.getElementById('open-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');


openBtn.addEventListener('click', () => {
    navMenu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    navMenu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
})