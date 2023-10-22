// let listItems = []
// let listProducts = [
//     {
//         id: 1,
//         name: "Lịch sử của Trà",
//         price: 23,
//         img: ["./img/Líchucuatra.jpg"],
//         quantity: 50,
//         categoryId: 4,
//     },
//     {
//         id: 2,
//         name: "Ai tăng lương cho bạn",
//         price: 23,
//         img: ["./img/aitangluong.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 3,
//         name: "Hãy về với cha",
//         price: 15,
//         img: ["./img/hayvevoicha.jpg"],
//         quantity: 50,
//         categoryId: 5,
//     },
//     {
//         id: 4,
//         name: "Muốn an được an",
//         price: 12,
//         img: ["./img/muonan.jpg"],
//         quantity: 50,
//         categoryId: 5,
//     },
//     {
//         id: 5,
//         name: "Trở về cõi sáng",
//         price: 15,
//         img: ["./img/trovecoisang.jpg"],
//         quantity: 50,
//         categoryId: 7,
//     },
//     {
//         id: 6,
//         name: "Minh Triết trong đời sống",
//         price: 13,
//         img: ["./img/minhtriet.png"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 7,
//         name: "Muôn kiếp nhân sinh",
//         price: 15,
//         img: ["./img/muonkiepnhansinh.jpg"],
//         quantity: 50,
//         categoryId: 7,
//     },
//     {
//         id: 8,
//         name: "Mắt bão",
//         price: 21,
//         img: ["./img/matbao.jpg"],
//         quantity: 50,
//         categoryId: 7,
//     },
//     {
//         id: 9,
//         name: "Trần Triều nhàn thoại",
//         price: 14,
//         img: ["./img/trantrieunhanthoai.jpg"],
//         quantity: 50,
//         categoryId: 4,
//     },
//     {
//         id: 10,
//         name: "Từ điển mĩ học",
//         price: 32,
//         img: ["./img/tudienmihoc.jpg"],
//         quantity: 50,
//         categoryId: 4,
//     },
//     {
//         id: 11,
//         name: "Rừng Nauy",
//         price: 20,
//         img: ["./img/rungnauy.jpg"],
//         quantity: 50,
//         categoryId: 6,
//     },
//     {
//         id: 12,
//         name: "Lực lượng mãnh hổ",
//         price: 15,
//         img: ["./img/manhho.jpg"],
//         quantity: 50,
//         categoryId: 4,
//     },
//     {
//         id: 13,
//         name: "Kiếp nào ta tìm thấy nhau",
//         price: 19,
//         img: ["./img/kiepnao.jpg"],
//         quantity: 50,
//         categoryId: 6,
//     },
//     {
//         id: 14,
//         name: "The Dark Light",
//         price: 43,
//         img: ["./img/book1.png"],
//         quantity: 50,
//         categoryId: 7,
//     },
//     {
//         id: 15,
//         name: "Atomic One's",
//         price: 40,
//         img: ["./img/book2.png"],
//         quantity: 50,
//         categoryId: 7,
//     },
//     {
//         id: 16,
//         name: "Con người biểu tượng",
//         price: 25,
//         img: ["./img/connguoi.jpg"],
//         quantity: 50,
//         categoryId: 7,
//     },
//     {
//         id: 17,
//         name: "Cây cam ngọt của tôi",
//         price: 25,
//         img: ["./img/caycam.jpg"],
//         quantity: 50,
//         categoryId: 5,
//     },
//     {
//         id: 18,
//         name: "TheJourneyOfYouth",
//         price: 21,
//         img: ["./img/TheJourneyOfYouth.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 19,
//         name: "Rèn luyện tư duy phản biện",
//         price: 27,
//         img: ["./img/Rèn luyện tư duy phản biện.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 20,
//         name: "Kỉ luật bản thân",
//         price: 25,
//         img: ["./img/Kỉ luật bản thân.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 21,
//         name: "Lãnh đạo bằng câu hỏi",
//         price: 20,
//         img: ["./img/lanhdao.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 22,
//         name: "Tâm lí học về tiền",
//         price: 25,
//         img: ["./img/tien.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
//     {
//         id: 23,
//         name: "Ổn định hay tự do",
//         price: 26,
//         img: ["./img/ondinhhaytudo.jpg"],
//         quantity: 50,
//         categoryId: 8,
//     },
// ]
// localStorage.setItem("products", JSON.stringify(listProducts))

// let category = [
//     { id: 4, name: 'Lịch sử' },
//     { id: 5, name: 'Đời sống' },
//     { id: 6, name: 'Tâm lí tình cảm' },
//     { id: 7, name: 'Tiểu thuyết' },
//     { id: 8, name: 'Giáo dục' },
// ]
// localStorage.setItem('category', JSON.stringify(category))

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
// document.getElementById("total_order").innerHTML = currentUser.cart.length;
let listItems = JSON.parse(localStorage.getItem("products"));
console.log(listItems);
function logout() {
    localStorage.removeItem("currentUser");
}

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function renderCategory() {
    let categoryRender = JSON.parse(localStorage.getItem("category"));
    let result = "";
    for (let i = 0; i < categoryRender.length; i++) {
        result += `
            <li onclick="render(${categoryRender[i].id})">${categoryRender[i].name}</li>
        `;
    }
    document.getElementById("category_box").innerHTML = result;
}
renderCategory();

let currentPage = 1;
let renderArr = [];

function render(id) {
    // Filter products based on the category ID
    console.log(listItems);
    renderArr = listItems.filter((product) => product.categoryId == id);
    console.log(renderArr);
    if (id === 9) {
        renderArr = listItems;
    }
    renderProductsOnPage(currentPage);
    renderPagination();
}

function renderProductsOnPage(page) {
    const productsPerPage = 6;
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    let total = "";
    for (let i = start; i < Math.min(end, renderArr.length); i++) {
        total += `
             <div class="card" onclick="gotoDetail('${renderArr[i].id}')">
                <div class="image">
                    <img src="${renderArr[i].image}" alt="book1">
                </div>
                <div class="product_text">
                    <h2>${renderArr[i].name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <h3>${USDollar.format(renderArr[i].price)}</h3>
                    <button onclick = "addCart(${renderArr[i].id})">Add to Cart</button>
                </div>
            </div>
        `;
    }
    document.getElementsByClassName("box")[0].innerHTML = total;
}

function renderPagination() {
    const totalPage = Math.ceil(renderArr.length / 6);
    let stringHTML = "";

    for (let i = 1; i <= totalPage; i++) {
        if (i === currentPage) {
            stringHTML += `
                <button onclick="chooseItemPage(${i})" class="item-page item-page-choose">${i}</button>
            `;
        } else {
            stringHTML += `
                <button onclick="chooseItemPage(${i})" class="item-page">${i}</button>
            `;
        }
    }

    document.getElementById("pagination").innerHTML = stringHTML;
}

function chooseItemPage(page) {
    currentPage = page;
    renderProductsOnPage(currentPage);
    renderPagination();
}

function changePage(status) {
    const totalPage = Math.ceil(renderArr.length / 6);

    switch (status) {
        case 0:
            currentPage = currentPage === 1 ? totalPage : currentPage - 1;
            break;

        case 1:
            currentPage = currentPage === totalPage ? 1 : currentPage + 1;
            break;
    }

    chooseItemPage(currentPage);
}

// Initial rendering of products for category 9 (or another default category)
render(9);
function addCart(id) {
    const userLogin = JSON.parse(localStorage.getItem("currentUser"))
    const cart = userLogin.cart
    const index = cart.findIndex(item => item.idSP == id)
    if (index == -1) {
        cart.push({
            idSP: id,
            quantity: 1
        })
        localStorage.setItem("currentUser", JSON.stringify(userLogin))
        document.getElementById("total_order").innerHTML = userLogin.cart.length
    } else {
        alert("Ban da them san pham nay vao gio hang roi !")
    }
}

function showSearch() {
    let showSearch = document.getElementById("search");
    showSearch.classList.toggle("hidden");
}

function search() {
    const listProduct = JSON.parse(localStorage.getItem("products")) || []
    const textSearch = document.getElementById("search").value

    if (textSearch == "") {
        renderProduct(currentPage)
        return
    }

    const productSearch = listProduct.filter((item) => {
        return item.name.toLowerCase().includes(textSearch.toLowerCase())
    })

    let stringHTML = ""
    for (let i = 0; i < productSearch.length; i++) {
        stringHTML +=
            `
                        <div class="product-item">
                            <div class="product-img" onclick="gotoDetail('${productSearch[i].id}')">
                                <a><img src="${productSearch[i].image}" alt=""></a>
                            </div>
                            <div class="product-detail">
                                <h3><a>${productSearch[i].name}</a></h3>
                            </div>
                            <div class="box-pro-prices">
                                <span>${Number(productSearch[i].price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                            </div>
                        </div>
                    `
    }
    // document.getElementById("collection-body").innerHTML = stringHTML;
    document.getElementsByClassName("box")[0].innerHTML = stringHTML;
}
function gotoDetail(id) {
    localStorage.setItem("idProduct", JSON.stringify(id))
    window.location.href = "theInfor.html"
}