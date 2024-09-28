import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'coming-soon',
        component: ComingSoonComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
