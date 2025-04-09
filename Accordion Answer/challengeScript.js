const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; 

        questions.forEach((otherQuestion) => {
            const otherAnswer = otherQuestion.nextElementSibling;
            if (otherQuestion != question) {
                otherAnswer.classList.remove('active');
            }
        });

        answer.classList.toggle('active');
    });
});