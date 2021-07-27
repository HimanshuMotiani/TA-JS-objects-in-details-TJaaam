// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

//First Approach
// let methods = {
//     isAnswerCorrect: function (index) {
//         return index == correctAnswerIndex;
//     },
//     getCorrectAnswer: function () {
//         return options[correctAnswerIndex];
//     },
// }
// function Question(title,options,correctAnswerIndex){
//     let question = Object.create(methods);
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;
//     return question;
// }


//Second Approach using function prototype
// function Question(title,options,correctAnswerIndex){
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }
// Question.prototype = {
//     isAnswerCorrect: function (index) {
//         return index == correctAnswerIndex;
//     },
//     getCorrectAnswer: function () {
//         return options[correctAnswerIndex];
//     },
// }

//Third Approach using class
class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
        return index == correctAnswerIndex;
    }
    getCorrectAnswer() {
        return options[correctAnswerIndex];
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);

