import {InjectionToken} from "@angular/core";

export const VIEWPORT_DIMENSIONS = new InjectionToken<string>('ViewportDimensions');

export interface IViewportDimensions {
    medium: number;
    large: number;
}

