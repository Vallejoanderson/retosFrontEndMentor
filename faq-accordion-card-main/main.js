/*Every question section is saved in questions*/
const questions = document.querySelectorAll('.question');

/*Open a forEach loop to catch every single question*/
questions.forEach(function(question){
    const btn = question.querySelector('.icon, h2');
    const currentQuestion = question.querySelector('h2');
    const prg = question.querySelector('p');
    btn.addEventListener('click', function(){
        btn.classList.toggle('rotate');
        currentQuestion.classList.toggle('light-gray');
        prg.classList.toggle('hide-para');
    });
});
