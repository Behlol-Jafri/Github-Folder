    const slide = document.querySelector("#slide");
    const totalImages = 3;
    let index = 0;

    function moveSlide() {
      index++;
      slide.style.transform = `translateX(-${index * 100}%)`;
      if (index === totalImages) {
        setTimeout(() => {
          slide.style.transition = "none"; 
          index = 0;
          slide.style.transform = "translateX(0)";
          void slide.offsetWidth;
          slide.style.transition = "transform 0.8s ease-in-out";
        }, 800); 
      }
    }
    function showPrev(){
       index--;
      slide.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector("#next").addEventListener("click", moveSlide);
    document.querySelector("#prev").addEventListener("click", showPrev);

    setInterval(moveSlide, 6000);

    const showNavbar = () => {
      bar.style.display = 'none'
      cancle.style.display = 'block'
      nav.style.display = 'block'
    }
    const closeNavbar = () => {
      bar.style.display = 'block'
      cancle.style.display = 'none'
      nav.style.display = 'none'
    }
    const showPages = () => {
      if(pages.style.display == 'block'){
        pages.style.display = 'none'
      }else{
        pages.style.display = 'block'
      }
    }
    const bar = document.querySelector('.bar')
    bar.addEventListener('click', showNavbar)
    const cancle = document.querySelector('.cancle')
    cancle.addEventListener('click', closeNavbar)
    const page = document.querySelector('#page')
    page.addEventListener('click', showPages)
    const pages = document.querySelector('#pages')
    const nav = document.querySelector('.responsive-nav')
    

     document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener('scroll', function () {
                const navbar = document.querySelector('.nav-sec');
                if (window.scrollY > 300) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
            });
        });



    const slideCard = document.querySelector("#slide-card");
    const totalImg = 3;
    let i = 0;

    function moveSlideCard() {
      i++;
      slideCard.style.transform = `translateX(-${i * 100}%)`;
      if (i === totalImg) {
        setTimeout(() => {
          slideCard.style.transition = "none"; 
          i = 0;
          slideCard.style.transform = "translateX(0)";
          void slideCard.offsetWidth;
          slideCard.style.transition = "transform 0.8s ease-in-out";
        }, 800); 
      }
    }
    setInterval(moveSlideCard, 10000);