function renderUser() {
    let listUser = JSON.parse(localStorage.getItem("users"));
    let result =
        `
            <tr class="tr1">
                <td class="td1">Email</td>
                <td class="td1">Tên người dùng</td>
                <td class="td1" >Trạng thái</td>
                <td class="td1" >Tính năng</td>
            </tr> 
        `;
    for (let i = 0; i < listUser.length; i++) {
        result +=
            `
                <tr class="tr1">
                    <td class="td1">${listUser[i].email}</td>
                    <td class="td1">${listUser[i].username}</td>
                    <td class="td1" ><span id="trangthai_${i}">${listUser[i].status ? "Active" : "Ban"}</span></td>
                    <td class="td1" >
                        <button id="button_${i}" class="button" onclick="changeStatus(${i})">
                        ${listUser[i].status ? "Ban" : "UnBan"}
                        </button>
                    </td>
                </tr> 
            `;
    }
    document.getElementById("tableUser").innerHTML = result;
}
renderUser();

function changeStatus(index) {
    let listUser = JSON.parse(localStorage.getItem("users"));
    listUser[index].status = !listUser[index].status
    localStorage.setItem("users", JSON.stringify(listUser))
    renderUser();
}