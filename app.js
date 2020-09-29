/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function startPageGen() {
    return `
    <div class='group'>
    <div class="start-page">
        <h2> Welcome to the peruvian test where your knowlege about Peru will be tested.</h2>
        <br>
        <button type="button" id="start">Start Quiz</button>
    </div>
    </div>
    `;
};
/**
 * Generates the HTML for the section of the app 
 * that displays the question number and the score
 */
function generatingQuestion() {
    let question = '';
    let index = store.questionNumber;
    
    question = store.questions[index].question;
    
    return `
    <div>
    <div>
    <h2 class="group">Score: ${store.score}/${store.questions.length}</h2>
    </div>
    <h2>Question ${index + 1} of ${store.questions.length}: ${question}</h2>
    </div>
    `;
};
// /**
//  * Generates the list of possible answers for
//  * one question
//  */
function generatingAnswers() {
    let answers = [];
    let index = 0;
    let answersHtml = '';
    answers = store.questions[store.questionNumber].answers;
    //console.log(answers);
    answers.forEach(function (){
        answersHtml += `
        <div>
            <input type="radio" value="${answers[index]}" name="answers" required> 
            <label for=${answers[index]}" id="radial">${answers[index]}</label>
        <div>
        `;
        index++;
    });
    return `
    <div>
    <form>
        ${answersHtml}
        <div class="error"></div>
        <div>
        <button type="submit" id="eval" class="left">Submit</button>
        </div>
    </form>
    </div>
    `;

};
/**
 * Generates the HTML to display one question
 */
function displayQuestionAndAnswer() {
    let htmlQA = generatingQuestion() + generatingAnswers();
    return htmlQA;
};
 /**
 * Generates the HTML for the eval of question
 */
function generatingResults(val) {
    let answer = val;
    let correctA = store.questions[store.questionNumber].correctAnswer;
    if(answer === correctA){
        store.score++;
        return `
        <div>
            <p class='green'>CORRECT!</p>
            <p>Score: ${store.score}/${store.questions.length}</p>
            <br>
            <br>
            <br>
            <br>
            <br> 
            <button type="button" id="next" class="left">Next</button>
            </div>
        `;
    }else{
        return `
            <div>
            <p class='red'>INCORRECT!</p>
            <p>The correct answer is: <span class='bold'>${correctA}</span>.</p>
            <br>
            <br>
            <br>
            <br>
            <br> 
        	<button type="button" id="next" class="left">Next</button>
        	<div>
        `;
    };

};
// this is a test to find out if saving works
 /**
 //*- 'correct' / 'incorrect'
 *  - HTML providing the user with feedback 
 * regarding whether their answer was correct or incorrect.
 */
function finalResults() {
    return `
    <div class='group'>
        <p> Quiz has ended!</p>
        <p> Score: <span class='bold'>${store.score}/${store.questions.length}</span> </p>
        <button type="button" id="restart">Restart Quiz</button>
    </div>
    `;
};
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
/**
/* All-purpose render function that will conditionally 
 * render the page based upon the state of the STORE.
 */
function render() {
let screen = '';
if (store.quizStarted === false){
    $('.body').html(startPageGen());
    handleStartClick();
} else if (store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
    $('.body').html(displayQuestionAndAnswer());
    handleSubmitEval();  
}else {
    $('.body').html(finalResults());
    handleRestartButtonClick()
};
};



/********** EVENT HANDLER FUNCTIONS **********/
/**
 * Handles a click of the quiz's start button
 */
function handleStartClick(){
$('#start').on('click', function(e){
    e.preventDefault();
    console.log(e);
    store.quizStarted = true;
    render(); 
    });
};
 /**
 * Handles the submission of the question form
 */
function handleSubmitEval() {
    $('#eval').on('click', function(e){
        e.preventDefault();
        let radioValue = $("input[name='answers']:checked").val();
        let message =  `<p class="red">Please select an answer!</p>`;
        console.log(radioValue);
        if(radioValue > ''){
            $('.body').html(generatingResults(radioValue));
            store.questionNumber++;
            handleNextQ();
       } else {
           $('.error').html(message);
        }
        
        
    //console.log(store.questionNumber);
    });
};

 /**
 * Handles the click of the "next" button
 */
function handleNextQ() {
	$('#next').on('click', function(e) {
        e.preventDefault();
		render();
    });
};
 /**
 * Resets all values to prepare to restart quiz
 */
function handleRestartButtonClick() {
$('#restart').on('click', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    render();
});
};

// These functions handle events (submit, click, etc)
function handleQuizApp() {
    render();
    handleStartClick();
    handleSubmitEval();
    handleNextQ();
    handleRestartButtonClick();
};

handleQuizApp();