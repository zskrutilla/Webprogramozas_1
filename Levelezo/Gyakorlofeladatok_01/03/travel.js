const trips = [
    { orsz: 'Spanyolország', varos: 'Barcelona', ar: 149000, nap: 4 },
    { orsz: 'Olaszország', varos: 'Róma', ar: 129000, nap: 3 },
    { orsz: 'Görögország', varos: 'Athén', ar: 139000, nap: 5 }
];

const body = document.getElementById('trips');

if (body) {
    let html = '';
    for (let i = 0; i < trips.length; i++) {
        const t = trips[i];
        html += `<tr class="go"><td>${t.orsz}</td><td>${t.varos}</td><td>${t.nap}</td><td>${t.ar}</td></tr>`;
    }
    body.innerHTML = html;
    body.addEventListener('click', function (e) {
        if (e.target && e.target.closest('.go')) {
            const tr = e.target.closest('tr');
            const city = tr.children[1].textContent;
            location.href = 'foglalas.html?city=' + encodeURIComponent(city);
        }
    });
}

// foglalás lap
const dest = document.getElementById('dest');

if (dest) {
    const p = new URLSearchParams(location.search);
    const city = p.get('city');
    dest.textContent = city ? city : '(nincs kiválasztva)';
}
function validateBooking() {
    let n = document.getElementById('name').value;
    let d = document.getElementById('date').value;
    if (n === '' || d === '') { alert('Név és dátum kell!'); return false; }
    alert('Foglalás demó.'); return false;
}