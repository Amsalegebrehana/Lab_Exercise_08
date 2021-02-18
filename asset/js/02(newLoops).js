//DOM LOAD

document.addEventListener('DOMContentLoaded', () =>{

    forINLoop();
    forOFLoop();
})

function forINLoop() {
     // A Student Object 
     const student = { name: "Abebe", age: 21, year: "2dn year" }
    // 1. Create a for in loop that iterate over the student object

        for (let i in student){
            forINLoop.innerHTML +=`
                <li class="list-group-item" > ${i} ; ${student[i]}
            `;
        }
}


function forOFLoop(){
    const students = [{ name: "Abebe", age: 21, year: "2dn year" }, { name: "Kebede", age: 22, year: "2dn year" }, { name: "Abebech", age: 23, year: "2dn year" }]

    // 1. Create a for of loop that iterate over the students Array and displays the names of students 
    for (const[name, value] of students){
        forOFLoop.innerHTML += `
            <li class = "list-group-item">Name : Abebe</li>
        `
    }

}