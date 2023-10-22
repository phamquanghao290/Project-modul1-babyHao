function renderDetail() {
    let idProduct = JSON.parse(localStorage.getItem("idProduct"));
    let products = JSON.parse(localStorage.getItem("products"))
    let productDetail = products.find(item => item.id == idProduct)

    document.getElementById("imgInfor").src = productDetail.image;
    document.getElementById("nameInfor").innerHTML = productDetail.name;
    document.getElementById("priceInfor").innerHTML = productDetail.price;
}
renderDetail()

function addToCart() {
    // lấy id sản phẩm hiện tại
    let idProduct = JSON.parse(localStorage.getItem("idProduct")) || -1;
    // lấy thông tin người dùng hiện tại
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    if (currentUser.id) {
        alert("Bạn chưa đăng nhập");
        return;
     }
    //  lấy ra cart của người dùng hiện tại
     let cart = 


}
addToCart()