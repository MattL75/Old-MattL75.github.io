import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'ml-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

    constructor(private elRef: ElementRef) {
    }

    ngOnInit() {
    }

    scrollToElement(element): void {
        this.elRef.nativeElement.querySelector('#' + element.id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        setTimeout(() => {
            window.location.hash = element.id;
        }, 1000);
    }

}
