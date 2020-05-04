(function() {

    function buildQuiz() {

        const output = [];


        myQuestions.forEach(
            (currentQuestion, questionNumber) => {


                const answers = [];

                for (letter in currentQuestion.answers) {


                    answers.push(
                        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                    );
                }
 

                output.push(
                    `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div><br/><br/>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
                );
            }
        );


        quizContainer.innerHTML = output.join('');
    }

    function showResults() {


        const answerContainers = quizContainer.querySelectorAll('.answers');


        let numCorrect = 0;


        myQuestions.forEach((currentQuestion, questionNumber) => {


            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;


                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {

                answerContainers[questionNumber].style.color = 'blue';
            }
        });


        document.getElementById("results").innerHTML = `You got ${numCorrect} out of ${myQuestions.length}`;

        console.log(numCorrect);

    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }


    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: "Which player scored the fastest hat-trick in the Premier League?",
            answers: {
                A: "Sadio Mane",
                B: "Cristiano Ronaldo",
                C: "Duncan Ferguson",
                D: "Petr Cech"
            },
            correctAnswer: "A"
        }, {
            question: "How many clubs competed in the Premier League inaugural season",
            answers: {
                A: "33",
                B: "29",
                C: "22",
                D: "32"
            },
            correctAnswer: "C"
        },
        {
            question: "Which country has won the most World Cups?",
            answers: {
                A: "Germany",
                B: "Bulgaria",
                C: "Brazil",
                D: "Nigeria"
            },
            correctAnswer: "d"
        },
        {
            question: "The record number of World Cup goals is 16, scored by who?",
            answers: {
                A: "Cristiano Ronaldo",
                B: "Miroslav Klose",
                C: "Frank Lampard",
                D: "Stefan Schwarz"
            },
            correctAnswer: "B"
        },
        {
            question: "English rock star Elton John was twice the owner of which football club?",
            answers: {
                A: "Chelsea",
                B: "Manchester United",
                C: "Atletico Madrid",
                D: "Watford"
            },
            correctAnswer: "D"
        },
        {
            question: "Which club has won the most Champions League?",
            answers: {
                A: "Barcelona",
                B: "Real Madrid",
                C: "Juventus",
                D: "Arsenal"
            },
            correctAnswer: "B"
        },
        {
            question: "Who is the best footballer",
            answers: {
                A: "Ronaldo",
                B: "Ighalo",
                C: "Salah",
                D: "Neymar"
            },
            correctAnswer: "A"
        },
        {
            question: "Who is the Champions League top scorer of all time",
            answers: {
                A: "Lionel Messi",
                B: "Antoine Griezmann",
                C: "Cristiano Ronaldo",
                D: "Neymar"
            },
            correctAnswer: "D"
        },
        {
            question: "Which Former Tottenham manager has competed in Dakar Rally",
            answers: {
                A: "Jose Mourinho",
                B: "Andre Villas-Boas",
                C: "David Moyes",
                D: "Franks Lampard"
            },
            correctAnswer: "B"
        },
        {
            question: "The fastest goal in Premier League history came in 7.69 seconds. Who scored it?",
            answers: {
                A: "Cristiano Ronaldo",
                B: "Virgil Van DIjk",
                C: "Frank Lampard",
                D: "Shane Long"
            },
            correctAnswer: "D"
        }
    ];


    buildQuiz();


    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;


    showSlide(currentSlide);


    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
