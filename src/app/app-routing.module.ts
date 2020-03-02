import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ServicePageComponent } from './service-page/service-page.component';


const routes: Routes = [
{path:"", component: HomePageComponent},
{path:"about", component: AboutPageComponent},
{path:"contact", component: ContactPageComponent},
{path:"gallery", component: GalleryPageComponent},
{path:"service", component: ServicePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
