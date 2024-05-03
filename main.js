let menu = document.getElementById('side-menu');

document.getElementById('toggle-btn').addEventListener("click", function () {
    toggle();
})
document.getElementById('cancel-btn').addEventListener("click", function () {
    toggleButton();
})

function toggleButton() {  
    menu.classList.add('-translate-x-full');
}

function toggle(){
    if(menu.classList.contains('-translate-x-full')){
        menu.classList.remove('-translate-x-full');
    }else
    {
        menu.classList.add('-translate-x-full') 
    }
}

