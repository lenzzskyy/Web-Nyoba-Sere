// Navigasi Halaman
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Keranjang dan Pemesanan
let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({item, price});
    total += price;
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(li);
    });

    const cartTotal = document.getElementById('cartTotal');
    cartTotal.textContent = total.toFixed(2);
}

// Show Checkout Modal
function showCart() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'flex';
}

// Checkout Button
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
    alert('Order placed successfully!');
    cart = [];
    total = 0;
    updateCartUI();
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'none';
});

// Toggle Popup Chat
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
}

// Fungsi Kirim Pesan
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.querySelector('.chat-body');

    if (chatInput.value.trim()) {
        const message = document.createElement('p');
        message.textContent = "You: " + chatInput.value;
        message.classList.add('user-message');
        chatBody.appendChild(message);

        // Kosongkan input setelah pesan dikirim
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll ke bawah
    }
}

// Fungsi Enter untuk Kirim Pesan
function handleEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
}
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var hamburger = document.querySelector(".hamburger");
    var navLinks = document.getElementById("navLinks");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down - hide the hamburger menu
        hamburger.style.display = "none";
        navLinks.classList.remove("show"); // Hide the menu if it was open
    } else {
        // Scrolling up - show the hamburger menu
        hamburger.style.display = "flex";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});
