let idUpdate = null

function render() {
    const category = JSON.parse(localStorage.getItem("category")) || []
    let stringHTML = ""
    for (let i = 0; i < category.length; i++) {
        stringHTML +=
            `
            <tr>
                <td>${category[i].id}</td>
                <td>${category[i].name}</td>
                <td>
                    <button onclick="clickUpdate(${category[i].id})">update</button>
                    <button onclick="deleteCategory(${i})">delete</button>
                </td>
            </tr>
        `
    }
    document.getElementById("table_body").innerHTML = stringHTML
}
render()

function add() {
    const category = JSON.parse(localStorage.getItem("category")) || []
    const inputCategory = document.getElementById("name_category").value
    if (!inputCategory) {
        alert("ban chua nhap gi !!")
        return
    }
    let id = 1
    if (category.length != 0) {
        id = category[category.length - 1].id + 1
    }
    category.push({
        id,
        name: inputCategory
    })
    localStorage.setItem("category", JSON.stringify(category))
    document.getElementById("name_category").value = ""
    render()
}

function deleteCategory(index) {
    const category = JSON.parse(localStorage.getItem("category")) || []
    category.splice(index, 1)
    localStorage.setItem("category", JSON.stringify(category))
    render()
}

function clickUpdate(id) {
    const category = JSON.parse(localStorage.getItem("category")) || []
    const index = category.findIndex(item => item.id == id)
    document.getElementById("name_category").value = category[index].name
    idUpdate = id
}

function update() {
    const category = JSON.parse(localStorage.getItem("category")) || []
    const index = category.findIndex(item => item.id == idUpdate)
    const inputCategory = document.getElementById("name_category").value
    if (!inputCategory) {
        alert("ban chua nhap gi !!")
        return
    }
    category[index].name = inputCategory
    localStorage.setItem("category", JSON.stringify(category))
    document.getElementById("name_category").value = ""
    render()
    idUpdate = null
}