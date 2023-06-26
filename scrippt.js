const sliderLine = document.querySelector('.slider_line'),
      prevButton = document.querySelector('.prev'),
      nextButton = document.querySelector('.next'),
      dots = document.querySelectorAll('.dot'),
      dotsHead = document.querySelectorAll('.dotHead')

let position = 0,
    dotIndex = 0

const nextSlide = () => {
    if(position <(dots.length-1)*1171){
        position += 1171
        dotIndex ++
    }else{
        position = 0
        dotIndex = 0
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
};

const prevSlide = () => {
    if(position > 0){
        position -= 1171
        dotIndex --
    }else{
        position += (dots.length-1)*1171
        dotIndex = (dots.length-1)
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
};


const thisSlide = (index) => {
    for(let dot of dots){
      dot.classList.remove('active') 
    }
    dots[index].classList.add('active');
    
    for(let dotHead of dotsHead){
        dotHead.classList.remove('active_2') 
      }
      dotsHead[index].classList.add('active_2');
};


nextButton.addEventListener('click',nextSlide);
prevButton.addEventListener('click',prevSlide);


dots.forEach((dot, index) =>{
dot.addEventListener('click',() =>{
    position = 1171 * index
    sliderLine.style.left = -position + 'px'
    dotIndex = index
    thisSlide(dotIndex)
});
});


dotsHead.forEach((dotHead, index) =>{
    dotHead.addEventListener('click',() =>{
        position = 1171 * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    });
});
