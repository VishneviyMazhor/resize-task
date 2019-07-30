import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IfViewportSizeDirective} from './directives/if-viewport-size.directive';
import {ViewportHelperService} from "./services/viewport-helper.service";
import {IViewportDimensions, VIEWPORT_DIMENSIONS} from "./extras";

@NgModule({
    declarations: [
        IfViewportSizeDirective
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ViewportHelperService
    ],
    exports: [
        IfViewportSizeDirective
    ]
})
export class ViewportHelpersModule {
    public static forRoot(config: IViewportDimensions) {
        return {
            ngModule: ViewportHelpersModule,
            providers: [
                {provide: VIEWPORT_DIMENSIONS, useValue: config}
            ]
        }
    }
}
