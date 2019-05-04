import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('fadeInOut',[
            state('void', style({
                opacity: 0
            })),
            transition('void <=> *', animate(1000)),
        ])
    ]
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus: any;
    focus1: any;

    subHeaders = [
        'Discover the Best Beauty Deals',
         'Find Beauty Deals, Whenever, Wherever',
         'Where Girl Meets Beauty Fairy Godmother'
    ];
    
    number = 0;
    sub = this.subHeaders[this.number];
    constructor() {
     }

    ngOnInit() {
       
    }
    
}
