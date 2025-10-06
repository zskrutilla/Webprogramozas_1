const books = [{ cim: 'Egri csillagok', szerzo: 'Gárdonyi', ev: 1901 }, { cim: 'A Pál utcai fiúk', szerzo: 'Molnár', ev: 1906 }, { cim: '1984', szerzo: 'Orwell', ev: 1949 }, { cim: 'Száz év magány', szerzo: 'García Márquez', ev: 1967 }, { cim: 'Fahrenheit 451', szerzo: 'Bradbury', ev: 1953 }, { cim: 'A Gyűrűk Ura', szerzo: 'Tolkien', ev: 1954 }];
let page = 0, size = 5, q = '';

function render() {
    let filtered = [];
    for (let i = 0; i < books.length; i++) {
        const b = books[i];
        if (q === '' || b.cim.toLowerCase().indexOf(q) >= 0 || b.szerzo.toLowerCase().indexOf(q) >= 0) {
            filtered[filtered.length] = b;
        }
    }
    const start = page * size; let end = start + size; if (end > filtered.length) end = filtered.length;
    let rows = '';
    for (let i = start; i < end; i++) {
        const b = filtered[i]; rows += `<tr><td>${b.cim}</td><td>${b.szerzo}</td><td>${b.ev}</td></tr>`;
    }
    document.getElementById('tbody').innerHTML = rows;
    document.getElementById('info').textContent = (filtered.length === 0) ? '0/0' : (start + 1) + '-' + end + ' / ' + filtered.length;
    document.getElementById('prev').disabled = (page === 0);
    document.getElementById('next').disabled = (end >= filtered.length);
}
if (document.getElementById('tbody')) {
    render();
    document.getElementById('q').addEventListener('input', function (e) { q = e.target.value.toLowerCase(); page = 0; render(); });
    document.getElementById('prev').addEventListener('click', function () { if (page > 0) page--; render(); });
    document.getElementById('next').addEventListener('click', function () { page++; render(); });
}
function validateNewBook() {
    let c = document.getElementById('cim').value;
    let s = document.getElementById('szerzo').value;
    if (c === '' || s === '') { alert('Cím és szerző kell!'); return false; }
    alert('Demó: hozzáadva lenne.'); return false;
}