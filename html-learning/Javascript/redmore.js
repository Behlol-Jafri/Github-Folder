
const moreContent = document.querySelector("#moreContent")
const toggleBtn = document.querySelector('#toggleBtn')
const dropdown = document.querySelector(".dropdown")
const dropdownBtn = document.querySelector("#dropdownBtn")
const showContent = () => {
    if (moreContent.style.display == 'none') {
        moreContent.style.display = 'block'
        toggleBtn.innerText = 'Read Less'
    } else {
        moreContent.style.display = 'none'
        toggleBtn.innerText = 'Read More'
    }
}



const handleDropdown = ()=>{
    
}
