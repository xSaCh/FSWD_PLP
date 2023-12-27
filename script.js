const productContainer = document.getElementById("product-container");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.classList.add("product-image");

  const title = document.createElement("h2");
  title.textContent = product.title;
  title.classList.add("product-title");

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;
  price.classList.add("product-price");

  const description = document.createElement("p");
  // if(product.description.length >)
  description.textContent = product.description;
  description.classList.add("product-description");

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(description);

  return card;
}
