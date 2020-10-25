import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    shouldDisplaySidebar: boolean = false;
    shouldDisplayNavbar: boolean = true;

    private previousPageYOffset: number = 0;

    constructor() { }

    ngOnInit(): void { }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.checkPageOffset();
    }

    checkPageOffset(): void {
        const minPageYOffset: number = 50;

        this.shouldDisplayNavbar = window.pageYOffset < this.previousPageYOffset || window.pageYOffset < minPageYOffset;
        this.previousPageYOffset = window.pageYOffset;
    }

    toggleSidebar(): void {
        this.shouldDisplaySidebar = !this.shouldDisplaySidebar;
    }
}