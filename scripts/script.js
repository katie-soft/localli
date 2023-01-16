// FAQ accordeon

const FAQs = document.querySelectorAll('.FAQ__item');

for (FAQ of FAQs) {
    FAQ.addEventListener('click', expandFAQ)
}

function expandFAQ() {
    this.querySelector('.FAQ__content').classList.toggle('hidden');
    this.querySelector('.FAQ__icon').classList.toggle('rotated');
}