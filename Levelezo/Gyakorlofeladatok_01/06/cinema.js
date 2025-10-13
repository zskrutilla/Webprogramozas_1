const shows = [{ film: 'Dűne', datum: '2025-10-01', ido: '18:00', terem: '1' }, { film: 'Oppenheimer', datum: '2025-10-02', ido: '20:00', terem: '2' }];
const body = document.getElementById('shows');

if (body) {
    let html = ''; for (let i = 0; i < shows.length; i++) { const s = shows[i]; html += `<tr class="sel"><td>${s.film}</td><td>${s.datum}</td><td>${s.ido}</td><td>${s.terem}</td></tr>`; }
    body.innerHTML = html;
    body.addEventListener('click', function (e) {
        if (e.target && e.target.closest('.sel')) {
            const tr = e.target.closest('tr');
            const q = 'film=' + encodeURIComponent(tr.children[0].textContent) + '&datum=' + tr.children[1].textContent + '&ido=' + tr.children[2].textContent + '&terem=' + tr.children[3].textContent;
            location.href = 'foglalas.html?' + q;
        }
    });
}
// foglalás oldal – rács felépítés
const grid = document.getElementById('grid');

if (grid) {
    const p = new URLSearchParams(location.search);
    document.getElementById('title').textContent = p.get('film') + ' – ' + p.get('datum') + ' ' + p.get('ido') + ' (Terem ' + p.get('terem') + ')';
    const rows = 5, cols = 7; let selected = 0;
    for (let r = 1; r <= rows; r++) {
        const row = document.createElement('div'); row.className = 'row';
        for (let c = 1; c <= cols; c++) {
            const b = document.createElement('button'); b.type = 'button'; b.className = 'seat'; b.textContent = String.fromCharCode(64 + r) + c;
            b.addEventListener('click', function () {
                // ternary
                const on = b.classList.contains('on') ? false : true;
                if (on) { b.classList.add('on'); selected = selected + 1; }
                else { b.classList.remove('on'); selected = selected - 1; }
                document.getElementById('count').textContent = selected;
                // switch
                switch (selected) {
                    case 0: document.getElementById('info').textContent = 'Nincs kiválasztott szék.'; break;
                    case 1: document.getElementById('info').textContent = '1 szék kiválasztva.'; break;
                    default: document.getElementById('info').textContent = selected + ' szék kiválasztva.'; break;
                }
            });
            row.appendChild(b);
        }
        grid.appendChild(row);
    }
}

function validateCinema() {
    let n = document.getElementById('nev').value;
    let e = document.getElementById('email').value;
    if (n === '' || e === '') { alert('Név és e-mail kell!'); return false; }
    alert('Foglalás demó.'); return false;
}