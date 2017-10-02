import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {MoviesComponent} from './features';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    // { path: 'detail/:id', component: MovieDetailComponent },
    {path: 'movies', component: MoviesComponent},
    // {path: '**', component: NoContentComponent},
    // { path: 'detail', loadChildren: './+detail#DetailModule'},
    // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
