import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminpagePage } from './adminpage.page';

import { LineGraphComponent } from '../../line-graph/line-graph.component';

const routes: Routes = [
  {
    path: '',
    component: AdminpagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminpagePage, LineGraphComponent]
})
export class AdminpagePageModule {}
