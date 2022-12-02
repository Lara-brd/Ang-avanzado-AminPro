import {  AfterViewInit, Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements AfterViewInit{
  
  @Input() title:string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input() data:number [] = [ 350, 450, 100 ];
  
  
  // Doughnut
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';



  // Usamos el afterviewinit para que esté cargada todo la información del padre antes de renderizarse.
  ngAfterViewInit() {
    
    this.doughnutChartData={
      labels: this.doughnutChartLabels,
      datasets:[
        { data: this.data,
          backgroundColor: ['#fad390', '#ff7979','#4a69bd'] 
        },
        
      
      ]
    }
  }


  
  
  




}
