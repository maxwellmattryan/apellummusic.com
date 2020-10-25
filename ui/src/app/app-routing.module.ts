import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@ui/modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'top'
    })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }