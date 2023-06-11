async function submitdetails(event) {
  event.preventDefault()
  const sellingPrice = event.target.sellingPrice.value
  const productName = event.target.productName.value
  const category = event.target.category.value

  const obj = {
    sellingPrice,
    productName,
    category
  };
  try {
    let res = await axios.post("https://crudcrud.com/api/259f7196e4b94c719aa11056dfb13b7b/products", obj)
    showuseronscreen(res.data)
  } catch (err) {
    console.log(err);
  }
}
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const windowData = await axios.get("https://crudcrud.com/api/259f7196e4b94c719aa11056dfb13b7b/products")
    for (var i = 0; i < windowData.data.length; i++) {
      showuseronscreen(windowData.data[i])
    }
  } catch (err) {
    console.log(err)
  }
})
async function showuseronscreen(obj) {
  if (obj.category === "Electronic Item") {
    const parentelem = document.getElementById("electronicItems")
    const childelem = document.createElement("li")
    childelem.textContent = obj.sellingPrice + ' - ' + obj.productName + ' - ' + obj.category
    const deletebutton = document.createElement("input")
    deletebutton.type = "button"
    deletebutton.value = "Delete Input"

    deletebutton.onclick = async () => {
      try {
        const deleteData = await axios.delete(`https://crudcrud.com/api/259f7196e4b94c719aa11056dfb13b7b/products/${obj._id}`)
        parentelem.removeChild(childelem)
      } catch (err) {
        console.log(err);
      }
    }
    childelem.appendChild(deletebutton)
    parentelem.appendChild(childelem)
  } else if (obj.category === "Food Item") {
    const parentelem = document.getElementById("foodItems")
    const childelem = document.createElement("li")
    childelem.textContent = obj.sellingPrice + ' - ' + obj.productName + ' - ' + obj.category
    const deletebutton = document.createElement("input")
    deletebutton.type = "button"
    deletebutton.value = "Delete Input"

    deletebutton.onclick = async () => {
      try {
        const deleteData = await axios.delete(`https://crudcrud.com/api/259f7196e4b94c719aa11056dfb13b7b/products/${obj._id}`)
        parentelem.removeChild(childelem)
      } catch (err) {
        console.log(err);
      }
    }
    childelem.appendChild(deletebutton)
    parentelem.appendChild(childelem)
  } else if (obj.category === "Skincare Item") {
    const parentelem = document.getElementById("skincareItems")
    const childelem = document.createElement("li")
    childelem.textContent = obj.sellingPrice + ' - ' + obj.productName + ' - ' + obj.category
    const deletebutton = document.createElement("input")
    deletebutton.type = "button"
    deletebutton.value = "Delete Input"

    deletebutton.onclick = async () => {
      try {
        const deleteData = await axios.delete(`https://crudcrud.com/api/259f7196e4b94c719aa11056dfb13b7b/products/${obj._id}`)
        parentelem.removeChild(childelem)
      } catch (err) {
        console.log(err);
      }
    }
    childelem.appendChild(deletebutton)
    parentelem.appendChild(childelem)
  }
}