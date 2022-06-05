const slides = document.querySelectorAll('.slide')

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function (){
page.classList.toggle('dark-theme');
};

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
    
        slide.classList.add('active')
    })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }