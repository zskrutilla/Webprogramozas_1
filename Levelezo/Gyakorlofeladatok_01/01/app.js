// Alapadatok CSAK belső tömbben
const kurzusok = [
  {kod:'WEB101', nev:'Web alapok', kar:'IK', kredit:5, oktato:'Kiss Kata'},
  {kod:'ALG201', nev:'Algoritmusok', kar:'IK', kredit:6, oktato:'Nagy Péter'},
  {kod:'KOM110', nev:'Kommunikáció', kar:'BTK', kredit:3, oktato:'Farkas Réka'}
];

// ===== Lista oldal =====
const tbody = document.querySelector('#tbl tbody');
if (tbody){
  let sortKey = 'nev';
  let asc = true;

  function render(){
    const q = document.getElementById('q').value.toLowerCase();
    let list = [];
    // for + if
    for (let i=0;i<kurzusok.length;i++){
      const k = kurzusok[i];
      if (!q || k.nev.toLowerCase().includes(q) || k.oktato.toLowerCase().includes(q)){
        list.push(k);
      }
    }
    // egyszerű rendezés switch-csel kiválasztott kulcs szerint
    list.sort((a,b)=>{
      let A,B;
      switch (sortKey){
        case 'kod': A=a.kod; B=b.kod; break;
        case 'kar': A=a.kar; B=b.kar; break;
        case 'kredit': A=a.kredit; B=b.kredit; break;
        default: A=a.nev; B=b.nev; break;
      }
      if (A<B) return asc? -1:1;
      if (A>B) return asc? 1:-1;
      return 0;
    });

    // DOM kitöltés
    tbody.innerHTML = '';
    for (let i=0;i<list.length;i++){
      const k=list[i];
      const tr=document.createElement('tr');
      tr.innerHTML = `<td>${k.kod}</td><td>${k.nev}</td><td>${k.kar}</td><td>${k.kredit}</td><td>${k.oktato}</td>`;
      tbody.appendChild(tr);
    }
    document.getElementById('msg').hidden = list.length>0 ? true:false;
  }

  render();
  document.getElementById('q').addEventListener('input', render);
  document.querySelectorAll('th[data-key]').forEach(th=>{
    th.addEventListener('click',()=>{
      const key = th.getAttribute('data-key');
      // ternary + if/else
      asc = (sortKey===key) ? !asc : true;
      sortKey = key;
      render();
    });
  });
}

// ===== Új kurzus (demó űrlap) =====
function validateCourse(){
  const kod=document.getElementById('kod');
  const nev=document.getElementById('nev');
  const kredit=document.getElementById('kredit');
  let ok=true;
  if (kod.value===''){ kod.style.background='red'; ok=false; }
  if (nev.value===''){ nev.style.background='red'; ok=false; }
  if (kredit.value==='' || Number(kredit.value)<0){ kredit.style.background='red'; ok=false; }
  if (!ok){ alert('Hibás/hiányzó mezők!'); return false; }
  alert('Demó: űrlap érvényes – nincs mentés.');
  return false; // hogy ne küldje el
}