const input = document.querySelector('input')
const btn = document.querySelector('button')
const ul = document.querySelector('ul')
const tasks = JSON.parse(localStorage.getItem('task')) || []
console.log(tasks)

const inputValue = () => {
    ul.innerHTML = ""
    tasks.forEach((task, index) => {
        const li = document.createElement('li')
        li.innerText = task
        li.style.margin = '20px 10px'
        li.style.padding = '20px 10px'

        const edit = document.createElement('button')
        edit.innerText = 'Edit'

        const deteteBTN = document.createElement('button')
        deteteBTN.innerText = 'delete'

        console.log(" edit = ", edit)
        console.log(" deteteBTN = ", deteteBTN)

        li.appendChild(edit)
        li.appendChild(deteteBTN)
        ul.appendChild(li)
        input.value = ""

        edit.addEventListener('click', () => {
            input.value = li.childNodes[0].nodeValue.trim()
            tasks.splice(index, 1) // ✅ remove old value from array
            localStorage.setItem('task', JSON.stringify(tasks))
            li.remove()
        })

        deteteBTN.addEventListener('click', () => {
            tasks.splice(index, 1) // ✅ remove from array
            localStorage.setItem('task', JSON.stringify(tasks))
            li.remove()
        })
    })
}

const addTask = () => {
    if (input.value !== "") {
        tasks.push(input.value.trim())
        localStorage.setItem('task', JSON.stringify(tasks))
        inputValue()
    } else {
        alert("please enter task")
    }
}

inputValue()

btn.addEventListener('click', () => addTask())
