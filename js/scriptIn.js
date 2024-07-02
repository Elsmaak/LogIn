const userEmailSignIn = document.getElementById("userEmailSignIn");
const userPasswordSignIn = document.getElementById("userPasswordSignIn");
const logIn = document.getElementById("logIn");
const logOut = document.getElementById("logOut")
const welcome = document.getElementById("welcome")
let userList = [];
const localKey = "userData";
if (userEmailSignIn != null) {
    (function () {
        if (localStorage.getItem(localKey)) {
            userList = JSON.parse(localStorage.getItem(localKey))
            let x = userList[userList.length - 1]
            userEmailSignIn.value = x.email
        }
        function checkValue() {
            for (let i = 0; i < userList.length; i++) {
                if (userEmailSignIn.value.split().includes(userList[i].email) &&
                    userPasswordSignIn.value.split().includes(userList[i].password)) {
                    logIn.href = `home.html`
                    localStorage.setItem("home", userList[i].name)
                }
                else {
                    test();
                    if (!(userEmailSignIn.value.split().includes(userList[i].email))) {
                        userEmailSignIn.classList.remove("is-valid")
                        userEmailSignIn.classList.add("is-invalid")
                        userEmailSignIn.nextElementSibling.classList.add("d-block")
                        userEmailSignIn.nextElementSibling.classList.remove("d-none")
                    }
                    else if (userEmailSignIn.value.split().includes(userList[i].email)) {
                        userEmailSignIn.classList.add("is-valid")
                        userEmailSignIn.classList.remove("is-invalid")
                        userEmailSignIn.nextElementSibling.classList.remove("d-block")
                        userEmailSignIn.nextElementSibling.classList.add("d-none")
                        break
                    }
                }
            }
        }
        logIn.addEventListener("click", function () {
            checkValue()
        })
        function test() {
            for (let i = 0; i < userList.length; i++) {
                if (!(userPasswordSignIn.value.split().includes(userList[i].password))) {
                    userPasswordSignIn.classList.remove("is-valid")
                    userPasswordSignIn.classList.add("is-invalid")
                    userPasswordSignIn.nextElementSibling.classList.add("d-block")
                    userPasswordSignIn.nextElementSibling.classList.remove("d-none")
                }
                else if (userPasswordSignIn.value.split().includes(userList[i].password)) {
                    userPasswordSignIn.classList.add("is-valid")
                    userPasswordSignIn.classList.remove("is-invalid")
                    userPasswordSignIn.nextElementSibling.classList.remove("d-block")
                    userPasswordSignIn.nextElementSibling.classList.add("d-none")
                }
            }
        }
    })()
}
if (welcome != null) {
    (function () {

        if (localStorage.getItem("home") == null) {
            welcome.innerHTML = "<h1> welcome Guest </h1>"
        }
        else {
            welcome.innerHTML = ` <h1> welcome ${localStorage.getItem("home")}  </h1>`
            logOut.addEventListener("click", function () {
                localStorage.removeItem("home")
            })
        }
    })()
}

let x = ["ahemd", "amr", "aly", "mamouh"]
console.log(!(x.includes("ahemd")))