const navButton = document.getElementById('btn')
navButton.addEventListener('click', function() {
   const slide = document.querySelector('.navslide')
   slide.classList.toggle('slide')
})

const close = document.querySelectorAll('.navslide ul li')
close.forEach(e => {
   e.addEventListener('click', function() {
      const slide = document.querySelector('.navslide')
      slide.classList.toggle('slide')
   })
});