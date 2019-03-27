import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;

@Component({
    selector: 'ml-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        particlesJS.load('particles-js', 'assets/particles-snow.json');
    }

}
