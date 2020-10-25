import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@ui/core/core.module';

import { HomeComponent } from '@ui/modules/home/home.component';
import { HomeRoutingModule } from '@ui/modules/home/home-routing.module';
import { HomeAboutComponent, HomeLandingComponent } from '@ui/modules/home/components';

@NgModule({
    declarations: [
        HomeAboutComponent,
        HomeComponent,
        HomeLandingComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
