import { TEMPERATURES } from './../shared/temperatures';

import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';
import * as d3ScaleChromatic from 'd3-scale-chromatic';
@Component({
  selector: 'app-adminpage',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {
    
  data: any;

    svg: any;
    margin = {top: 20, right: 80, bottom: 30, left: 50};
    g: any;
    width: number;
    height: number;
    x;
    y;
    z;
    line;
  
  public sProject: any;
  public sTeam: any;
  public projects: any[];
  public teams: any[];
  public selectedTeams: any[];

  constructor(private router: Router,) {
    this.initializeProject();
    this.initializeTeams();

    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

  }


  ngOnInit() {
    this.data = TEMPERATURES.map((v) => v.values.map((v) => v.date ))[0];
        //.reduce((a, b) => a.concat(b), []);

        this.initChart();
        this.drawAxis();
        this.drawPath();
  }
    
  private initChart(): void {
    this.svg = d3.select('svg');

    this.width = this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = this.svg.attr('height') - this.margin.top - this.margin.bottom;

    this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.z = d3Scale.scaleOrdinal(d3ScaleChromatic.schemeCategory10);

    this.line = d3Shape.line()
        .curve(d3Shape.curveBasis)
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.temperature) );

    this.x.domain(d3Array.extent(this.data, (d: Date) => d ));

    this.y.domain([
        d3Array.min(TEMPERATURES, function(c) { return d3Array.min(c.values, function(d) { return d.temperature; }); }),
        d3Array.max(TEMPERATURES, function(c) { return d3Array.max(c.values, function(d) { return d.temperature; }); })
    ]);

    this.z.domain(TEMPERATURES.map(function(c) { return c.id; }));
}

private drawAxis(): void {
    this.g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .text('Months')
        .call(d3Axis.axisBottom(this.x));

    this.g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('fill', '#000')
        .text('Moods');
}

private drawPath(): void {
    let city = this.g.selectAll('.city')
        .data(TEMPERATURES)
        .enter().append('g')
        .attr('class', 'city');

    city.append('path')
        .attr('class', 'line')
        .attr('d', (d) => this.line(d.values) )
        .style('stroke', (d) => this.z(d.id) );

    city.append('text')
        .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
        .attr('transform', (d) => 'translate(' + this.x(d.value.date) + ',' + this.y(d.value.temperature) + ')' )
        .attr('x', 3)
        .attr('dy', '0.35em')
        .style('font', '10px sans-serif')
        .text(function(d) { return d.id; });}

  initializeProject() {
    this.projects = [
        {id: 1, name: 'ISD'},
        {id: 2, name: 'Cognos'},
    ];
    }

    initializeTeams() {
    this.teams = [
        {id: 1, name: 'UI', project_id: 1, Project_name: 'ISD'},
        {id: 2, name: 'API', project_id: 1, Project_name: 'ISD'},
        {id: 3, name: 'TEST', project_id: 1, Project_name: 'ISD'},
        {id: 4, name: 'DEVOPS', project_id: 1, Project_name: 'ISD'},
        {id: 5, name: 'CALL', project_id: 2, Project_name: 'Cognos'},
        {id: 7, name: 'STD Reports', project_id: 2, Project_name: 'Cognos'}
    ];
    }

    setTeamValues(sProject) {
        this.selectedTeams = this.teams.filter(team => team.project_id === sProject.id);
    }


    
}
