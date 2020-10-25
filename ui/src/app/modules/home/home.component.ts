import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    isLoaded: boolean = true;

    constructor() { }

    ngOnInit(): void { }
}