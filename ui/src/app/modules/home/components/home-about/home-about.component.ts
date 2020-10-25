import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    constructEmail(name: string = 'apellummusic', domain: string = 'gmail'): string {
        return `${name}@${domain}.com`;
    }
}