// <!-- We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

// 1. Quiz is a collection of Questions.
// 2. Question will need `Title`, `Options` and `Correct Answer`

// ### Make a Question class with these data and methods:

// DATA:

// - Title of the question
// - Options of the question
// - Correct answer

// METHODS:

// - isCorrect(answer)

// Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

// - getCorrectAnswer()
//   This method will return the correct answer of the question.

// - createUI (this will create the layout of a single question)

// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

// ### Make quiz class with these data and properties

// DATA:

// - allQuestions
//   Collection of Questions. An array with multiple question.
// - activeIndex
//   Index of the active visible question
// - score
//   Total number of correct answer

// METHOD:

// - nextQuestion()
//   This method should get the next question.
// - createUI
//   This will create the ui of the whole app.
// - updateScore
//   This method will update the score. -->

class Questions {
    constructor(title, options, correctAnswer) {
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answer) {
        if (answer == this.correctAnswer) {
            document.querySelector(".result").innerHTML = "Result: " + `Your answer is correct`;
            document.querySelector(".result").innerHTML = "Result: " + `Your answer is correct`;
            return true;
        }
        document.querySelector(".result").innerHTML = "Result: " + `Your answer is wrong`;
        return false;
    }
    getCorrectAnswer() {
        document.querySelector(".result").innerText = "Result: " + this.correctAnswer;
        return this.correctAnswer;
    }
    createUi() {
        let mainDiv = document.createElement("div")
        let h4 = document.createElement("h4");
        h4.innerText = this.title;

        let options = document.createElement("div");
        options.classList.add("options")
        let div1 = document.createElement("div");
        let input1 = document.createElement("input");
        input1.type = "radio"
        input1.name = "option"
        input1.value = this.options[0];

        let span1 = document.createElement("span");
        span1.innerText = this.options[0];
        div1.append(input1, span1);
        let div2 = document.createElement("div");
        let input2 = document.createElement("input");
        input2.type = "radio"
        input2.name = "option"
        input2.value = this.options[1];
        let span2 = document.createElement("span");
        span2.innerText = this.options[1];
        div2.append(input2, span2);
        let div3 = document.createElement("div");
        let input3 = document.createElement("input");
        input3.type = "radio"
        input3.name = "option"
        input3.value = this.options[2];
        let span3 = document.createElement("span");
        span3.innerText = this.options[2];
        div3.append(input3, span3);
        let div4 = document.createElement("div");
        let input4 = document.createElement("input");
        input4.type = "radio"
        input4.name = "option"
        input4.value = this.options[3];
        let span4 = document.createElement("span");
        span4.innerText = this.options[3];
        div4.append(input4, span4);
        let showOutput = document.createElement("div")
        showOutput.classList.add("result");
        let score = document.createElement("p")
        score.classList.add("score");
        options.append(div1, div2, div3, div4, showOutput, score)

        let buttons = document.createElement("div")
        buttons.classList.add("buttons")

        let submit = document.createElement("input");
        submit.value = "Submit";
        submit.type = "button"
        submit.classList.add("submit","color")


        let nextQuestion = document.createElement("input");
        nextQuestion.value = "Next Question";
        nextQuestion.type = "button"
        nextQuestion.classList.add("next","color")

        let correctAnswer = document.createElement("input");
        correctAnswer.value = "Show Answer";
        correctAnswer.type = "button"
        correctAnswer.classList.add("correctAnswer","color")

        buttons.append(submit, nextQuestion, correctAnswer);
        mainDiv.append(h4, options, buttons)
        return mainDiv;
    }
}
class Quiz {
    constructor(root, allQuestions = [], activeIndex, score) {
        this.root = root;
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
    }
    nextQuestion() {
        this.activeIndex = this.activeIndex + 1;
        this.createUI();
    }
    createUI() {
        this.root.innerHTML = "";
        if (this.activeIndex < this.allQuestions.length) {
            let quest = new Questions(this.allQuestions[this.activeIndex].question, this.allQuestions[this.activeIndex].options, this.allQuestions[this.activeIndex].correctAnswer);
            let ui = quest.createUi();
            const that = this;
            // console.log(uScore);
            ui.querySelector(".submit").
                addEventListener("click", function () {
                    var val = document.getElementsByName('option');

                    for (let i = 0; i < val.length; i++) {
                        if (val[i].checked) {

                            var result = quest.isCorrect(val[i].value);
                        }
                    }
                        that.updatedScore(result);
                    
                });
            ui.querySelector(".next").addEventListener("click",
                this.nextQuestion.bind(this))
                ;
            ui.querySelector(".correctAnswer").
                addEventListener("click", function () {
                    quest.getCorrectAnswer();
                });
            root.append(ui);
        }
        else document.querySelector(".over").innerHTML = `Total Score:`  + this.score;

    }

    updatedScore(result) {
        if (result) {
            this.score = this.score + 1
            document.querySelector(".score").innerText = "Total Score: " + this.score;
            return this.score;
        }
        else {
            this.score = this.score - 1;
            document.querySelector(".score").innerText = "Total Score: " + this.score;
            return this.score;
        }
    }
}
let question = "Which crop is sown on the largest area in India";
let options = ["Rice", "Wheat", "Sugarcane", "Maize"];
let correctAnswer = "A";
// console.log(data);
let root = document.querySelector(".article-questions")
let quiz = new Quiz(root, data, 0, 0);
quiz.createUI();
