let currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("total_order").innerHTML = currentUser.cart.length

function toggleMenu() {
    if (currentUser == null) {
        document.getElementById("menu_info").classList.toggle("hidden")
    } else {
        document.getElementById("menu_info").classList.toggle("hidden")
        document.getElementById("menu_info").innerHTML =
            `
            <li>Thông tin tài khoản</li>
            <li onclick = "logOut()">Đăng xuất</li>
        `
    }
}

function logOut() {
    localStorage.removeItem("currentUser");
    window.location.href = "./index.html"
}

let userLogin = JSON.parse(localStorage.getItem("currentUser")) || {}
document.getElementById("total_order").innerHTML = userLogin.cart.length

function checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    if (!currentUser.id) {
        alert('Bạn cần đăng nhập trước khi thực hiện')
        window.location.href = "./index.html"
        return
    }
}
checkLogin()

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

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
let totalPrice = 0
function renderCart() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const cart = currentUser.cart

    let stringHTML = ""; totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = products.find(item => item.id == cart[i].idSP)
        totalPrice += Number(product.price) * Number(cart[i].quantity)
        stringHTML +=
            `
            <tr>
                <td>${i + 1}</td>
                <td>
                    <img src="${product.image}" alt="" />
                </td>
                <td>${product.name}</td>
                <td>${USDollar.format(product.price)}</td>
                <td>
                    <button onclick="changeQuantity(${i}, 0)" style="width: 30px; height: 30px; background-color: #FFCA42; border: none"> - </button>
                    ${cart[i].quantity}
                    <button onclick="changeQuantity(${i}, 1)" style="width: 30px; height: 30px; background-color: #FFCA42; border: none"> + </button>
                </td>
                <td>${USDollar.format(totalPrice)}</td>
                <td>
                    <button onclick="deleteProduct(${i})" style="width: 60px; height: 40px; background-color: #FFCA42; border: none">Xoá</button>
                </td>
            </tr>
        `
    }
    document.getElementById("showOrder").innerHTML = stringHTML
    document.getElementById("totalPrice").innerHTML = USDollar.format(totalPrice)
}
renderCart()

function changeQuantity(index, status) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const cart = currentUser.cart
    const product = products.find(item => item.id == cart[index].idSP)
    switch (status) {
        case 0:
            if (cart[index].quantity - 1 > 0) {
                cart[index].quantity -= 1
            }
            break
        case 1:
            if (cart[index].quantity + 1 <= product.stock) {
                cart[index].quantity += 1
            }
            break
    }
    currentUser.cart = cart
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    renderCart()
}

function pay(){
    let userLogin = JSON.parse(localStorage.getItem("currentUser"))
    if(userLogin.cart.length === 0) {
        alert("giỏ hàng của bạn đang trống");
        return;
    }

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = String(today.getFullYear());
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    const newBill = {
        id: Date.now(),
        user_id: userLogin.id,
        createdAt: `${h}:${m}:${s}, ${dd}/${mm}/${yyyy}`,
        cart: userLogin.cart,
        totalPrice,
        status: 0,
    }
    const bills = JSON.parse(localStorage.getItem("bills")) || []
    bills.push(newBill)
    localStorage.setItem("bills", JSON.stringify(bills))

    userLogin.cart = []
    localStorage.setItem("currentUser", JSON.stringify(userLogin))

    window.location.href = "../bill.html"
}

function deleteProduct(index) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const cart = currentUser.cart
    cart.splice(index, 1)
    currentUser.cart = cart
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    renderCart()
    document.getElementById("total_order").innerHTML = cart.length
}