const btnTask = document.querySelector('.btn-task')
const showForm = document.querySelector('.form-sec')
const showEditForm = document.querySelector('.form-edit-sec')
const btnSubmit = document.querySelector('.button-submit')
const btnSave = document.querySelector('.btn-save')
const btnSaveCancle = document.querySelector('.button-save-cancle')
const btnCancle = document.querySelector('.button-cancle')
const tblSec = document.querySelector('.tbl-sec')
const tblBody = document.querySelector('.tbl-body')
const toast1 = document.querySelector('.toast1')
const toast2 = document.querySelector('.toast2')
const toast3 = document.querySelector('.toast3')
const toast4 = document.querySelector('.toast4')
const toast5 = document.querySelector('.toast5')
const toast6 = document.querySelector('.toast6')
const toastDelete = document.querySelector('.toast-delete')
const toastCancle = document.querySelector('.toast-cancle')
const toastConform = document.querySelector('.toast-conform')

const txtName = document.querySelector('#txtName')
const txtEmail = document.querySelector('#txtEmail')
const txtPassword = document.querySelector('#txtPassword')
const txtRank = document.querySelector('#txtRank')

const txtEditName = document.querySelector('#txtEditName')
const txtEditEmail = document.querySelector('#txtEditEmail')
const txtEditPassword = document.querySelector('#txtEditPassword')
const txtEditRank = document.querySelector('#txtEditRank')

const tasks = JSON.parse(localStorage.getItem('task')) || []



const showTable = ()=>{
    if(tasks==''){
        tblSec.style.display = 'none'
    }else{
        tblSec.style.display = 'table'
    }
}


const appendRow = () => {
    tblBody.innerHTML = "";

    tasks.forEach((task, i) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `<tr>
                    <td colspan="0">${i + 1}.</td>
                    <td colspan="1">${task.name}</td>
                    <td colspan="2">${task.email}</td>
                    <td colspan="2">${task.password}</td>
                    <td colspan="2">${task.rank}</td>
                    <td colspan="1">
                        <button class="btn-edit" onclick='editForm(${i})'>Edit</button>
                        <button class="btn-delete" onclick='deleteRow(${i})'>Delete</button>
                    </td>
                </tr>`;
        tblBody.appendChild(tr);
    })
}

btnTask.addEventListener('click', () => {
    showForm.style.display = 'block'
    btnTask.style.display = 'none'
    tblSec.style.display = 'none'
})
btnSubmit.addEventListener('click', () => {
    if (txtName.value !== '' && txtEmail.value !== '' && txtPassword.value !== '' && txtRank.value !== '') {
        toast1.style.visibility = 'visible'
        setTimeout(() => {
            toast1.style.visibility = 'hidden'
        }, 3000)
        setTimeout(() => {
            showForm.style.display = 'none'
            btnTask.style.display = 'block'
            tblSec.style.display = 'table'
            const name = txtName.value
            const email = txtEmail.value
            const password = txtPassword.value
            const rank = txtRank.value
            tasks.push({ name, email, password, rank })
            localStorage.setItem('task', JSON.stringify(tasks))
            appendRow()
            txtName.value = '';
            txtEmail.value = '';
            txtPassword.value = '';
            txtRank.value = '';
        }, 1500)
    } else {
        alert('Please, fill all inputs')
    }
})
btnCancle.addEventListener('click', () => {
    toast2.style.visibility = 'visible'
    setTimeout(() => {
        toast2.style.visibility = 'hidden'
    }, 3000)
    setTimeout(() => {
        showForm.style.display = 'none'
        btnTask.style.display = 'block'
        tblSec.style.display = 'table'
        txtName.value = '';
        txtEmail.value = '';
        txtPassword.value = '';
        txtRank.value = '';
        showTable()
    }, 1500)
})
btnSaveCancle.addEventListener('click', () => {
    toast4.style.visibility = 'visible'
    setTimeout(() => {
        toast4.style.visibility = 'hidden'
    }, 3000)
    setTimeout(() => {
        showEditForm.style.display = 'none'
        btnTask.style.display = 'block'
        tblSec.style.display = 'table'
        txtEditName.value = '';
        txtEditEmail.value = '';
        txtEditPassword.value = '';
        txtEditRank.value = '';
    }, 1500)
})
const editForm = (i) => {
    showEditForm.style.display = 'block'
    btnTask.style.display = 'none'
    tblSec.style.display = 'none'

    const editTask = tasks[i];
    txtEditName.value = editTask.name;
    txtEditEmail.value = editTask.email;
    txtEditPassword.value = editTask.password;
    txtEditRank.value = editTask.rank;

    btnSave.addEventListener('click', () => {
        if (txtEditName.value !== '' && txtEditEmail.value !== '' && txtEditPassword.value !== '' && txtEditRank.value !== '') {
            toast3.style.visibility = 'visible'
            setTimeout(() => {
                toast3.style.visibility = 'hidden'
            }, 3000)
            setTimeout(() => {
                showEditForm.style.display = 'none'
                btnTask.style.display = 'block'
                tblSec.style.display = 'table'
                const name = txtEditName.value
                const email = txtEditEmail.value
                const password = txtEditPassword.value
                const rank = txtEditRank.value
                tasks.splice(i, 1, { name, email, password, rank })
                localStorage.setItem('task', JSON.stringify(tasks))
                appendRow()
                txtName.value = '';
                txtEmail.value = '';
                txtPassword.value = '';
                txtRank.value = '';
            }, 1500)
        } else {
            alert('Please, fill all inputs')
        }
    })
}

const deleteRow = (i) => {
    toastDelete.style.visibility = 'visible'
    toastConform.onclick = () => {
        toastDelete.style.visibility = 'hidden'
        toast5.style.visibility = 'visible'
        setTimeout(() => {
            toast5.style.visibility = 'hidden'
        }, 3000)
        setTimeout(() => {
            tasks.splice(i, 1);
            localStorage.setItem('task', JSON.stringify(tasks))
            showTable()
            appendRow()
        }, 1500)
    }
    toastCancle.onclick = () => {
        toastDelete.style.visibility = 'hidden'
        toast6.style.visibility = 'visible'
        setTimeout(() => {
            toast6.style.visibility = 'hidden'
        }, 3000)
    }
}
showTable()
appendRow()