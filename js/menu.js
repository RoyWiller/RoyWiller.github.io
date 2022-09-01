const menuBar = document.querySelector('.nav_menu');
const navegacion = document.querySelector('.nav_link');
const enlaces = document.querySelectorAll('.nav_link a');

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu(){
    menuBar.addEventListener('click', ()=>{
        navegacion.classList.toggle('nav_menu');
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(x)=>{

            if(x.target.tagName === 'A'){
                navegacion.classList.add('nav_menu');
            }else{
                navegacion.classList.add('nav_menu');
            }
        });
    });
}

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header_fija');
    header.classList.toggle("down", window.scrollY>0);
})