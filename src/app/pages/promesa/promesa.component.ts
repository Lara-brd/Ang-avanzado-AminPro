import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ]
})
export class PromesaComponent implements OnInit{
  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })

    // const promesa = new Promise((resolve, reject)=>{

    //   if(false){
    //     resolve('hla mundo');
    //   }else{
    //     reject('Algo salio mal')
    //   }
    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // })
    // .catch( error => console.log('error en mi promesa', error))

    // console.log('fin del init');

  }

  getUsuarios(){

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users?page=2')
        .then( resp => resp.json() )
        .then( body => resolve(body.data) )

    });


  }
 

}

  
