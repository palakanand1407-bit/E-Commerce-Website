let cartCount = 0;
let totalPrice = 0;

function addToCart(price) {
    cartCount++;
    totalPrice += price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total-price").innerText = totalPrice;

    document.getElementById("cart-items").innerText = cartCount;
    document.getElementById("cart-total").innerText = totalPrice;
}

function toggleCart() {
    let cartBox = document.getElementById("cart-box");
    cartBox.style.display =
        cartBox.style.display === "block" ? "none" : "block";
}


function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let msg = document.getElementById("login-msg");

    if (username === "" || password === "") {
        msg.style.color = "red";
        msg.innerText = "Please enter username and password ❌";
    } else {
        msg.style.color = "green";
        msg.innerText = "Successfully logged in ✅";

        // store user (optional but good practice)
        localStorage.setItem("user", username);

        setTimeout(() => {
            window.location.href = "Practical_3.html";
        }, 1500);
    }
}
