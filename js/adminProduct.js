const inputName = document.getElementById("nameProduct")
const inputCategory = document.getElementById("categorySelect")
const inputImg = document.getElementById("imgProduct")
const inputPrice = document.getElementById("priceProduct")
const stock = document.getElementById("sl")
const previewImg = document.getElementById("image")

let dataImage = null
let idUpdate = null

function renderCategory() {
    const categories = JSON.parse(localStorage.getItem("category")) || []
    let stringHTML = `<option value="">Chọn loại sách</option>`
    for (let i = 0; i < categories.length; i++) {
        stringHTML +=
            `
               <option value = "${categories[i].id}"> ${categories[i].name}</option>
            `
    }
    document.getElementById("categorySelect").innerHTML = stringHTML
}
renderCategory()

function changeImage() {
    const file = document.getElementById("imgProduct").files[0]
    const reader = new FileReader();
    reader.onload = function () {
        dataImage = reader.result;
        document.getElementById("image").src = dataImage
    };
    reader.readAsDataURL(file);
}

function add() {
    const newInfo = {
        id: Math.floor(Math.random() * 999999),
        name: inputName.value,
        categoryId: inputCategory.value,
        price: +inputPrice.value,
        stock: stock.value,
        image: dataImage
    }

    if (!newInfo.name || !newInfo.price || !newInfo.stock || !dataImage) {
        alert("Ban can nhap du thong tin !")
        return
    }

    const products = JSON.parse(localStorage.getItem("products")) || []
    products.push(newInfo)
    localStorage.setItem("products", JSON.stringify(products))
    renderProducts()

    inputName.value = ""
    inputPrice.value = ""
    stock.value = ""
    previewImg.src = ""
    dataImage = null
}
let category = JSON.parse(localStorage.getItem("category"))
function renderProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || []
    let stringHTML = ""
    for (let i = 0; i < products.length; i++) {
        let find_category = category.find((category) => category.id == products[i].categoryId)
        stringHTML +=
            `   
            <tr>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>
                    <img width="100px" src="${products[i].image}" alt="" />
                </td>   
                <td>${find_category.name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].stock}</td>
                <td>
                    <button onclick="clickUpdateProduct(${products[i].id})" class="SXbutton">Sửa</button>
                    <button onclick="deleteProduct(${i})" class="SXbutton">Xóa</button>
                </td>
            </tr>
        `
    }
    document.getElementById("table_body").innerHTML = stringHTML
}
renderProducts()

function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem("products")) || []
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    renderProducts()
}

function clickUpdateProduct(id) {
    const products = JSON.parse(localStorage.getItem("products")) || []
    const index = products.findIndex(item => item.id == id)
    idUpdate = products[index].id

    inputName.value = products[index].name
    inputPrice.value = products[index].price
    inputCategory.value = products[index].categoryId
    stock.value = products[index].stock
    dataImage = products[index].image
    previewImg.src = products[index].image
}

function update() {
    const products = JSON.parse(localStorage.getItem("products")) || []
    const index = products.findIndex(item => item.id == idUpdate)

    const newInfo = {
        id: products[index].id,
        name: inputName.value,
        categoryId: inputCategory.value,
        price: inputPrice.value,
        stock: stock.value,
        image: dataImage
    }

    if (!newInfo.name || !newInfo.price || !newInfo.stock || !dataImage) {
        alert("Ban can nhap du thong tin !")
        return
    }

    products[index] = newInfo
    localStorage.setItem("products", JSON.stringify(products))
    renderProducts()

    inputName.value = ""
    inputPrice.value = ""
    stock.value = ""
    previewImg.src = ""
    dataImage = null
    previewImg.src = ""
    idUpdate = null
}
