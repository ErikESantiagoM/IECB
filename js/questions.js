/* A self-invoking function. It is being called on the page load. */
(function(){
/* Creating a constant variable called titleQuestions. It is using the spread operator to create an array of all the elements with the class of questions__title. */
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
/* Logging the array of all the elements with the class of questions__title. */
    console.log(titleQuestions)

/* A function that is being called on the page load. It is adding an event listener to each question title. When the title is clicked, it is toggling the class of the parent element to add padding. It is also toggling the class of the arrow to rotate it. It is also checking to see if the height of the answer is 0. If it is, it is setting the height to the scroll height. */
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();