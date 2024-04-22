export class AppCont{
    constructor(){
        console.log("Construtor do AppCont rodou");
        let btnToggleDrawer = document.getElementById("btnToggleDrawer");
        btnToggleDrawer.addEventListener('click', ()=>{
            window.app.AppCont.MenuDrawer();
        });
    }

    MenuDrawer(){
        let drawerElm = document.getElementById("drawerMenu");
        if (drawerElm.style.display == 'block') {
            drawerElm.style.display = 'none';
        } else {
            drawerElm.style.display = 'block';
        }
    } 
 } 
