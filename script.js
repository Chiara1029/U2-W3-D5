window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTZiNjI1NGU4ODAwMTgzZjE4NmQiLCJpYXQiOjE2OTk2MDQxNTAsImV4cCI6MTcwMDgxMzc1MH0.es63YWr-0fQctl8wlD0piXyTXi9ZPie-h3sdTxylWCE",
    },
  })
    .then((response) => response.json())
    .then((productsObj) => {
      const itemsList = document.getElementById("itemsList");

      productsObj.forEach((product) => {
        let productName = document.createElement("li");
        productName.className = "m-3";
        productName.innerText = product.name;

        const modBtn = document.createElement("button");
        modBtn.className = "btn btn-primary p-1 mx-3";
        modBtn.innerText = "Modifica";
        modBtn.id = "modBtn";

        const delBtn = document.createElement("button");
        delBtn.className = "btn btn-danger p-1";
        delBtn.innerText = "Elimina";
        delBtn.id = "delBtn";

        productName.appendChild(modBtn);
        productName.appendChild(delBtn);
        itemsList.appendChild(productName);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createProduct = (event) => {
  event.preventDefault();
  const productsObj = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: document.getElementById("price").value,
  };
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(productsObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTZiNjI1NGU4ODAwMTgzZjE4NmQiLCJpYXQiOjE2OTk2MDQxNTAsImV4cCI6MTcwMDgxMzc1MH0.es63YWr-0fQctl8wlD0piXyTXi9ZPie-h3sdTxylWCE",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((productsObj) => console.log(productsObj))
    .catch((error) => {
      console.log(error);
    });
};
