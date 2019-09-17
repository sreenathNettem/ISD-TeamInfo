import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamMemberInfoPage } from './team-member-info.page';
import { LineGraphComponent } from '../../line-graph/line-graph.component';
import { BarGraphHtmlComponent } from 'src/app/bar-graph-html/bar-graph-html.component';

const routes: Routes = [
  {
    path: '',
    component: TeamMemberInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamMemberInfoPage, LineGraphComponent, BarGraphHtmlComponent]
})
export class TeamMemberInfoPageModule {}
