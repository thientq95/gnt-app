import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { BlogComponent } from './views/blog/blog.component';
import { CareerComponent } from './views/career/career.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ServiceComponent } from './views/service/service.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'service',
        component: ServiceComponent,
    },
    {
        path: 'product',
        component: ProductComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'career',
        component: CareerComponent,
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
