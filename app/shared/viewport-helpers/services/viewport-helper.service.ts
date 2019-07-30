import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IViewportDimensions, VIEWPORT_DIMENSIONS} from "../extras";

export enum ViewportSize {
    'LARGE' = 'large',
    'MEDIUM' = 'medium',
    'SMALL' = 'small'
}

@Injectable()
export class ViewportHelperService {

    private _viewportSize: BehaviorSubject<ViewportSize>;

    public get viewportSize(): BehaviorSubject<ViewportSize> {
        if (!this._viewportSize) {
            this.bindResize();
        }
        return this._viewportSize
    }


    constructor(
        @Inject(VIEWPORT_DIMENSIONS) public demensions: IViewportDimensions
    ) {
    }


    private bindResize(): void {
        this._viewportSize = new BehaviorSubject(this.detectViewportSize());

        Observable.fromEvent(window, 'resize').subscribe((res) => {
            let viewportSize = this.detectViewportSize();

            if (this._viewportSize.getValue() !== viewportSize) {
                this._viewportSize.next(viewportSize);
            }
        });
    }

    private detectViewportSize(): ViewportSize {
        if (window.outerWidth >= this.demensions.large) {
            return ViewportSize.LARGE;
        } else if (window.outerWidth >= this.demensions.medium) {
            return ViewportSize.MEDIUM;
        }
        return ViewportSize.SMALL;
    }
}
