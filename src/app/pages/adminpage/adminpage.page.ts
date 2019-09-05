import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {


  barData = [
    { season: 'S1', viewers: 2500000 },
    { season: 'S2', viewers: 3800000 },
    { season: 'S3', viewers: 5000000 },
    { season: 'S4', viewers: 6900000 },
    { season: 'S5', viewers: 6900000 },
    { season: 'S6', viewers: 7500000 },
    { season: 'S7', viewers: 10000000 },
    { season: 'S8', viewers: 17000000 }
  ];
  title = 'Game of Thrones';
  subtitle = 'Viewers per season for';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  public sProject: any;
  public sTeam: any;
  public projects: any[];
  public teams: any[];
  public selectedTeams: any[];

  constructor(private router: Router, private _platform: Platform) {
    this.initializeProject();
    this.initializeTeams();

    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;


  }


  ngOnInit() {
  }
  ionViewDidEnter() {
    this.init();
    this.initAxes();
    this.drawAxes();
    this.drawChart();
  }

  init() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxes() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.barData.map((d) => d.season));
    this.y.domain([0, d3Array.max(this.barData, (d) => d.viewers)]);
  }

  drawAxes() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x))
      .attr('font-size', '30');
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .attr('fill', 'rgb(34, 167, 240)')
      .attr('font-size', '50')
      .text('viewers');
  }

  drawChart() {
    this.g.selectAll('.bar')
      .data(this.barData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('fill', 'rgb(34, 167, 240)')
      .attr('x', (d) => this.x(d.season))
      .attr('y', (d) => this.y(d.viewers))
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => this.height - this.y(d.viewers));
  }

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
