document.addEventListener('keydown', function(e){
    const menuItems = document.querySelectorAll('nav ul li a');
    let currentIndex = -1;
    
    //Procura em qual tabindex o link esta com o foco
    menuItems.forEach((item, index) => {
        if (document.activeElement === item){
            currentIndex = index;
        }
    });

    //Verifica as teclas de navegação ( para cima/baixo)
    if (e.key === 'ArrowDown'){
        e.preventDefault();
        if(currentIndex < menuItems.length -1){
            menuItems[currentIndex + 1].focus();
        }else{
            menuItems[0].focus(); // Voltara para o Inicio
        }
    }
    if (e.key === 'ArrowUp'){
        e.preventDefault();
        if(currentIndex > 0){
            menuItems[currentIndex - 1].focus();
        }else{
            menuItems[menuItems.length - 1].focus(); // Voltara p/ FINAL
        }
    }
});