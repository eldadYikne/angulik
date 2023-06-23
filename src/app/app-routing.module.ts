import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormalEducationComponent } from './components/formal-education/formal-education.component';
import { HomeComponent } from './components/home/home.component';
import { PracticalExperienceComponent } from './components/practical-experience/practical-experience.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'formal-education',
    component: FormalEducationComponent,
  },
  {
    path: 'practical-experience',
    component: PracticalExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
