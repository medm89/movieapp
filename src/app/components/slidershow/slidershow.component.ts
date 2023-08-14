import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movies.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slidershow',
  templateUrl: './slidershow.component.html',
  styleUrls: ['./slidershow.component.css']
})
export class SlidershowComponent implements OnInit, AfterViewInit {

  @Input() movies:Movie[] = [];
  public mySwiper!: Swiper;
  
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(){
    //console.log(this.movies);
  }
  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
