import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ml-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    @Input()
    @HostBinding('id')
    id: string;

    constructor() {
    }

    ngOnInit() {
    }

}
