import { Component, Input, ElementRef, OnChanges, SimpleChanges, SimpleChange, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { IsdUtilityService } from '../services/isd-utility.service';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {
  _lineData;
  @Input() set lineData(_lineData) {
    this._lineData = [];
    this.initScales();
    this.initSvg();
    if (_lineData !== undefined && _lineData.length > 0) {
      this._lineData = _lineData;
      this._lineData.forEach((d, k) => {
        if (d.length > 0) {
          this.drawLine(d, k);
        }
      });
    }
    this.drawAxis();
  }

  private w = 650;
  private h = 400;
  private divH = 375;
  private halfLength: number;
  private margin = { top: 10, right: 100, bottom: 80, left: 50 };
  private width = this.w - this.margin.left - this.margin.right;
  private height = this.h - this.margin.top - this.margin.bottom;

  private x0: any;
  private y0: any;
  private svg: any;
  private g: any;
  private chart: any;
  private layersBarArea: any;
  private layersBar: any;
  private x0Axis: any;
  private y0Axis: any;
  private valueLine: any;
  private lineArea: any

  private colors = ['#00D7D2', '#313c53', '#FFC400'];

  constructor(private container: ElementRef) {

  }

  ngOnInit() {

  }

  private initScales() {
    this.x0 = d3.scaleBand().rangeRound([0, this.width]).padding(0.05);
    this.y0 = d3.scaleLinear().range([this.height, 0]);
  }

  private initSvg() {

    this.svg = d3.select(this.container.nativeElement)
      .select('.chart-container')
      .select('svg')
      .remove();

    this.svg = d3.select(this.container.nativeElement)
      .select('.chart-container')
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('class', 'chart')
      .attr('viewBox', '0 0 600 400');

    this.chart = this.svg.append('g')
      .classed('chart-contents', true)
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.layersBarArea = this.chart.append('g')
      .classed('layers', true);

    this.lineArea = this.chart.append('g')
      .classed('line', true);
  }

  private drawAxis() {
    this.x0Axis = this.chart.append('g')
      .classed('x-axis', true)
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this.x0))

    this.y0Axis = this.chart.append('g')
      .classed('y0-axis', true)
      .call(d3.axisLeft(this.y0));

  }


  private drawLine(linedata: any, k: number) {
    const that = this;
    const valueLine = d3.line()
      .x(function (d, i) {
        return that.x0(d.DATE) + 0.5 * that.x0.bandwidth();
      })
      .y(function (d) {
        return that.y0(d.VALUE);
      });

    if (linedata !== undefined) {
      this.x0.domain(linedata.map((d: any) => {
        return d.DATE;
      }));
    }

    if (linedata !== undefined) {
      let maxValue = 0;
      const maxValueRecord = linedata.forEach((d: any) => {
        maxValue = d.VALUE > maxValue ? d.VALUE : maxValue;
      });
      this.y0.domain([0, maxValue + 10]);

    }

    this.lineArea.append('path')
      .data([linedata])
      .attr('class', `line line${k}`)
      .attr('d', valueLine)
      .transition()
      .duration(1000);

  }

}
