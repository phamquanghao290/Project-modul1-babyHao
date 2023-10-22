let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let flaga = 0

document.getElementById("total_order").innerHTML = currentUser.cart.length
function toggleMenu() {
    flaga ++
    if( flaga == 1){
        if (currentUser == null) {
            document.getElementById("menu_info").classList.add("visible")
        } else {
            document.getElementById("menu_info").classList.add("visible")
            document.getElementById("menu_info").innerHTML =
                `
            <li>Thông tin tài khoản</li>
            <li onclick = "logOut()">Đăng xuất</li>
        `
        }
    }else{
        document.getElementById("menu_info").classList.remove("visible")
        flaga= 0
    }
    
}

function logOut() {
    localStorage.removeItem("currentUser");
    window.location.href = "./index.html"
}

hiddena()
visible()
function hiddena(){
    document.getElementById("menu_info").classList.remove("visible")
    flaga = 0
}
function visible() {
    document.getElementById("menu_info").classList.add("visible")
}