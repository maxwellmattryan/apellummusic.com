import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-home-landing',
    templateUrl: './home-landing.component.html',
    styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
    @Input() tagline: string = 'I make techno music.';
    @Input() landing: string = 'I am a producer based out of Austin, TX.';

    constructor() { }

    ngOnInit(): void { }

    constructEmail(name: string, domain: string): string {
        return `${name}@${domain}.com`;
    }
}