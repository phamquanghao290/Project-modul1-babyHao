let userLogin = JSON.parse(localStorage.getItem("currentUser")) || {}
let users = JSON.parse(localStorage.getItem("users"));
let listProduct = JSON.parse(localStorage.getItem("products"))

// if (userLogin.id) {
//     document.getElementById("icon-use").innerHTML = `
//     <a class="login-user" onclick="logout()">
//     <i class="fa-solid fa-arrow-right-from-bracket"></i> <br>
//         <span>ĐĂNG XUẤT</span>
//     </a>
//     `
//     document.getElementById("total-order").innerHTML = userLogin.cart.length;
// } else {
//     document.getElementById("icon-use").innerHTML = `
//         <a class="login-user" href="./login.html">
//             <i class="fa-solid fa-user"></i> <br>
//             <span>ĐĂNG NHẬP</span>
//         </a>
//     `
// }
function toggleMenu() {
    if (userLogin == null) {
        document.getElementById("menu_info").classList.toggle("hidden")
    } else {
        document.getElementById("menu_info").classList.toggle("hidden")
        document.getElementById("menu_info").innerHTML =
            `
            <li>Thông tin tài khoản</li>
            <li onclick = "logout()">Đăng xuất</li>
        `
    }
}

function logout() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(item => item.id == currentUser.id)
    users[index].cart = currentUser.cart
    localStorage.setItem("users", JSON.stringify(users))

    localStorage.removeItem("currentUser")
    location.reload()
}

function showSearch() {
    let showSearch = document.getElementById("search");
    showSearch.classList.toggle("hidden");
}


function renderBills() {
    let bills = JSON.parse(localStorage.getItem("bills")) || [];
    let userLogin = JSON.parse(localStorage.getItem("currentUser")) || [];
    let stringCart = "";
    let stringHTML = "";
    const data = bills.filter(item => item.user_id == userLogin.id)
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        stringCart = ""
        let cart = data[i].cart;
        for (let j = 0; j < cart.length; j++) {
            let product = listProduct.find((e) => e.id == cart[j].idSP)
            console.log(product);
            stringCart +=
                `
                <div>
                    <img width="50px" src="${product.image}" />
                    <br>
                    <span>${product.name}</span>
                    <span>SL: ${cart[j].quantity}</span>
                </div>
            `
        }
        stringHTML +=
            `
                <tr style="border-bottom: 1px solid #333;">
                    <td>${i + 1}</td>
                    <td>${data[i].id}</td>
                    <td>${stringCart}</td>
                    <td>${data[i].createdAt}</td>
                    <td>${Number(data[i].totalPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                    <td>${data[i].status == 0 ? "Đang chờ" : data[i].status == 1 ? "Chấp nhận" : "Từ chối"}</td>
                </tr>           
        `
    }
    document.getElementById("showOrder").innerHTML = stringHTML;
}
renderBills()

function success() {
    alert("Đặt hàng thành công");
    window.location.href = "./index.html"
}

function deleteBill(index) {
    let bills = JSON.parse(localStorage.getItem("bills"));
    bills[index].status = 2
    localStorage.setItem("bills", JSON.stringify(bills));
    renderBills();
}