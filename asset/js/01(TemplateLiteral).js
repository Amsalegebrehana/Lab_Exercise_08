//DOM
document.addEventListener('DOMContentLoaded', () =>{
    templateStringCocatenation();
    displayTemplateExpression();
})

function templateStringConcatenation(){

    // A Student Object
    const student = {name: "Abebe", age: 21}

    //String to Display
    const fullIntro = "My name is " + student.name + "and I am " + student.age + "Years Old"

    //1. Create a variable called fullIntroTemplate and Store the same string displayed above with template literal
    
    let fullIntroTemplate = `My name is ${student.name} and I am ${student.age} years old`;

    //3. Display it [change it to fullIntroTemplate]
    //templateConcatenationResult.innerHTML = fullIntro;
    templateConcatenationResult.innerHTML = fullIntroTemplate;


}

function displayTemplateExpression(){

    const result = "The sum of the Numbers is : " + sum(1,2);

    //1. Create a variable called result1 and Store the same string displayed above with template literal

    let result1 = `The sum of the Numbers is : ${sum(1,2)}`
    
    //templateExpression.innerHTML = result;
    templateExpression.innerHTML = result1;

    
    
}
function sum(x,y){
    return x + y;
}