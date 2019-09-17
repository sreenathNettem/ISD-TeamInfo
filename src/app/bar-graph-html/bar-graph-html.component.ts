import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bar-graph-html',
  templateUrl: './bar-graph-html.component.html',
  styleUrls: ['./bar-graph-html.component.scss'],
})
export class BarGraphHtmlComponent implements OnInit {

  @Input() barChartData = [];

  colors = ['', '#c32329', '#f79221', '#fcd603', '#a2cd3a', '#539c44'];

  constructor() { }

  ngOnInit() { }

  getBarStyle(barData) {
    return { 'background-color': this.colors[barData.mood], width: barData.value + '%', color: this.colors[barData.mood] };
  }

}
