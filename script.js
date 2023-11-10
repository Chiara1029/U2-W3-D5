const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

const URL = productId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productId
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = productId ? "PUT" : "POST";

window.onload = () => {
  if (productId) {
    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTZiNjI1NGU4ODAwMTgzZjE4NmQiLCJpYXQiOjE2OTk2MDQxNTAsImV4cCI6MTcwMDgxMzc1MH0.es63YWr-0fQctl8wlD0piXyTXi9ZPie-h3sdTxylWCE",
      },
    })
      .then((response) => response.json())
      .then((product = { name, description, price, imageUrl, brand }) => {
        document.getElementById("name").value = product.name;
        document.getElementById("description").value = product.description;
        document.getElementById("brand").value = product.brand;
        document.getElementById("imageUrl").value = product.imageUrl;
        document.getElementById("price").value = product.price;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const handleProduct = (event) => {
  event.preventDefault();
  const productsObj = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: document.getElementById("price").value,
  };

  fetch(URL, {
    method,
    body: JSON.stringify(productsObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZTZiNjI1NGU4ODAwMTgzZjE4NmQiLCJpYXQiOjE2OTk2MDQxNTAsImV4cCI6MTcwMDgxMzc1MH0.es63YWr-0fQctl8wlD0piXyTXi9ZPie-h3sdTxylWCE",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((productsObj) => {
      if (productId) {
        alert("Prodotto: " + productsObj._id + " modificato con successo!");
      } else {
        alert("Prodotto: " + productsObj._id + "creato con successo!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  if (!productId) {
    document.getElementById("name").value = "";
    document.getElementById("time").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
  }
};
