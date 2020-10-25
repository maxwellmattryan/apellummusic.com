import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent, HeaderComponent, IconComponent, LoadingSpinnerComponent } from '@ui/core/components';
import { CoreRoutingModule } from '@ui/core/core-routing.module';

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
        HeaderComponent
    ],
    providers: []
})
export class CoreModule { }
