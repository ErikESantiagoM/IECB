/* A self-invoking function. */
(function(){
    
/* Declaring variables. */
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

/* Adding an event listener to the buttonNext element. When the button is clicked, the function changePosition is called with the argument 1. */
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

/* Adding an event listener to the buttonBefore element. When the button is clicked, the function changePosition is called with the argument -1. */
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

/**
 * It changes the position of the slider by adding or subtracting the value of the parameter passed to
 * it
 *@ param add - This is the value that will be added to the current value of the slider.
 */
    const changePosition = (add)=>{
/* Getting the current testimony and adding the value of the parameter passed to it. */
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


/* Checking if the value is equal to the length of the sliders array plus 1 or if it is equal to 0. If it is, it is setting the value to the length of the sliders array or 1. */
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

/* Adding the class testimony__body--show to the element with the index value-1. */
        sliders[value-1].classList.add('testimony__body--show');

    }

})();