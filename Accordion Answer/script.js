// Select all questions
const questions = document.querySelectorAll('.accordion-question');

// Add click event to each question
questions.forEach((question) => {
  question.addEventListener('click', () => {
    // Close all answers
    questions.forEach((q) => {
      const answer = q.nextElementSibling;
      if (answer.classList.contains('active')) {
        answer.classList.remove('active');
      }
    });

    // Toggle the clicked one
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
  });
});
