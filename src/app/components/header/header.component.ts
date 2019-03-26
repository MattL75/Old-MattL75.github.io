import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { goMovie, initCanvasFile } from '../../utility/custom-canvas';

@Component({
    selector: 'ml-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    constructor(private elRef: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        initCanvasFile(this.elRef.nativeElement.querySelector('#main-canvas'));
        goMovie();
    }

}
