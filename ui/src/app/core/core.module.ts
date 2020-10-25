import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, IconComponent, LoadingSpinnerComponent } from '@ui/core/components';
import { CoreRoutingModule } from '@ui/core/core-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        IconComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: []
})
export class CoreModule { }
