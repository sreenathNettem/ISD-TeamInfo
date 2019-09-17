import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar-graph-html',
  templateUrl: './bar-graph-html.component.html',
  styleUrls: ['./bar-graph-html.component.scss'],
})
export class BarGraphHtmlComponent implements OnInit {

  public barChartData = [
    { title: 'I\'m great', value: 50, mood: 1 },
    { title: 'I\'m good', value: 20, mood: 2 },
    { title: 'I\'m okay', value: 40, mood: 3 },
    { title: 'I\'m not bad', value: 60, mood: 4 },
    { title: 'I\'m not good', value: 70, mood: 5 },
  ];
  colors = ['', '#c32329', '#f79221', '#fcd603', '#a2cd3a', '#539c44'];
  constructor() { }

  ngOnInit() { }

  getBarStyle(barData) {
    return { 'background-color': this.colors[barData.mood], width: barData.value + '%', color: this.colors[barData.mood] };
  }

}
