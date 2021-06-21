const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.icon');
    const currentQuestion = question.querySelector('h2');
    const prg = question.querySelector('p');
    btn.addEventListener('click', function(){
	prg.classList.toggle('hide-para');
	currentQuestion.classList.toggle('light-gray');
    });
});