let arrUser = JSON.parse(localStorage.getItem("users")) || [];

function signUp(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let user = {
        cart: [],
        username,
        email,
        phone,
        password,
        confirmPassword
    };

    if (username === "" || phone === "" || email === "") {
        alert("Bạn chưa điền đầy đủ thông tin");
        return;
    }

    let isValidate = validate()

    if (!isValidate) {
        return
    }

    let check = true;
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].username == username) {
            console.log("Tài khoản đã tồn tại");
            check = false;
            break;
        }
    }
    if (check) {
        let id
        if (arrUser.length == 0) {
            id = 1
        } else {
            id = arrUser[arrUser.length - 1].id + 1
        }
        const { confirmPassword, ...data } = user
        const newInfo = {
            ...data,
            status: true,  
            id
        }
        arrUser.push(newInfo);
        localStorage.setItem("users", JSON.stringify(arrUser));
        alert("Đăng ký thành công!");
        window.location.href = "./login.html";
    }
}

function validate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const regexName = /^\w{5,}$/;
    const regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    let check = true;

    if (!regexName.test(username)) {
        document.getElementById("usernameError").innerHTML = "Tên phải có ít nhất 5 ký tự!";
        check = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    if (!regexEmail.test(email)) {
        document.getElementById("emailError").innerHTML = "Email không đúng định dạng!";
        check = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (!regexPassword.test(password)) {
        document.getElementById("passwordError").innerHTML = "Mật khẩu phải có ít nhất 6 ký tự, bao gồm ít nhất một chữ hoa và một số!";
        check = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Mật khẩu xác nhận không khớp!";
        check = false;
    } else {
        document.getElementById("confirmPasswordError").innerHTML = "";
    }

    return check;
}