const userName = document.getElementById("userName");
const userEmailSignUp = document.getElementById("userEmailSignUp");
const userPasswordSignUp = document.getElementById("userPasswordSignUp");
const signUp = document.getElementById("signUp");
const localKey = "userData";
const alert = document.getElementById("alert")
signUp.disabled = true;
var userList = [];
let elements = []


if (localStorage.getItem(localKey)) {
    userList = JSON.parse(localStorage.getItem(localKey))
};

function addUser() {
    var user =
    {
        name: userName.value,
        email: userEmailSignUp.value,
        password: userPasswordSignUp.value,
    }
    userList.push(user)
    locatUpdate()
    clearValidation()
    clear()
};

userName.addEventListener("input", function (e) {
    validation(e.target)
});
userEmailSignUp.addEventListener("input", function (e) {
    validation(e.target)
});
userPasswordSignUp.addEventListener("input", function (e) {
    validation(e.target)
});
function validation(element) {
    var regex = {
        userName: /^[A-Z][a-z]{3,8}$/,
        userEmailSignUp: /^[\w]{5,10}@((gmail)|(yahoo))\.(com)$/,
        userPasswordSignUp: /^[A-Z][\w]{5,10}$/,
    }
    elements.push(element)
    if (regex[element.id].test(element.value)) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.remove("d-block")
        element.nextElementSibling.classList.add("d-none")
        alert.innerHTML = "must has more than 5 letters followed by @gamil.com"
        if (userName.classList.contains("is-valid") &&
            userEmailSignUp.classList.contains("is-valid") &&
            userPasswordSignUp.classList.contains("is-valid")) {
            signUp.disabled = false
        }
    } else {
        element.nextElementSibling.classList.add("d-block")
        element.nextElementSibling.classList.remove("d-none")
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")

    }
};
function clear() {
    userName.value = null
    userEmailSignUp.value = null
    userPasswordSignUp.value = null
}
function emailCheck() {
    for (let i = 0; i < userList.length; i++) {
        if (userEmailSignUp.value.split().includes(userList[i].email)) {
            alert.innerHTML = "Eamil is Already Used"
            userEmailSignUp.nextElementSibling.classList.add("d-block")
            userEmailSignUp.nextElementSibling.classList.remove("d-none")
            return false
        }

    }
    return true
}

function clearValidation() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("is-valid")
    }
    signUp.disabled = true
};
function locatUpdate() {
    localStorage.setItem(localKey, JSON.stringify(userList))
};

signUp.addEventListener("click", function () {
    if (emailCheck() === true) {
        addUser()
        window.location.href = 'index.html'
    }
});
