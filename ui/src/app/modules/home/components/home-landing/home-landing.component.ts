import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

const swapImages = trigger('swapImages', [
    transition(':enter', [
        style({ opacity: 0.0 }),
        animate('600ms ease-out', style({ opacity: 1.0 }))
    ]),
    transition(':leave', [
        animate('200ms', style({ opacity: 0.0 }))
    ])
]);

const swapWords = trigger('swapWords', [
    transition(':enter', [
        style({ opacity: 0.0 }),
        animate('600ms ease-out', style({ opacity: 1.0 }))
    ]),
    transition(':leave', [
        animate('200ms', style({ opacity: 0.0 }))
    ])
]);

@Component({
    selector: 'app-home-landing',
    templateUrl: './home-landing.component.html',
    styleUrls: ['./home-landing.component.scss'],
    animations: [
        swapImages,
        swapWords
    ]
})
export class HomeLandingComponent implements OnInit, OnDestroy {
    @Input() tagline: string = 'I make techno music.';
    @Input() landing: string = 'I am a producer based out of Austin, TX.';

    public cycleTime: number = 3200;

    public words: string[] = [
        'Artist',
        'Producer',
        'Engineer'
    ];
    public word: string = this.words[0];

    constructor() { }

    ngOnInit(): void {
        this.cycleWords(this.cycleTime);
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngUnsubscribe: Subject<any> = new Subject();

    cycleWords(time: number = 1000): void {
        interval(time)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                const index = this.words.findIndex((w: string) => w === this.word);
                const nextWord = this.words[index + 1];

                this.word = nextWord ? nextWord : this.words[0];
            });
    }
}