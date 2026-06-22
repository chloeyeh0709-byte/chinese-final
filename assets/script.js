function toggleAcc(head){
  const item = head.parentElement;
  item.classList.toggle('open');
}

const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
tabBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tabBtns.forEach(b=>b.classList.remove('active'));
    panels.forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});
