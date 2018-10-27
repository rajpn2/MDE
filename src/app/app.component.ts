import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig ]
})
export class AppComponent implements OnInit{
  ngOnInit(){

  }

  constructor(config:NgbCarouselConfig){
    config.interval=2000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false;
  }
  title = 'MDE';
}
