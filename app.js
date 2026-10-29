const screens=[...document.querySelectorAll('.screen')];
const toast=document.getElementById('toast');
let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
function go(name){const target=document.querySelector(`[data-screen="${name}"]`);if(!target)return;screens.forEach(s=>s.classList.toggle('active',s===target));target.scrollTop=0;document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('selected',b.dataset.go===name));}
document.addEventListener('click',e=>{const nav=e.target.closest('[data-go]');if(nav){go(nav.dataset.go);return;}if(e.target.closest('.map-zoom button'))notify('Mapa ilustrativo: zoom no disponible en esta demo.');});
document.getElementById('login-form').addEventListener('submit',e=>{e.preventDefault();notify('Sesión de demostración iniciada.');go('home')});
document.getElementById('register-form').addEventListener('submit',e=>{e.preventDefault();notify('Cuenta de demostración creada localmente.');go('home')});
document.getElementById('pet-form').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('edit-name').value.trim()||'Max';document.getElementById('pet-name').textContent=name;document.querySelector('.welcome-card h3').textContent='¡Hola, '+name+'!';notify('Cambios guardados durante esta sesión.');go('pet')});
document.getElementById('logout').addEventListener('click',()=>{go('welcome');notify('Has vuelto a la pantalla inicial.')});
document.getElementById('clock').textContent=new Intl.DateTimeFormat('es-ES',{hour:'2-digit',minute:'2-digit'}).format(new Date());
