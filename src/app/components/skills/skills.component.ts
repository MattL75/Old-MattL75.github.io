import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ml-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    @Input()
    @HostBinding('id')
    id: string;

    constructor() {
    }

    ngOnInit() {
    }

}
