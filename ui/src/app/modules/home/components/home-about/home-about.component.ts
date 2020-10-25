import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {
    @Input() paragraph: string = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus lectus, vestibulum in lobortis in, consequat et lacus. Curabitur iaculis bibendum sem id dapibus. Duis tempus orci ut leo ornare varius. Ut mollis posuere sapien fringilla gravida. Sed in lorem rutrum, tincidunt purus vel, volutpat massa. Curabitur lobortis convallis tortor, nec scelerisque nibh consectetur eu. Maecenas gravida metus nec nunc fringilla, sed consequat nibh venenatis.
        Pellentesque et convallis justo. Vestibulum quis pulvinar magna. Cras id neque pellentesque est placerat convallis. Curabitur euismod diam quam, a aliquam dolor suscipit eget. Ut vitae urna est. Etiam libero dui, pretium non purus id, hendrerit rhoncus ligula. Ut placerat leo in metus lobortis lobortis. Sed nisl massa, sollicitudin sit amet risus nec, aliquet gravida velit.`;
    @Input() imageUrl: string = 'https://mattmaxwell.dev/assets/images/portrait.png';

    constructor() { }

    ngOnInit(): void { }
}