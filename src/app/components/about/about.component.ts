import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ml-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    @Input()
    @HostBinding('id')
    id: string;

    constructor() {
    }

    ngOnInit() {
    }

}
