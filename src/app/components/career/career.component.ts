import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ml-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

    @Input()
    @HostBinding('id')
    id: string;

    constructor() {
    }

    ngOnInit() {
    }

}
