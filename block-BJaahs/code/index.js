//normal variables and method
let title = "test";
let options = [1,2,3,4];
let correctAnswerIndex  = 2;
function isAnswerCorrect(index){
    if(correctAnswerIndex == index){
        return true;
    }
    else return false;

}
function getCorrectAnswer(index){
     return correctAnswerIndex;

}
//by object
let obj = {
    title:"title",
    options:[1,2,3,4],
    correctAnswerIndex:2,
    isAnswerCorrect: function(index){
        if(obj.correctAnswerIndex == index){
            return true;
        }
        else return false;
    },
    getCorrectAnswer: function(){
        return correctAnswerIndex;
    }
}

//by function
function createObj(title, options, correctAnswerIndex){
    let obj = {};    
    obj.title = title
    obj.options = options,
    obj.correctAnswerIndex = correctAnswerIndex,
    obj.isAnswerCorrect =  function(index){
            if(obj.correctAnswerIndex == index){
                return true;
            }
            else return false;
        },
    obj.getCorrectAnswer =  function(){
            return correctAnswerIndex;
        }
        return obj;
}

// convert to this
function createObj(title, options, correctAnswerIndex){
    let obj = {};    
    obj.title = title
    obj.options = options,
    obj.correctAnswerIndex = correctAnswerIndex,
    obj.isAnswerCorrect =  function(index){
            if(this.correctAnswerIndex == index){
                return true;
            }
            else return false;
        },
    obj.getCorrectAnswer =  function(){
            return this.correctAnswerIndex;
        }
        return obj;
}

const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
};
let user1 = new Object(testData)
let user2 = new Object(testData)
let test = createObj(user1.title,user1.options,user1.correctAnswerIndex);
test.isAnswerCorrect(1)


