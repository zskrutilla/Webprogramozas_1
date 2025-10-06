let favIds = [];
const table = document.getElementById('orarend');

if (table) {
    const tds = table.querySelectorAll('td[data-class]');
    for (let i = 0; i < tds.length; i++) {
        const td = tds[i];
        td.addEventListener('click', function () {
            const id = td.getAttribute('data-class');
            let found = false; let pos = -1;
            // keresés for-ral
            for (let k = 0; k < favIds.length; k++) { if (favIds[k] === id) { found = true; pos = k; break; } }
            if (found) {
                td.classList.remove('fav');
                // eltávolítás másolással
                const next = []; for (let k = 0; k < favIds.length; k++) { if (k !== pos) next[next.length] = favIds[k]; }
                favIds = next;
            } else { td.classList.add('fav'); favIds[favIds.length] = id; }
        });
    }
}
// második oldal
const ul = document.getElementById('kedvencek');

if (ul) {
    if (favIds.length === 0) { ul.innerHTML = '<li class="muted">(Ugyanabban a futásban válassz órákat a kezdőlapon.)</li>'; }
    else {
        let html = ''; for (let i = 0; i < favIds.length; i++) { html += '<li>' + favIds[i] + '</li>'; }
        ul.innerHTML = html;
    }
}

function validateGym() {
    let n = document.getElementById('nev').value;
    if (n === '') { alert('Név kötelező!'); return false; }
    alert('Jelentkezés demó.'); return false;
}