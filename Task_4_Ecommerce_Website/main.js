
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${p.image}" alt="${p.name}" />
                          <h3>${p.name}</h3>
                          <p>$${p.price}</p>
                          <button>Add to Cart</button>`;
        productList.appendChild(card);
    });
});
