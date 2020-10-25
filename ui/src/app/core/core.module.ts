import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from '@ui/core/core-routing.module';
import { FooterComponent, HeaderComponent, IconComponent, LoadingSpinnerComponent } from '@ui/core/components';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        IconComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        IconComponent,
        LoadingSpinnerComponent
    ],
    providers: []
})
export class CoreModule { }
