import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AddFormComponent } from './add-form/add-form.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatMenuModule} from '@angular/material/menu';

const routes:Routes = [

  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "rejester",
        component:AddFormComponent
      },
      // {
      //   path: "**",
      //   component:NotfoundComponent
      // }
    ]
  },
  {
    path: "**",
    component:NotfoundComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    AddFormComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes)
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class DashboardModule { }
