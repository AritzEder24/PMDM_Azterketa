import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GoiburukoaComponent } from '../konponenteak/goiburukoa/goiburukoa.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), GoiburukoaComponent],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
