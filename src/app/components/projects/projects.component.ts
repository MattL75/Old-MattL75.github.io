import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ml-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    @Input()
    @HostBinding('id')
    id: string;

    constructor() {
    }

    ngOnInit() {
    }

}
