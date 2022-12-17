import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    
    const url = localStorage.getItem('theme') || "./assets/css/colors/purple-dark.css";
    this.linkTheme?.setAttribute('href', url);
  }


  
  changeTheme(theme:string){

    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme',url );

    this.checkCurrentTheme();
  }



  checkCurrentTheme(){


    //si hay muchas links es pesado para la aplicación cargarlos cada vez que se activa el método.
    //es mejor tenerlo como propiedad. Si queremos mejorarlo podemos madar los links desde account-settings en el oninit hacia services
    const links = document.querySelectorAll('.selector'); 

    links.forEach(elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        elem.classList.add('working');
      }
    });
  }

}
