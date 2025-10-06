let cart = [];
function addToCart(name, price) {
    cart[cart.length] = { name: name, price: price };
    renderCart();
}

function removeAt(i) {
    if (i < 0 || i >= cart.length)
        return;
    const next = [];
    for (let k = 0; k < cart.length; k++)
        if (k !== i) next[next.length] = cart[k];
    cart = next;
    renderCart();
}

function sum() {
    let s = 0;
    for (let i = 0; i < cart.length; i++) {
        s = s + Number(cart[i].price);
    }
    return s;
}

function renderCart() {
    const ul = document.getElementById('cart');
    const sumEl = document.getElementById('sum');
    if (!ul)
        return; ul.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = cart[i].name + ' – ' + cart[i].price + ' Ft ' + `<button data-i="${i}" class="remove">×</button>`;
        ul.appendChild(li);
    }
    if (sumEl)
        sumEl.textContent = sum();
    document.querySelectorAll('.remove').forEach(b => {
        b.addEventListener('click',
            () => {
                removeAt(Number(b.getAttribute('data-i')));
            });
    });
}

const menu = document.getElementById('menu');

if (menu) {
    menu.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('add')) {
            const tr = e.target.closest('tr');
            const name = tr.children[0].textContent;
            const price = Number(tr.children[1].textContent);
            addToCart(name, price);
        }
    });
}

function validateContact() {
    let nev = document.getElementById('nev').value;
    let email = document.getElementById('email').value;
    if (nev === '' || email === '') {
        alert('Név és e-mail kötelező!');
        return false;
    }
    alert('Köszönjük! (demó)');
    return false;
}

renderCart();
