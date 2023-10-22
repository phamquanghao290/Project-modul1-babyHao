let users = JSON.parse(localStorage.getItem("users"))
let products = JSON.parse(localStorage.getItem("products"))
function renderBills() {
    let bills = JSON.parse(localStorage.getItem("bills")) || []
    let stringHTML = ""
    let stringCart = ""

    for (let i = 0; i < bills.length; i++) {
        stringCart = ""
        let cart = bills[i].cart
        for (let j = 0; j < cart.length; j++) {
            let product = products.find(e => e.id == cart[j].idSP)
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
            <td>${bills[i].id}</td>

            <td>${bills[i].user_id}</td>
            <td>${stringCart}</td>
            <td>${Number(bills[i].totalPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            <td>${bills[i].createdAt}</td>
            <td>${bills[i].status == 0 ? "Đang chờ" : bills[i].status == 1 ? "Chấp nhận" : "Từ chối"}</td>
            <td>
                ${bills[i].status == 0 ? (
                `<button class="btn_click" onclick="changeStatus('${i}', 1)"> Chấp Nhận </button>
                     <button class="btn_click" onclick="changeStatus('${i}', 2)"> Từ Chối </button>`
            ) : `<span></span>`}
            </td>
        </tr>
        `
    }
    document.getElementById("table_body").innerHTML = stringHTML
}
renderBills()

function changeStatus(index, status) {
    let bills = JSON.parse(localStorage.getItem("bills")) || []
    bills[index].status = status
    localStorage.setItem("bills", JSON.stringify(bills))
    renderBills()
}