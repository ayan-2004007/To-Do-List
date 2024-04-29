
const container = document.querySelector(".content")
const body = document.querySelector(".body")
const main = document.querySelector(".main")
const addBtn = document.querySelector(".add")
const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const inputWork = document.querySelector(".inputWork")
let btnNumber = 1

addBtn.addEventListener('click', async function () {
    // getInput()
    let userInput=await getUserInput()
    const newWork = createWork(userInput)
    container.append(newWork)
    const doneBtn = document.querySelectorAll(".doneBtn")
    doneBtn.forEach(btn => {
        btn.addEventListener('click', function (event) {
            const id = event.target.id
            document.getElementById(id).outerHTML = `<img src="Assets/done.png" alt="" class="doneBtn" id="${id}">`
            console.log(id)
        })
    })
    const deletebtn=document.querySelectorAll(".delete")
    console.log(deletebtn)
    deletebtn.forEach(btn=>{
        btn.addEventListener("click",function(event){
            const delid=event.target.id
            let parent=document.getElementById(delid).parentElement
            parent.remove()
        })
    })
})
// const userInput = submit.addEventListener("click", function () {
//     const userIp = inputWork.value
//     input.setAttribute("hidden", "")
//     main.style.filter = "none"
//     return userIp
// })
// function getInput(){
//     input.removeAttribute("hidden")
//     main.style.filter="blur(7px)"
// }
function createWork(userInput) {
    const workHtml = `<img src="Assets/hourglass_9358493.png" alt="" class="doneBtn" id="btn${btnNumber}">
    <div class="work-detail">${userInput}</div>
    <img src="Assets/delete_4041994.png" alt="" class="delete" id="delbtn${btnNumber++}">`
    const newWork = document.createElement("div")
    newWork.setAttribute("class", "works");
    newWork.innerHTML = workHtml
    return newWork
}

async function getUserInput() {
    input.removeAttribute("hidden")
    main.style.filter = "blur(7px)"
    return new Promise((resolve, reject) => {
        submit.addEventListener("click", function() {
            const userIp = inputWork.value
            input.setAttribute("hidden", "")
            main.style.filter = "none"
            resolve(userIp)
        })
    })
}
