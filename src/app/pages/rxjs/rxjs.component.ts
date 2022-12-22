import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor(){

    // this.retornaObservable().pipe(
    //   //podemos poner (5) 1 6 las veces que queremos que lo intente
    //   retry(1)
    // ).subscribe({
    //   next: valor => console.log('Subs: ', valor),
    //   error: error => console.warn('Error: ', error),
    //   complete: ()=> console.info('Obs terminado')
      
    // });



    ////Limpiar observable, lo recojo en variable y luego lo pongo en el ciclo de vida ondestroy y me unsuscribo.

    this.intervalSubs =  this.retornaIntervalo()
      .subscribe( console.log)

  }

  ngOnDestroy(): void {
    //con observables que siempre estan emitiendo valores o que son muy ruidosos, que emiten muchos valores
    this.intervalSubs.unsubscribe();
  }


///////////////////////////////////////////////interval()

///take cuantas emisiones del observable necesitamos y automáticamente lo completa
///map transforma la información del observable y la muta de la manera que yo necesito

  retornaIntervalo():Observable<number>{

    return interval(100)
                .pipe(
                  map( valor => valor + 1),
                  filter( valor => (valor % 2 === 0 )? true : false),
                  // take(10),
                );

  }



/////////////////////////////////////////////mi observable() este no lo estoy usando es lo mismo que loanterior mas omenos

  retornaObservable():Observable<number>{
    let i = -1;

    return new Observable<number>( observer => {


      const intervalo = setInterval(()=> {

        i++;
        observer.next(i);

        if( i === 4 ){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i===2 ){
          observer.error('i es igual a 2');
        }

      }, 1000)

    });
 
  }


}
