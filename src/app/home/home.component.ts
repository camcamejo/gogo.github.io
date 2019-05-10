import { Directive, Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';
import { Back } from 'gsap';
declare var $:any

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    
    constructor() {
     }

    ngOnInit() {
      $(document).ready(function() {
        $(".splash-title").lettering('lines');
        $(".splash-button").lettering();
      });
      
      $(document).ready(function() {
          animation();
          setTimeout(function(){
            $('html, body').animate({
              scrollTop:$("#deals").offset().top}, 2000);
              return false;
          }, 2000);
      }, 5000);
      
      $('.splash-button').click(function() {
          animation();
      });
      
      
      function animation() {
          var title1 = new TimelineMax();
          title1.to(".splash-button", 0, {visibility: 'hidden', opacity: 0})
          title1.staggerFromTo(".splash-title span", 0.5, 
          {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
          {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.5);
          title1.to(".splash-button", 0.2, {visibility: 'visible' ,opacity: 1})
      }
      
    
    }
    
}
