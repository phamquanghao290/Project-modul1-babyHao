const validarLogin = () => {
  alert("Teste");
};


const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
function renderProduct() {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  let productAdded = document.getElementById("product");
  for (let i = 0; i < listProduct.length; i++) {
    let result = `
          <div class="card box_img element" style="width: 18rem;">
            <img src="${
              listProduct[i].img
            }" class="card-img-top" alt="..." style="margin-left: -25px;border: 2px solid lightpink;">
            <div class="card-body">
              
              <p class="card-text price">${listProduct[i].ten}</p>
              <p class="card-text price">${listProduct[i].gia + `VNĐ`}</p>
              <button class="btn btn-primary addCart" onclick="addToCart(${
                listProduct[i].ID
              })">Thêm vào giỏ hàng</button>
            </div>
          </div>
      `;

    productAdded.innerHTML += result;
  }
}
renderProduct();

function renderNumberCart() {
  let flaguser = localStorage.getItem("flaguser");
  let listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
  let numberCart = 0;
  if (listProductCart) {
    for (let i = 0; i < listProductCart.length; i++) {
      if (listProductCart[i].username == flaguser) {
        numberCart++;
      }
    }
  }
  localStorage.setItem("numberCart", numberCart);
  document.getElementById("numberCart").innerHTML = numberCart;
}
document.getElementById("numberCart").innerHTML =
  localStorage.getItem("numberCart");
function addToCart(id) {
  let flaguser = localStorage.getItem("flaguser");
  if (flaguser == null) {
    const snackbar = document.createElement("div");
    snackbar.classList.add("snackbar");
    snackbar.innerText = "Vui lòng đăng nhập.";
    document.body.appendChild(snackbar);
    setTimeout(() => {
      snackbar.remove();
    }, 2000);
    setTimeout(() => {
      window.location.href = "../html/signupsignin.html";
    }, 2000);
  } else {
    let listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    if (listProductCart == null) {
      listProductCart = [];
    }
    for (let index = 0; index < listProduct.length; index++) {
      if (listProduct[index].ID == id) {
        let flag = true;
        for (let i = 0; i < listProductCart.length; i++) {
          if (
            listProductCart[i].ID == id &&
            listProductCart[i].username == flaguser
          ) {
            flag = false;
            break;
          }
        }
        if (!flag) {
          const snackbar = document.createElement("div");
          snackbar.classList.add("snackbar");
          snackbar.innerText = "Sản phẩm đã có trong giỏ hàng.";
          document.body.appendChild(snackbar);
          setTimeout(() => {
            snackbar.remove();
          }, 3000);
        } else {
          listProductCart.push(listProduct[index]);
          listProductCart[listProductCart.length - 1].username = flaguser;
          localStorage.setItem(
            "listProductCart",
            JSON.stringify(listProductCart)
          );
          const snackbar = document.createElement("div");
          snackbar.classList.add("snackbar");
          snackbar.innerText = "Đã  thêm vào giỏ hàng";
          document.body.appendChild(snackbar);

          setTimeout(() => {
            snackbar.remove();
          }, 3000);
        }
        break;
      }
    }
    renderNumberCart();
  }
}
