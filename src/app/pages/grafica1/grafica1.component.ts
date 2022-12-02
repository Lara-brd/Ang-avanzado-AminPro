import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js'

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {
  public title1:string = 'Ventas';
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [ 10, 15, 40]

}
